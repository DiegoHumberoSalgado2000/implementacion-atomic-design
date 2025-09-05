export default function Avatar({ src, alt }) {
  if (src) {
    return (
      <div className="w-full h-56 relative"> {/* altura fija más grande */}
        <img
          src={src}
          alt={alt || "Speaker"}
          className="w-full h-full object-cover" // mantiene proporción y llena el espacio
        />
      </div>
    );
  }

  return (
    <div className="w-full h-56 bg-gradient-to-b from-gray-200 to-gray-300" />
  );
}