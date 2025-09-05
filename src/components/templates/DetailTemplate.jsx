export default function DetailTemplate({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <main className="w-full max-w-5xl">{children}</main>
    </div>
  );
}