import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const addStep = () => {
    if (step >= 1) {
      setStep((s) => s + 1);
    }
  };

  const decreaseStep = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const addCount = () => {
    setCount((s) => s + step);
  };

  const decreaseCount = () => {
    setCount((s) => s - step);
  };

  return (
    <div>
      <button onClick={decreaseStep}>-</button>
      step:{step}
      <button onClick={addStep}>+</button>
      <br />
      <button onClick={decreaseCount}>-</button>
      Count:{count}
      <button onClick={addCount}>+</button>
      <br />
      <p>Today is {new Date().toLocaleDateString()} </p>
      <p>wale added</p>
    </div>
  );
};

export default Count;
