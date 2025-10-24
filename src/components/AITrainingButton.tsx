export default function AITrainingButton() {
  const handleClick = () => {
    window.dispatchEvent(new Event('openAITrainingModal'));
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center text-lg px-8 py-4 font-semibold rounded-md shadow-lg transform hover:scale-105 transition-all duration-200 text-white border-2"
      style={{
        backgroundColor: '#F66733',
        borderColor: '#F66733',
        fontFamily: 'Poppins, sans-serif'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#e55a2d';
        e.currentTarget.style.borderColor = '#e55a2d';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#F66733';
        e.currentTarget.style.borderColor = '#F66733';
      }}
    >
      Claim Your Pilot Spot
    </button>
  );
}
