import { useState } from "react";
import { motion } from "motion/react";
import ReactLogo from "./assets/react.svg";
import "./App.css";
import { StackedComponent } from "./StackedComponent";

function App() {
  const [overlay, setOverlay] = useState(false);
  const [toasts, setToasts] = useState<string[]>([]);

  return (
    <>
      <section>
        <h2 className="font-bold">Overlay</h2>
        <p>Overlay for modal</p>
        <button
          className="rounded-md"
          onClick={() => {
            setOverlay(!overlay);
          }}
        >
          Show Overlay
        </button>
        <motion.div className={`overlay ${overlay ? "overlay-appear" : ""}`}>
          <div className="overlay-content-header">
            <button
              className="rounded-md"
              onClick={() => {
                setOverlay(!overlay);
              }}
            >
              Close
            </button>
          </div>
        </motion.div>
      </section>

      <section>
        <h2 className="font-bold">Text appearance</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>Text appeared in 1 second</p>
        </motion.div>

        <motion.li
          initial={{ transform: "translateX(100px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ type: "spring", duration: 1 }}
        >
          Text appears with spring animation from left side
        </motion.li>

        <div className="translate-10-10">
          This text is transformed using `transform: translate(10%, 10%);`
        </div>
      </section>
      <section>
        <h2 className="font-bold">Buttons</h2>
        <section className="section-wrap bg-amber-50">
          <div className="toasts">
            {toasts.map((toast, index) => (
              <div key={index} className="toast">
                {toast} {index}
              </div>
            ))}
          </div>
        </section>

        <button
          className="rounded-md"
          onClick={() => {
            setToasts([...toasts, "Hello toast"]);
          }}
        >
          Generate toast
        </button>
      </section>
      <section>
        <h2 className="font-bold">Rotations</h2>
        <img className="rotated" src={ReactLogo} alt="" />
      </section>

      <section>
        <h2 className="font-bold">Stacked component</h2>
        <div className="p-4">
          <StackedComponent></StackedComponent>
        </div>
      </section>

      <h2 className="font-bold">Transition</h2>
      <div className="ball inline-block">
        <div className="ball-child w-16 h-16 rounded-full bg-amber-200"></div>
      </div>

      <h2 className="font-bold">Card hover</h2>
      <a
        className="card flex items-end w-44 h-56 border-1 border-gray-200 rounded-2xl p-1 text-black"
        tabIndex={0}
      >
        <div className="card-description w-full border-1 border-gray-200 rounded-2xl p-3 bg-gray-50 text-black text-xs">
          <p className="font-semibold">Project name</p>
          <p className="text-gray-400">Project description</p>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            className="card-icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.33333 0.4375C6.33333 0.195877 6.52922 0 6.77083 0H10.5625C10.8041 0 11 0.195877 11 0.4375V4.22917C11 4.47078 10.8041 4.66667 10.5625 4.66667C10.3209 4.66667 10.125 4.47078 10.125 4.22917V1.49372L7.08017 4.53851C6.90932 4.70937 6.63235 4.70937 6.46149 4.53851C6.29063 4.36765 6.29063 4.09068 6.46149 3.91981L9.50626 0.875H6.77083C6.52922 0.875 6.33333 0.679122 6.33333 0.4375ZM0.5 6.27083C0.5 6.02922 0.695877 5.83333 0.9375 5.83333C1.17912 5.83333 1.375 6.02922 1.375 6.27083V9.00626L4.41981 5.96149C4.59068 5.79063 4.86765 5.79063 5.03851 5.96149C5.20937 6.13235 5.20937 6.40932 5.03851 6.58017L1.99372 9.625H4.72917C4.97078 9.625 5.16667 9.82088 5.16667 10.0625C5.16667 10.3041 4.97078 10.5 4.72917 10.5H0.9375C0.695877 10.5 0.5 10.3041 0.5 10.0625V6.27083Z"
              fill="#58585F"
            />
          </svg>
        </div>
      </a>
      <h2 className="font-bold">Download arrow</h2>
      <button className="download-btn w-8 h-8 flex flex-col items-center justify-center rounded-full overflow-hidden">
        <div className="download-arr-one">
          <svg
            className="block"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 25 25"
          >
            <path
              style={{ fill: "#232326" }}
              d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z"
            />
          </svg>
        </div>
        <div className="download-arr-two">
          <svg
            className="block"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 25 25"
          >
            <path
              style={{ fill: "#232326" }}
              d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z"
            />
          </svg>
        </div>
      </button>
    </>
  );
}

export default App;
