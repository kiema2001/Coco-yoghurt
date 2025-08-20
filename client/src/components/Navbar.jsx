import { Link, NavLink } from 'react-router-dom';

export default function Navbar({ user, onLogout }) {
  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="font-bold text-xl">🥥 Coconut Yoghurt</Link>
        <div className="flex gap-4 items-center">
          <NavLink to="/product" className="hover:text-sky-600">Product</NavLink>
          <NavLink to="/blog" className="hover:text-sky-600">Updates</NavLink>
          <NavLink to="/contact" className="hover:text-sky-600">Contact</NavLink>
          {!user ? (
            <NavLink to="/login" className="btn btn-primary">Staff Login</NavLink>
          ) : (
            <div className="flex items-center gap-3">
              <NavLink to="/staff" className="btn">Dashboard</NavLink>
              <button onClick={onLogout} className="btn">Logout</button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

