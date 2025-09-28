import { useState } from "react";
import "./TextReveal.css";

const DELAY = 30;

export default function TextReveal() {
    const [reset, setReset] = useState(0);

    return (
        <div>
            <div key={reset}>
                <h1 className={"reveal-header"}>
                    {"Animation".split("").map((e, i) => {
                        return (
                            <span
                                className="reveal-el"
                                style={{
                                    "--delay": i * DELAY,
                                }}
                            >
                                {e}
                            </span>
                        );
                    })}
                </h1>
            </div>
            <button className="reset-btn" onClick={() => setReset(reset + 1)}>
                Reply animations
            </button>
        </div>
    );
}
