import { useState } from "react";

import b1 from "../../assets/images/b1.jpg"
import { FaRegBookmark, FaRegComment, FaRegThumbsUp,FaRegUser } from "react-icons/fa";

const BlogCard = ({ title, description }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-start gap-4">
      <FaRegUser className="text-gray-500 mt-1" size={20} />
      <div>
        <h3 className="text-black font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-2 flex gap-2">
          <button
            className={`px-3 py-1 flex items-center gap-1 text-white rounded-md ${liked ? 'bg-blue-600' : 'bg-green-600'}`}
            onClick={() => setLiked(!liked)}
          >
            <FaRegThumbsUp /> Like
          </button>
          <button
            className={`px-3 py-1 flex items-center gap-1 text-white rounded-md ${bookmarked ? 'bg-yellow-600' : 'bg-green-600'}`}
            onClick={() => setBookmarked(!bookmarked)}
          >
            <FaRegBookmark /> Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default function BlogSection() {
  return (
    <div className="bg-black text-white p-8 flex gap-8">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">Blogs that you might like...</h2>
        <div className="space-y-4">
          <BlogCard title="Title" description="Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." />
          <BlogCard title="Title" description="Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." />
          <BlogCard title="Title" description="Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story." />
        </div>
      </div>
      <div className="flex-1">
        <img src={b1} alt="Blog Image" className="rounded-lg object-cover w-full" />
      </div>
    </div>
  );
}
