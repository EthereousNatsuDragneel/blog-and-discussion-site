import { Link } from "react-router-dom";
import pfp from "../../assets/pfp.jpg"
export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center border-b border-gray-700">
      {/* Left Side - Blog Title & Navigation */}
      <div className="flex items-center space-x-8">
        <h1 className="text-green-500 text-3xl font-semibold">Blog-Site</h1>
        <div className="flex space-x-6 text-lg">
          <a href="#" className="hover:underline">Page</a>
          <a href="#" className="hover:underline">Page</a>
          <a href="#" className="hover:underline">Page</a>
        </div>
      </div>

      {/* Right Side - Sign up Button & Profile */}
      <div className="flex items-center space-x-6">
        {/* Sign Up Button */}
        <Link to="/signup">
          <button className="bg-green-500 text-black font-medium px-5 py-1.5 rounded-md hover:bg-green-600 transition">
            Sign up
          </button>
        </Link>

        {/* Profile Section */}
        <div className="flex items-center space-x-3">
          <img 
            src= {pfp}
            alt="Profile" 
            className="w-10 h-10 rounded-full border-2 border-gray-600"
          />
          <div className="text-sm leading-tight">
            <p className="font-semibold">Title</p>
            <p className="text-gray-400 text-xs">Description</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
