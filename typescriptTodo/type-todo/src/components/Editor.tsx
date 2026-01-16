import { useState, type ChangeEvent } from "react";
import { useTodoDispatch } from "../App";

export default function Editor() {
  const dispatch = useTodoDispatch();
  const [text, setText] = useState<string>("");

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={onChangeInput}
        className="border border-zinc-700 px-2 py-1"
      />
      <button className="rounded-sm border px-2 py-1" onClick={onClickButton}>
        추가
      </button>
    </div>
  );
}
