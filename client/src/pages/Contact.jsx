import React, { useEffect, useState } from 'react';
import { api } from '../api';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try { setPosts(await api('/posts')); }
      catch (e) { setError(e.message); }
    })();
  }, []);

  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-semibold">Project Updates</h2>
      {error && <p className="text-red-600">{error}</p>}
      <div className="grid gap-4">
        {posts.map(p => (
          <article key={p._id} className="card">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{p.content}</p>
            <p className="text-xs text-gray-500 mt-2">
              {new Date(p.createdAt).toLocaleString()}
            </p>
          </article>
        ))}
        {posts.length === 0 && !error && <p>No updates yet.</p>}
      </div>
    </section>
  );
}

