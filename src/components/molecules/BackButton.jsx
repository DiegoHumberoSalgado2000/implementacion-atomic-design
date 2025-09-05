"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Button from "../atoms/Button";

export default function BackButton({ label = "Volver" }) {
  const router = useRouter();

  return (
    <Button
      variant="secondary"
      onClick={() => router.back()}
      className="flex items-center gap-2"
    >
      <ArrowLeft size={18} />
      {label}
    </Button>
  );
}