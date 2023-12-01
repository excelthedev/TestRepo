import { useState } from "react";
import Count from "./Count";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Steps() {
  // const step = 1;
  // any react function that starts with use is a Hook.
  // use state takes an initial value for its argument, then it has a initial state with the initial value and a set state which is an updater function
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // this is an event handler function
  function handlePrevious() {
    // setStep here is taking in the current value of the step state, and then updating it
    // updating states based on the current value of the state
    if (step > 1) setStep((step) => step - 1);
  }

  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }

  function handleOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div>
      <button className="close" onClick={handleOpen}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950fc", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950fc", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      {/* <Steps />
      <Steps /> */}
      <Count />
    </div>
  );
}

export default App;
