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
      <input type="text" placeholder="Name" value={safeUser.name} onChange={updateName} />
      <input type="number" placeholder="Age" value={safeUser.age} onChange={updateAge} />
    </div>
  );
}

export default UserInfo;