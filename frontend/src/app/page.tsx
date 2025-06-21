"use client";

import { useState } from "react";

export default function HomePage() {
  const [response1, setResponse1] = useState("");
  const [response2, setResponse2] = useState("");

  const handleCall = async (
    route: string,
    setResponse: (msg: string) => void
  ) => {
    try {
      const res = await fetch(route);
      const data = await res.json();
      setResponse(JSON.stringify(data));
      setTimeout(() => setResponse(""), 5000);
    } catch (err) {
      setResponse("Error calling API route: " + err);
      console.log(err);
      setTimeout(() => setResponse(""), 5000);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8 flex flex-col items-center gap-10">
      <section className="text-center">
        <h1 className="text-4xl text-gray-900 font-bold mb-2">
          Welcome to the DevOps Assignment App
        </h1>
        <p className="text-gray-600">
          Click a button to call the backend via Next.js API routes.
        </p>
      </section>

      <section className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl text-gray-700 font-semibold mb-4">
          API 1 - Health
        </h2>
        <button
          onClick={() => handleCall("/api/health", setResponse1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Call health endpoint
        </button>
        {response1 && (
          <div className="mt-4 p-3 bg-green-100 text-green-800 rounded">
            {(() => {
              try {
                const obj = JSON.parse(response1);
                if (typeof obj === "object" && obj !== null) {
                  return (
                    <ul>
                      {Object.entries(obj).map(([key, value]) => (
                        <li key={key}>
                          <strong>{key}:</strong> {String(value)}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return response1;
              } catch {
                return response1;
              }
            })()}
          </div>
        )}
      </section>

      <section className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          API 2 - Message
        </h2>
        <button
          onClick={() => handleCall("/api/message", setResponse2)}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Call Message API
        </button>
        {response2 && (
          <div className="mt-4 p-3 bg-yellow-100 text-yellow-800 rounded">
            {(() => {
              try {
                const obj = JSON.parse(response2);
                if (typeof obj === "object" && obj !== null) {
                  return (
                    <ul>
                      {Object.entries(obj).map(([key, value]) => (
                        <li key={key}>
                          <strong>{key}:</strong> {String(value)}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return response2;
              } catch {
                return response2;
              }
            })()}
          </div>
        )}
      </section>
    </main>
  );
}
