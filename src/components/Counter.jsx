import React from "react";
import { useCounter } from "./Hooks";

export function Counter() {
    const { count, increment, decrement, reset } = useCounter();

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold text-slate-800">Count: {count}</h1>
            <div className="flex flex-wrap gap-3">
                <button
                    onClick={increment}
                    className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white shadow-sm transition-colors hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                >
                    Increment
                </button>
                <button
                    onClick={decrement}
                    className="rounded-lg bg-amber-600 px-4 py-2 font-medium text-white shadow-sm transition-colors hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                >
                    Decrement
                </button>
                <button
                    onClick={reset}
                    className="rounded-lg bg-slate-700 px-4 py-2 font-medium text-white shadow-sm transition-colors hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
