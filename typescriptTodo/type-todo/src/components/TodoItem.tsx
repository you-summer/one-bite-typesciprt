import { useTodoDispatch } from "../App";
import type { Todo } from "../types";

interface Props extends Todo {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const dispatch = useTodoDispatch();

  const onClickButton = () => {
    dispatch.onClickDelete(todo.id);
  };

  return (
    <div>
      {todo.id}번 | {todo.content}
      <button onClick={onClickButton} className="rounded-sm border px-2 py-1">
        삭제
      </button>
    </div>
  );
};
export default TodoItem;
