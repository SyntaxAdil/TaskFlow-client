import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { Plus } from "lucide-react";

const Create = () => {
  const [todoInput, setTodoInput] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (todoInput.trim()) {
      addTodo({ title: todoInput.trim() });
      setTodoInput("");
    } else {
      alert("Write something to add!");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 pt-14 pb-6">
      {/* App header */}
      <div className="mb-10 text-center">
        <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-indigo-400 mb-3">
          MERN Stack App
        </span>
        <h1 className="text-5xl font-black tracking-tight text-white leading-tight">
          Task<span className="text-indigo-400">Flow</span>
        </h1>
        <p className="mt-2 text-slate-400 text-sm">
          Stay focused. Ship faster. Get things done.
        </p>
      </div>

      {/* Input card */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 bg-slate-800/60 backdrop-blur border border-slate-700/50 rounded-2xl px-5 py-4 shadow-xl shadow-black/30 focus-within:border-indigo-500/60 transition-all duration-300"
      >
        <Plus className="text-indigo-400 shrink-0" size={20} />
        <input
          type="text"
          placeholder="What needs to be done today?"
          className="flex-1 bg-transparent text-white placeholder-slate-500 text-base outline-none"
          onChange={(e) => setTodoInput(e.target.value)}
          value={todoInput}
        />
        <button
          type="submit"
          className="shrink-0 bg-indigo-500 hover:bg-indigo-400 active:scale-95 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-all duration-200"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Create;