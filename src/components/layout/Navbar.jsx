import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="p-4 border-b">
      <Link to="/" className="px-4 py-2 hover:text-blue-600">Home</Link>
      <Link to="/about" className="px-4 py-2 hover:text-blue-600">About</Link>
      <Link to="/projects" className="px-4 py-2 hover:text-blue-600">Projects</Link>
    </nav>
  );
}