// ChartContainer.tsx
import TodoPieChart from "./TodoChartPie";

const ChartContainer = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 pb-10">
      <div className="bg-slate-800/40 border border-slate-700/40 rounded-2xl p-6">
        <div className="mb-4">
          <h2 className="text-white font-bold text-lg">Progress Overview</h2>
          <p className="text-slate-500 text-sm">Visual breakdown of your tasks</p>
        </div>
        <TodoPieChart />
      </div>
    </div>
  );
};

export default ChartContainer;