import SectionTitle from "../atoms/SectionTitle";
import SpeakerCard from "../molecules/SpeakerCard";
import { speakers } from "@/lib/speakers";

export default function SpeakersList() {
  return (
    <section className="px-10 py-16">
      <SectionTitle
        subtitle="NUESTRO EQUIPO"
        title="Speakers Aliados"
        description="Profesionales que han dejado huella en el fortalecimiento empresarial del Quindío"
      />

      {/* Grid de 2 filas × 3 columnas */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.slice(0,6).map((s) => (
          <SpeakerCard key={s.id} {...s} />
        ))}
      </div>
    </section>
  );
}