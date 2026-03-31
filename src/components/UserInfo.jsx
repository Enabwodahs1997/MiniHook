import React from "react";

function UserInfo({ user, setUser }) {
  const safeUser = user ?? { name: "", age: 0 };

  function updateName(event) {
    setUser({ ...safeUser, name: event.target.value });
  }

  function updateAge(event) {
    const nextAge = Number.parseInt(event.target.value, 10);
    setUser({ ...safeUser, age: Number.isNaN(nextAge) ? 0 : nextAge });
  }

  return (
    <div>
      <h2>User Information</h2>
      <input
        type="text"
        placeholder="Name"
        value={safeUser.name}
        onChange={updateName}
        className="rounded-md border-2 border-slate-500 px-3 py-2 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-300"
      />
      <input
        type="number"
        placeholder="Age"
        value={safeUser.age}
        onChange={updateAge}
        className="rounded-md border-2 border-slate-500 px-3 py-2 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-300"
      />
    </div>
  );
}

export default UserInfo;