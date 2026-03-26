import { X, Info, CheckCircle2, Clock, RefreshCw } from "lucide-react";
import { useTodo } from "../../contexts/TodoContext";

const TodoInfoPopup = () => {
  const { openInfoPopup, infoPopup, setOpneInfoPopup } = useTodo();

  return (
    <>
      {openInfoPopup && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
            onClick={() => setOpneInfoPopup(false)}
          />

          {/* Popup */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm px-4">
            <div
              className="relative rounded-3xl p-6 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              {/* Glow blob */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-300">
                    <Info size={16} />
                  </div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-indigo-300">
                    Task Details
                  </span>
                </div>
                <button
                  onClick={() => setOpneInfoPopup(false)}
                  className="p-1.5 rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 mb-5" />

              {/* Content rows */}
              <div className="flex flex-col gap-3">

                {/* Title */}
                <div className="flex items-start gap-3 bg-white/5 rounded-2xl px-4 py-3  ">
                  <CheckCircle2
                    size={16}
                    className={`mt-0.5 shrink-0 ${infoPopup?.isDone ? "text-emerald-400" : "text-slate-500"}`}
                  />
                  <div className=" overflow-hidden" >
                    <p className="text-xs text-white/40 mb-1">Title</p>
                    <p className="text-white/90 text-sm leading-relaxed wrap-break-word">
                      {infoPopup?.title}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3">
                  <CheckCircle2 size={16} className="shrink-0 text-indigo-400" />
                  <div>
                    <p className="text-xs text-white/40 mb-1">Status</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${infoPopup?.isDone ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                      {infoPopup?.isDone ? "Completed" : "Pending"}
                    </span>
                  </div>
                </div>

                {/* Created At */}
                <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3">
                  <Clock size={16} className="shrink-0 text-indigo-400" />
                  <div>
                    <p className="text-xs text-white/40 mb-1">Created At</p>
                    <p className="text-white/90 text-sm">
                      {new Date(infoPopup?.createdAt ?? "").toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Updated At */}
                <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3">
                  <RefreshCw size={16} className="shrink-0 text-indigo-400" />
                  <div>
                    <p className="text-xs text-white/40 mb-1">Updated At</p>
                    <p className="text-white/90 text-sm">
                      {new Date(infoPopup?.updatedAt ?? "").toLocaleString()}
                    </p>
                  </div>
                </div>

              </div>

              {/* Button */}
              <button
                onClick={() => setOpneInfoPopup(false)}
                className="mt-6 w-full py-2.5 rounded-2xl text-sm font-semibold text-white transition-all duration-200 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, rgba(99,102,241,0.8), rgba(139,92,246,0.8))",
                  border: "1px solid rgba(99,102,241,0.4)",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
                }}
              >
                Got it
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TodoInfoPopup;