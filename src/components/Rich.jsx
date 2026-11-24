// Renders **bold** markers from data.js
export default function Rich({ text }) {
  return text.split("**").map((part, i) =>
    i % 2 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
  );
}