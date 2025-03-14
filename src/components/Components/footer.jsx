import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-6">
      <div className="w-full">
        {/* Section Heading and Buttons */}
        <div className="flex justify-between items-center pb-6 border-b border-green-500">
          <h2 className="text-3xl font-bold">Section heading</h2>
          <div className="space-x-4">
            <button className="bg-green-500 text-black px-4 py-2 rounded-md">Button</button>
            <button className="bg-green-700 text-white px-4 py-2 rounded-md">Secondary button</button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-6 grid grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold">Site name</h3>
          </div>
          {[...Array(3)].map((_, index) => (
            <div key={index}>
              <h4 className="font-semibold">Topic</h4>
              <ul className="mt-2 space-y-1 text-gray-400">
                <li>Page</li>
                <li>Page</li>
                <li>Page</li>
                <li>Page</li>
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex space-x-4 text-gray-400">
          <FaFacebookF size={20} />
          <FaLinkedinIn size={20} />
          <FaYoutube size={20} />
          <FaInstagram size={20} />
        </div>
      </div>
    </footer>
  );
}
