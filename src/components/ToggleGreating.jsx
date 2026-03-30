import { useToggle } from "./Hooks";

export default function ToggleGreating() {
  const [value, toggle] = useToggle(false);

 
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold text-slate-800">{value ? "Hello!!" : "Goodbye!!"}</h1>
      <button
        onClick={toggle}
        className="rounded-lg border border-cyan-600 bg-cyan-50 px-4 py-2 font-medium text-cyan-700 transition-colors hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
      >
        Toggle Greating
      </button>
    </div>
  );
}

