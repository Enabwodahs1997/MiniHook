import { useState } from "react";

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue); 
  const toggle = () => setValue(!value);

  function toggleValue() {
    toggle(!value);
  }


  return [value, toggle, toggleValue];
}

export function useCounter() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    function reset() {
        setCount(0);
    }

    return { count, increment, decrement, reset };
}