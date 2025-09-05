function Input() {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
            focus:ring-blue-500 ${className}`}
    />
  );
}
export default Input;
