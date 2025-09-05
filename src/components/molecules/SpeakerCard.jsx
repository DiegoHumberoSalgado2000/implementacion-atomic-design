import Link from "next/link";
import Avatar from "../atoms/Avatar";
import Tag from "../atoms/Tag";

export default function SpeakerCard({ id, image, name, role, company, description, tags, tagsBelow }) {
  return (
    <Link href={`/speakers/${id}`} className="block">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full min-h-[460px]">
        {/* Imagen */}
        <div className="relative">
          <Avatar src={image} alt={name} />
          <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
            {tags.map((tag, idx) => (
              <Tag key={idx} label={tag} variant="tag" />
            ))}
          </div>
        </div>

        {/* Información */}
        <div className="p-6 text-left">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-base text-red-600 font-medium">{role}</p>
          <p className="text-base text-gray-500">{company}</p>
          <p className="text-sm text-gray-500 mt-3 line-clamp-3">{description}</p>

          {tagsBelow.length > 0 && (
            <div className="mt-3 flex gap-2 flex-wrap">
              {tagsBelow.map((tag, idx) => (
                <Tag key={idx} label={tag} variant="tagBelow" />
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>

  );
}
