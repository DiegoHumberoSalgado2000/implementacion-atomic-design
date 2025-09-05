export default function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-sm font-medium text-gray-500">{subtitle}</p>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h2>
      {description && <p className="mt-2 text-gray-600">{description}</p>}
    </div>
  );
}