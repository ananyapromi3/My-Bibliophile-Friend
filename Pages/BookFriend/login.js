import { useState } from 'react';

export default function Login() {
  const [Username, setUsername]= usestate('');
  return (
    <div>
      <h1>Welcome to bookman login</h1>
      <label>
        Username: <input name="username" defaultValue="username"/>
      </label>
      <br/>
      <label>
        Password: <input name="password" defaultValue="password" />
      </label>
    </div>
  );
}
