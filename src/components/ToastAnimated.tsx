import React, { useState } from "react";
import "./ToastAnimated.css";

const ToastAnimated: React.FC = () => {
    const [toasts, setToasts] = useState<number>(0);
    return (
        <div className="wrapper">
            <div className="toaster">
                {Array.from({ length: toasts }, () => {}).map((el, i) => {
                    return (
                        <div
                            key={i}
                            className="toast-new w-lg border-1 p-4 bg-white rounded-xl shadow-md border-gray-100"
                            style={{
                                "--index": toasts - i,
                            }}
                        >
                            toast {i}
                        </div>
                    );
                })}
            </div>

            <button
                onClick={() => {
                    setToasts(toasts + 1);
                }}
            >
                Create a toast
            </button>
        </div>
    );
};

export default ToastAnimated;
