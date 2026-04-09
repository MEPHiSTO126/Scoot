// src/components/shared/Buttons.jsx
export default function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-scoot-yellow bg-scoot-yellow text-white hover:bg-transparent hover:text-scoot-yellow font-mono font-bold py-3 px-10 transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
}