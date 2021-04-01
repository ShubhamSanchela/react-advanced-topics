import React, { Component } from "react";
import Person from "./Person";

export default class NameList extends Component {
  render() {
    const persons = [
      {
        id: 1,
        name: "Shubham",
        skill: "React JS",
        age: 24,
      },
      {
        id: 2,
        name: "Bruce",
        skill: "Angular JS",
        age: 20,
      },
      {
        id: 3,
        name: "Diana",
        skill: "Vue JS",
        age: 18,
      },
    ];
    const personList = persons.map((person) => <Person  person={person} />);
    return <div>{personList}</div>;
  }
}
