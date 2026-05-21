function PowerPanel() {
  return (
    <div
      className="bg-gradient-to-t from-[#487cec] via-[#034dd6] via-70% to-[#487cec] flex-none p-4
        gap-1 flex justify-end"
    >
      <img src="img/ico/logoff.png" className="flex h-[30px]" />
      <span>
        <a className="underline">L</a>og Off
      </span>
      <div className="w-[10px]"></div>
      <img src="img/ico/power.png" className="flex h-[30px]" />
      <span>
        T<a className="underline">u</a>rn Off Computer
      </span>
    </div>
  );
}

export default PowerPanel;
