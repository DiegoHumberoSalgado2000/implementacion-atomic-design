import { getSpeakerById, speakers } from "@/lib/speakers";
import SpeakerDetail from "@/components/organisms/SpeakerDetail";
import { notFound } from "next/navigation";
import DetailTemplate from "@/components/templates/DetailTemplate";

// Genera todas las rutas en build time
export async function generateMetadata({ params }) {
  const { id } = await params; // 👈 importante
  const speaker = getSpeakerById(id);

  if (!speaker) return { title: "Speaker no encontrado" };

  return {
    title: `${speaker.name} - ${speaker.company}`,
    description: speaker.description,
  };
}

export default async function SpeakerDetailPage({ params }) {
  const { id } = await params; // 👈 importante
  const speaker = getSpeakerById(id);

  if (!speaker) {
    notFound(); // Página 404 oficial
  }

  return (
    <DetailTemplate>
    <SpeakerDetail speaker={speaker}/>
    </DetailTemplate>
  );
}