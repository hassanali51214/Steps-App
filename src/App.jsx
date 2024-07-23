import { useState } from "react";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];
function App() {
  const [step, setStep] = useState(1);

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <>
      <div className="px-10 py-10 h-screen bg-slate-400">
        <div
          className="bg-slate-300 h-full rounded-lg px-10 
        flex flex-col justify-center items-center space-y-10"
        >
          <div className="flex justify-between rounded-lg w-full">
            <div
              className={`${
                step >= 1
                  ? "bg-purple-500 text-black"
                  : "bg-slate-800 text-white"
              }  
            rounded-full h-10 w-10 flex 
             justify-center items-center font-medium`}
            >
              1
            </div>
            <div
              className={`${
                step >= 2
                  ? "bg-purple-500 text-black"
                  : "bg-slate-800 text-white"
              }
            rounded-full h-10 w-10 flex 
             justify-center items-center font-medium`}
            >
              2
            </div>
            <div
              className={`${
                step >= 3
                  ? "bg-purple-500 text-black"
                  : "bg-slate-800 text-white"
              }
            rounded-full h-10 w-10 flex 
             justify-center items-center font-medium`}
            >
              3
            </div>
          </div>
          <div className="p-4 font-semibold">
            Step {step} : {messages[step - 1]}
          </div>
          <div className="flex justify-between items-center w-full">
            <button
              className="bg-purple-500 lg:px-6 lg:py-4 hover:text-white 
               rounded-full font-medium flex justify-center items-center
                hover:bg-purple-600 text-xs lg:text-base px-4 py-2"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="bg-purple-500 lg:px-6 lg:py-4 hover:text-white
               rounded-full font-medium flex justify-center items-center
                hover:bg-purple-600 text-xs lg:text-base px-4 py-2"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
