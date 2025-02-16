import React, { useState } from "react";

export const Generate: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [responseData, setResponseData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setResponseData(null);
    try {
      const res = await fetch("http://localhost:5000/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
  
      const data = await res.json();
      console.log("API Response:", data);
  
      if (data.image) {
        setResponseData(`data:image/jpeg;base64,${data.image}`); // Convert Base64 to a valid image source
      } else {
        console.error("Image data not found in API response:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">AI Image Generator</h1>
      <input
        type="text"
        placeholder="Enter a prompt..."
        className="p-2 rounded-lg text-black w-96"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={fetchData}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
      >
        Generate Image
      </button>

      {loading && <p className="mt-4">Loading...</p>}

      {responseData && (
  <div className="mt-6 p-4 bg-gray-800 rounded-lg">
    <img src={responseData} alt="Generated AI Image" className="rounded-lg" />
  </div>
)}

    </div>
  );
};
