import { useRef } from "react";

export default function Focus() {
  const focusPoint = useRef(null);

  const toggleFocus = () => {
    focusPoint.current.focus();
  };
  return (
    <>
      <input ref={focusPoint} type="text"></input>
      <button onClick={toggleFocus}>Focus</button>
    </>
  );
}
