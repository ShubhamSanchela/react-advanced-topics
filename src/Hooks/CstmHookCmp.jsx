import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import CustomHook  from './CustomHook';

function CstmHookCmp() {
  const users = CustomHook("https://jsonplaceholder.typicode.com/users");
  console.log(users)

  return (
    <div>
      <div className="container">
        <div className="jumbotron">
          <h1>Custom Hooks Example</h1>
        </div>
        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>User name</th>
                <th>Email</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => {
                return (<tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.website}</td>
                </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CstmHookCmp