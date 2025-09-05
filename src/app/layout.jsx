import DefailtTemplate from "@/components/templates/DefaultTemplate";
import "./globals.css";

export const metadata = {
  title: "Fortaleciendo Empresarial",
  description: "Plataforma de Speakers Aliados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children} {/* 👈 Esto es lo que muestra el contenido de page.jsx */}
      </body>
    </html>
  );
}
