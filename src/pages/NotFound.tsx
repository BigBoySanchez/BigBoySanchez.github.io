import { type JSX } from 'react';

function NotFound(): JSX.Element {
  return (
    <div className="bg-gradient-to-b from-[#2B2036] to-[#5c4a80] min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold font-[inter] mb-4">404</h1>
      <p className="text-xl font-[inter] mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="
          border-2 border-white rounded-lg p-2 
          hover:bg-white active:bg-white transition-colors 
          font-[inter] text-white 
          hover:text-[#211B33] active:text-[#211B33] 
          flex items-center justify-center px-4 py-2
        "
        aria-label="Return to Home Page"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default NotFound;