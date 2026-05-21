// src/applications/system/theme-provider/ThemeService.ts

import {
  getActiveThemeName,
  setActiveThemeName as updateDisplaySettingTheme,
} from "../settings/DisplaySettings";
import type { FullTheme } from "../desktop-environment/themes/types";
import { loadTheme } from "../desktop-environment/themes/ThemeLoader";
import type { AvailableThemes } from "../settings/types";

type ThemeSubscriber = (theme: FullTheme) => void;
export class ThemeService {
  private currentThemeName: string;
  private loadedThemeData: FullTheme | null = null;
  private subscribers: ThemeSubscriber[] = [];

  constructor() {
    this.currentThemeName = getActiveThemeName();
  }

  public async init(): Promise<void> {
    console.log(
      `ThemeService: Initializing with theme preference ${this.currentThemeName}`,
    );
    await this.loadAndApplyTheme(this.currentThemeName);
  }

  public getCurrentThemeName(): string {
    return this.currentThemeName;
  }

  public getThemeData(): FullTheme | null {
    return this.loadedThemeData;
  }

  public async setTheme(newThemeName: AvailableThemes): Promise<boolean> {
    console.log(`ThemeService: Attempting to set theme to ${newThemeName}`);
    updateDisplaySettingTheme(newThemeName);
    this.currentThemeName = newThemeName;
    return await this.loadAndApplyTheme(newThemeName);
  }
  public subscribe(callback: ThemeSubscriber): () => void {
    this.subscribers.push(callback);
    if (this.loadedThemeData) {
      callback(this.loadedThemeData);
    }
    return () => {
      this.subscribers = this.subscribers.filter((sub) => sub !== callback);
    };
  }

  private notifySubscribers(): void {
    if (this.loadedThemeData) {
      this.subscribers.forEach((callback) => {
        try {
          callback(this.loadedThemeData!);
        } catch (e) {
          console.log(`ThemeService: error calling subscriber callback: ${e}`);
        }
      });
    } else {
      console.log(`ThemeService: No theme data loaded to notify subscribers.`);
    }
  }

  private async loadAndApplyTheme(themeName: string): Promise<boolean> {
    try {
      // 'loadTheme' utility handles dynamic import and fallback to 'default' if 'themeName' not found
      const newThemeData: FullTheme = await loadTheme(themeName);
      this.loadedThemeData = newThemeData;
      this.notifySubscribers();
      console.log(`ThemeService: Successfully applied theme "${themeName}".`);
      return true;
    } catch (error) {
      console.error(
        `ThemeService: A critical error occurred while loading or applying theme "${themeName}".`,
        error,
      );
      this.loadedThemeData = null;
      this.notifySubscribers();
      return false;
    }
  }
}
