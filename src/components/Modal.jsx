import React from "react";


export function Modal({ onClose }) {
    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                <p className="mb-4">This is a simple modal component.</p>
                <button
                    className="rounded-lg bg-rose-600 px-4 py-2 font-medium text-white shadow-sm transition-colors hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
}