import React, { useState } from "react";

function UseStaeObject() {
  const [name, setName] = useState({  firstName: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h1>You First Name : {name.firstName} </h1>
      <h1>You Last Name : {name.lastName} </h1>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
}

export default UseStaeObject;
