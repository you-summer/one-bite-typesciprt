import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import "./App.css";
import Editor from "./components/Editor";
import TodoItem from "./components/TodoItem";
import type { Todo } from "./types";

type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: "DELETE";
      id: number;
    };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((it) => {
        return it.id !== action.id;
      });
    }
  }
}

export const TodoStateContext = createContext<Todo[] | null>(null);
export const TodoDispatchContext = createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("TodoDispatchContext에 문제가 있다");
  return dispatch;
}

function App() {
  const [todo, dispatch] = useReducer(reducer, []);

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  const idRef = useRef(0);
  return (
    <div>
      <h1 className="text-2xl font-bold underline">Todo</h1>
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={{ onClickAdd, onClickDelete }}>
          <Editor />
          <div>
            {todo.map((todo) => {
              return (
                <div>
                  <TodoItem todo={todo} />
                </div>
              );
            })}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
