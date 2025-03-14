export default function Hero({ title, description, buttonText, bgImage }) {
    return (
      <div className="relative w-full min-h-[450px] flex items-center bg-black px-8">
        {/* Background Image
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10" 
          style={{ backgroundImage: `url(${bgImage})` }} 
        ></div>
   */}
        {/* Content Section */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-lg">
            {description}
          </p>
          <button className="bg-green-500 px-4 py-2 text-lg font-semibold rounded-md hover:bg-green-600 transition">
            {buttonText}
          </button>
        </div>
      </div>
    );
  }
  