import * as React from "react";

export default function AITrainingButton() {
  const handleClick = () => {
    window.dispatchEvent(new Event('openAITrainingModal'));
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center text-lg px-8 py-4 font-semibold rounded-md shadow-lg hover:scale-105 transition-all duration-200 text-white border-2 bg-[#F66733] border-[#F66733] hover:bg-[#e55a2d] hover:border-[#e55a2d]"
      style={{
        fontFamily: 'Poppins, sans-serif'
      }}
    >
      Reserve Your Spot
    </button>
  );
}
