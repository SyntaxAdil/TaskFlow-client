import AllTodos from "./components/AllTodos";
import CharContainer from "./components/Charts/CharContainer";
import Create from "./components/Create";
import TodoContextProvider from "./contexts/TodoContext";
const App = () => {
  return (
    <TodoContextProvider>
     <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,#1e1b4b_0%,#0f172a_60%)]">
        <Create />
        <AllTodos />
        <CharContainer />

         {/* Footer */}
      <p className="text-center text-slate-600 text-xs pt-8 pb-16">
        &copy; Abdur Rahman Adil
      </p>
      </div>
    </TodoContextProvider>
  );
};

export default App;
