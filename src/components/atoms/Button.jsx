function Button({
children,
  type = "button",
  onClick,
  variant = "primary",
  className = "",
}) {
  const baseStyles =
    "px-5 py-2 rounded-xl font-semibold shadow-lg transition-transform duration-200 ml-6";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
export default Button;
