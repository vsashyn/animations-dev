import { useState } from "react";
import { motion } from "motion/react";
import "./App.css";

function App() {
  const [overlay, setOverlay] = useState(false);
  const [toasts, setToasts] = useState<string[]>([]);

  return (
    <>
      <section>
        <h2 className="font-bold">Overlay</h2>
        <p>Overlay for modal</p>
        <button
          onClick={() => {
            setOverlay(!overlay);
          }}
        >
          Show Overlay
        </button>
        <motion.div className={`overlay ${overlay ? "overlay-appear" : ""}`}>
          <div className="overlay-content-header">
            <button
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
          onClick={() => {
            setToasts([...toasts, "Hello toast"]);
          }}
        >
          Generate toast
        </button>
      </section>
    </>
  );
}

export default App;
