import React, { useState, useEffect } from "react";
import "./ToastTransitioned.css";

const ToastTransitioned: React.FC = () => {
    const [toasts, setToasts] = useState<number>(0);
    const [visibleToasts, setVisibleToasts] = useState<Set<number>>(new Set());

    useEffect(() => {
        if (toasts > 0) {
            const newToastIndex = toasts - 1;
            setVisibleToasts((prev) => new Set([...prev, newToastIndex]));
        }
    }, [toasts]);

    return (
        <div className="wrapper2">
            <div className="toaster2">
                {Array.from({ length: toasts }, () => {}).map((el, i) => {
                    return (
                        <div
                            key={i}
                            className={`toast-new2 w-lg border-1 p-4 bg-white rounded-xl shadow-md border-gray-100 ${
                                visibleToasts.has(i) ? "visible" : ""
                            }`}
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

export default ToastTransitioned;
