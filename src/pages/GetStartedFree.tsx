import { useState } from "react";

const GetStartedFree = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-purple-600 p-8 relative overflow-hidden">
      {/* Decorative floating objects */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-800 opacity-30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 opacity-20 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-400 opacity-10 rounded-full blur-xl animate-spin-slow"></div>

      <div className="z-10 w-full max-w-md bg-black/80 rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-4 text-purple-400 drop-shadow-lg">
          Get Started Free
        </h1>
        <p className="text-lg max-w-xl text-center mb-6 text-purple-200">
          Welcome! Enter your email to start your learning journey with
          EduPlatform.
        </p>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-4"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg bg-purple-950 text-purple-100 placeholder-purple-400 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-105 hover:from-purple-500 hover:to-purple-300 transition"
            >
              Get Started
            </button>
          </form>
        ) : (
          <div className="text-center mt-4">
            <div className="text-2xl font-bold text-purple-300 mb-2">
              Thank you!
            </div>
            <div className="text-purple-200">
              Check your inbox for the next steps.
            </div>
          </div>
        )}
        <div className="mt-8 flex gap-6 justify-center">
          <button className="flex flex-col items-center group">
            <span className="bg-purple-700 p-3 rounded-full group-hover:bg-purple-500 transition">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 4v16m8-8H4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-xs mt-2 text-purple-300 group-hover:text-purple-100">
              Add Course
            </span>
          </button>
          <button className="flex flex-col items-center group">
            <span className="bg-purple-700 p-3 rounded-full group-hover:bg-purple-500 transition">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-xs mt-2 text-purple-300 group-hover:text-purple-100">
              Notifications
            </span>
          </button>
          <button className="flex flex-col items-center group">
            <span className="bg-purple-700 p-3 rounded-full group-hover:bg-purple-500 transition">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.847.607 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-xs mt-2 text-purple-300 group-hover:text-purple-100">
              Profile
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedFree;
