"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="font-serif italic text-3xl mb-4">Something went wrong.</h2>
      <button
        onClick={() => reset()}
        className="px-6 py-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
