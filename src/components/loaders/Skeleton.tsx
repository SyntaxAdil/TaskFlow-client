const TodosSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      {[...Array(4)].map((_, idx) => (
        <div
          key={idx}
          className="animate-pulse flex items-center gap-4 bg-slate-800/50 border border-slate-700/30 rounded-xl px-4 py-3"
        >
          <div className="w-5 h-5 rounded-full bg-slate-700 shrink-0" />

          <div className="flex-1 space-y-2">
            <div className="h-4 bg-slate-700 rounded-md w-3/4" />

            <div className="h-3 bg-slate-700/60 rounded-md w-1/3" />
          </div>

          <div className="flex gap-2 shrink-0">
            <div className="w-8 h-8 bg-slate-700 rounded-lg" />
            <div className="w-8 h-8 bg-slate-700 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodosSkeleton;
