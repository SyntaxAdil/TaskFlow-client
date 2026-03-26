import axios from "axios";
import { useEffect, useState, type ReactNode } from "react";
import { createContext, useContext } from "react";

export interface Todo {
  _id: string;
  title: string;
  isDone: boolean;
  updatedAt: string;
  createdAt: string;
}
interface TodoContextType {
  todos: Todo[];
  addTodo: (todoInput: { title: string }) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  handleChecks: (id: string, currentIsDone: boolean) => Promise<void>;
  handleEdit: (id: string, title: string) => Promise<void>;
  isLoading: boolean;
  handlePopUp: (todoInput: { _id: string; title: string }) => void;
  openInfoPopup: boolean;
  infoPopup: string | null;
  setOpneInfoPopup: (value: boolean) => void;
}

const TodoContextAPI = createContext<TodoContextType | null>(null);
// eslint-disable-next-line react-refresh/only-export-components
export const useTodo = () => {
  const context = useContext(TodoContextAPI);
  if (!context) throw new Error("useTodo must be used inside TodoContext");
  return context;
};

// ?Funtion here
const TodoContext = ({ children }: { children: ReactNode }) => {
  const baseURL = import.meta.env.VITE_API_URL;
  const [todos, setTodo] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openInfoPopup, setOpneInfoPopup] = useState<boolean>(false);
  const [infoPopup, setInfoPopup] = useState<string | null>(null);
  const fetchTodo = async () => {
    try {
      setIsLoading(true);
      const todo = await axios.get(`${baseURL}/todos`);
      setTimeout(() => setTodo(todo.data.data), 0);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const addTodo = async (todoInput: { title: string }) => {
    try {
      setIsLoading(true);
      const todo = await axios.post(`${baseURL}/add-todo`, todoInput);
      const newTodo = todo.data.data;
      setTodo((prev) => [...prev, newTodo]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const deleteTodo = async (id: string) => {
    if (!id) return;
    try {
      setIsLoading(true);
      await axios.delete(`${baseURL}/todos/${id}`);

      setTodo((prev) => prev.filter((i) => i._id !== id));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChecks = async (id: string, currentIsDone: boolean) => {
    if (!id) return;
    try {
      setIsLoading(true);
      const res = await axios.put(`${baseURL}/todos/${id}`, {
        isDone: !currentIsDone,
      });
      const updatedTodo = res.data.data;
      setTodo((prev) =>
        prev.map((todo) => (todo._id === id ? updatedTodo : todo)),
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleEdit = async (id: string, title: string) => {
    if (!id) return;
    try {
      setIsLoading(true);
      const res = await axios.put(`${baseURL}/todos/${id}`, {
        title: title,
      });
      const updatedTodo = res.data.data;
      setTodo((prev) =>
        prev.map((todo) => (todo._id === id ? updatedTodo : todo)),
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePopUp = (todoInput: { _id: string; title: string }) => {
    const { title } = todoInput;
    if (!title) return;
    setInfoPopup(title);
    setOpneInfoPopup(true);
  };

  const value = {
    todos,
    addTodo,
    deleteTodo,
    handleChecks,
    handleEdit,
    isLoading,
    handlePopUp,
    infoPopup,
    openInfoPopup,
    setOpneInfoPopup,
  };

  return (
    <TodoContextAPI.Provider value={value}>{children}</TodoContextAPI.Provider>
  );
};

export default TodoContext;
