import React, { useEffect, useState } from 'react';
import { api } from '../api';

export default function StaffDashboard({ user }) {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: '', content: '', status: 'published' });
  const [error, setError] = useState('');

  const load = async () => {
    try {
      const data = await api('/posts');
      setPosts(data);
    } catch (e) { setError(e.message); }
  };

  useEffect(() => { load(); }, []);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await api('/posts', { method: 'POST', body: form });
      setForm({ title: '', content: '', status: 'published' });
      load();
    } catch (e) { setError(e.message); }
  };

  const remove = async (id) => {
    try { await api(`/posts/${id}`, { method: 'DELETE' }); load(); }
    catch (e) { setError(e.message); }
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Staff Dashboard</h2>
        <span className="text-sm text-gray-600">Logged in as {user?.name} ({user?.role})</span>
      </div>

      {error && <p className="text-red-600">{error}</p>}

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold mb-3">Create Update</h3>
          <form onSubmit={submit} className="space-y-3">
            <input className="w-full p-3 border rounded-xl" placeholder="Title"
              value={form.title} onChange={e=>setForm({...form,title:e.target.value})} />
            <textarea className="w-full p-3 border rounded-xl" rows="6" placeholder="Content"
              value={form.content} onChange={e=>setForm({...form,content:e.target.value})}></textarea>
            <select className="w-full p-3 border rounded-xl" value={form.status}
              onChange={e=>setForm({...form,status:e.target.value})}>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
            <button className="btn btn-primary" type="submit">Publish</button>
          </form>
        </div>

        <div className="space-y-3">
          {posts.map(p => (
            <article key={p._id} className="card">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-bold">{p.title}</h4>
                  <p className="text-sm text-gray-600">{new Date(p.createdAt).toLocaleString()}</p>
                </div>
                <button className="btn" onClick={() => remove(p._id)}>Delete</button>
              </div>
              <p className="mt-2 whitespace-pre-line">{p.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

