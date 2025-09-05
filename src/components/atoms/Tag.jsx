export default function Tag({ label, variant = "default" }) {
  const variants={
    tag: "bg-[#5B61FF] text-white",
    tagBelow: "bg-gray-200 text-gray-800",
    default: "bg-gray-300 text-black",
    success: "bg-gray-400 text-white",
  }

  return (
    <span className={`text-xs font-medium px-3 py-1 rounded-full ${variants[variant]}`}>
      {label}
    </span>
  );
}