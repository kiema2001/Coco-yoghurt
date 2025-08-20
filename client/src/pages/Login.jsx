import React, { useState } from 'react';
import { api } from '../api';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await api('/auth/login', { method: 'POST', body: { email, password } });
      onLogin(data.user);
    } catch (e) { setError(e.message); }
  };

  return (
    <section className="max-w-sm mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Staff Login</h2>
      {error && <p className="text-red-600 mb-3">{error}</p>}
      <form onSubmit={submit} className="space-y-3">
        <input className="w-full p-3 border rounded-xl" placeholder="Email"
          value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="w-full p-3 border rounded-xl" placeholder="Password"
          value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn btn-primary w-full" type="submit">Login</button>
      </form>
      <p className="text-xs text-gray-500 mt-3">Ask your admin to create your account.</p>
    </section>
  );
}

