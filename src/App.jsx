import React from "react";
import "./App.css";
import ToggleGreating from "./components/ToggleGreating";
import { Modal } from "./components/Modal";
import Button from "./components/Button";
import { Counter } from "./components/Counter";
import { useLocalStorage } from "./components/LocalStorage";
import UserInfo from "./components/UserInfo";


function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [savedValue, setSavedValue] = useLocalStorage("user", { name: "", age: 0 });

  return (
    <div className="App">
      <ToggleGreating />
      <Button title="Open Modal" onClick={() => setIsModalOpen(true)} />
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      <Counter />
      <p className="mt-4 text-lg font-semibold text-slate-800">Username: {savedValue?.name || "(not set)"}</p>
      <p className="mt-4 text-slate-700">Username and Age: {JSON.stringify(savedValue)}</p>
      <UserInfo user={savedValue} setUser={setSavedValue} />
    </div>
  );
}


export default App;