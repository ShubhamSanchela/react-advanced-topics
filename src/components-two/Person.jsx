import React from "react";

function Person({person}) {
  return (
    <div>
      <h2>
        Iam {person.name} . Iam {person.age} yrs old and I have a skill{" "}
        {person.skill}
      </h2>
    </div>
  );
}

export default Person;
