// TrendingBlogs.js
import React from 'react';
import b1 from '../../assets/images/b1.jpg';
import b2 from '../../assets/images/b2.png';
import b3 from '../../assets/images/b3.jpg';

const TrendingBlogs = () => {
  const trendingBlogs = [
    {
      id: 1,
      title: '10 Tips for Better Productivity',
      author: 'John Doe',
      date: '2023-10-01',
      excerpt: 'Body text for whatever you’d like to add more to the subheading.',
      image: b1,
    },
    {
      id: 2,
      title: 'The Future of AI in 2024',
      author: 'Jane Smith',
      date: '2023-09-25',
      excerpt: 'Body text for whatever you’d like to expand on the main point.',
      image: b2,
    },
    {
      id: 3,
      title: 'Healthy Eating Habits',
      author: 'Alice Johnson',
      date: '2023-09-20',
      excerpt: 'Body text for whatever you’d like to share more.',
      image: b3,
    },
  ];

  return (
    <div className="p-6 bg-black text-white">
      <h2 className="text-3xl font-bold mb-6">Trending Blogs</h2>
      <div className="grid grid-cols-3 gap-4">
        {trendingBlogs.map((blog) => (
          <div key={blog.id} className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-60 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-sm">{blog.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingBlogs;
