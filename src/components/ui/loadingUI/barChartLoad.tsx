const BarChartLoad: React.FC = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full h-[200px] animate-pulse  flex justify-between">
          <div className="bg-slate-300 animate-pulse w-[150px] h-[150px]"></div>
          <div className="flex ">
            <div className="bg-slate-300 animate-pulse w-[150px] h-[150px] "></div>
            <div className="bg-slate-300 animate-pulse w-[150px] h-[150px] border-l border-slate-500"></div>
          </div>
        </div>
        <div className="w-full mt-5  h-[200px]">
          <div className="bg-slate-200 animate-pulse h-full pb-2"></div>
        </div>
      </div>
    </>
  );
};

export default BarChartLoad;
