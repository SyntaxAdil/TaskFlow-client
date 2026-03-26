// TodoChartPie.tsx
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { useTodo } from "../../contexts/TodoContext";

const COLORS = ["#6366f1", "#10b981"];
const EMPTY_COLOR = ["#1e293b"];

export default function TodoPieChart() {
  const { todos } = useTodo();

  const doneCount = todos.filter((t) => t.isDone).length;
  const notDoneCount = todos.length - doneCount;

  const data =
    todos.length === 0
      ? [{ name: "No tasks yet", value: 1 }]
      : [
          { name: "Done", value: doneCount },
          { name: "Pending", value: notDoneCount },
        ];

  const colors = todos.length === 0 ? EMPTY_COLOR : COLORS;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6">
      {/* Chart */}
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={90}
            dataKey="value"
            label={({ name, percent }) =>
              todos.length === 0
                ? "No tasks"
                : `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
            }
            labelLine={false}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "10px",
              color: "#f1f5f9",
              fontSize: "13px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      {todos.length > 0 && (
        <div className="flex flex-col gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-indigo-500 shrink-0" />
            <span className="text-slate-300 text-sm">
              Done —{" "}
              <span className="text-white font-semibold">{doneCount}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
            <span className="text-slate-300 text-sm">
              Pending —{" "}
              <span className="text-white font-semibold">{notDoneCount}</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}