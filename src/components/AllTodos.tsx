import { Edit, Save, Trash2, CheckCircle2, Circle } from "lucide-react";
import { useTodo, type Todo } from "../contexts/TodoContext";
import { useState } from "react";
import TodosSkeleton from "./loaders/Skeleton";

const AllTodos = () => {
  const { todos, deleteTodo, handleChecks, handleEdit, isLoading } = useTodo();
  const [selectEdit, setSelectEdit] = useState<string | null>(null);
  const [editTodo, setEditTodo] = useState<string>("");

  const handleEditChange = (t: Todo) => {
    if (selectEdit === t._id) {
      handleEdit(t._id, editTodo);
      setSelectEdit(null);
    } else {
      setEditTodo(t.title);
      setSelectEdit(t._id);
    }
  };

  const doneCount = todos.filter((t) => t.isDone).length;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 pb-6">

      {/* Stats bar */}
      {todos.length > 0 && (
        <div className="flex items-center justify-between mb-4 px-1">
          <span className="text-slate-400 text-sm">
            <span className="text-white font-semibold">{todos.length}</span> tasks
          </span>
          <span className="text-slate-400 text-sm">
            <span className="text-emerald-400 font-semibold">{doneCount}</span> completed
          </span>
        </div>
      )}

      {/* Progress bar */}
      {todos.length > 0 && (
        <div className="w-full h-1 bg-slate-700/50 rounded-full mb-5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full transition-all duration-500"
            style={{ width: `${(doneCount / todos.length) * 100}%` }}
          />
        </div>
      )}

      {/* Todo list */}
      <div className="flex flex-col gap-2 max-h-96 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-700">
        {isLoading ? (
          <TodosSkeleton />
        ) : todos && todos.length > 0 ? (
          todos.map((t) => (
            <div
              key={t._id}
              className={`group flex items-center gap-4 bg-slate-800/50 border rounded-xl px-4 py-3 transition-all duration-200
                ${t.isDone
                  ? "border-slate-700/30 opacity-60"
                  : "border-slate-700/50 hover:border-indigo-500/40 hover:bg-slate-800/80"
                }
                ${selectEdit === t._id ? "border-indigo-500/60 bg-slate-800/90" : ""}
              `}
            >
              {/* Checkbox */}
              <button
                onClick={() => handleChecks(t._id, t.isDone)}
                className="shrink-0 text-slate-500 hover:text-emerald-400 transition-colors duration-200"
              >
                {t.isDone
                  ? <CheckCircle2 size={20} className="text-emerald-400" />
                  : <Circle size={20} />
                }
              </button>

              {/* Title + date */}
              <div className="flex-1 min-w-0">
                <input
                  type="text"
                  className={`w-full bg-transparent text-base outline-none transition-all duration-200
                    ${t.isDone ? "line-through text-slate-500" : "text-white"}
                    ${selectEdit === t._id ? "border-b border-indigo-400 pb-0.5" : "border-b border-transparent"}
                  `}
                  value={selectEdit === t._id ? editTodo : t.title}
                  onChange={(e) => setEditTodo(e.target.value)}
                  disabled={selectEdit !== t._id}
                />
                <p className="text-xs text-slate-600 mt-1">
                  {t.createdAt === t.updatedAt
                    ? `Created ${new Date(t.createdAt).toLocaleString()}`
                    : `Updated ${new Date(t.updatedAt).toLocaleString()}`
                  }
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                  onClick={() => handleEditChange(t)}
                  disabled={t.isDone}
                  className={`p-2 rounded-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed
                    ${selectEdit === t._id
                      ? "bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30"
                      : "text-slate-500 hover:text-indigo-400 hover:bg-slate-700/50"
                    }
                  `}
                >
                  {selectEdit === t._id ? <Save size={16} /> : <Edit size={16} />}
                </button>
                <button
                  onClick={() => deleteTodo(t._id)}
                  className="p-2 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-slate-600">
            <CheckCircle2 size={40} className="mb-3 opacity-30" />
            <p className="text-sm">No tasks yet. Add one above!</p>
          </div>
        )}
      </div>

     
    </div>
  );
};

export default AllTodos;