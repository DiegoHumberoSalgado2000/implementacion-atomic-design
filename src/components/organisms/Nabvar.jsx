"use client"
import NavLink from "../molecules/NavLink";
import Button from "../atoms/Button";

function Navbar(){
    return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-4 shadow-ms bg-white border-b-2 border-b-gray-400">
      <h2 className="text-xl font-bold text-blue-600">FORTALECIENDO</h2>

      <ul className="flex gap-6 text-gray-700 ml-auto">
        <li><NavLink label="Inicio" href="/" /></li>
        <li><NavLink label="Servicios" href="/servicios" /></li>
        <li><NavLink label="Nosotros" href="/nosotros" /></li>
        <li><NavLink label="Experiencia" href="/experiencia" /></li>
        <li><NavLink label="Contacto" href="/contacto" /></li>
      </ul>

      <Button>Contáctanos</Button>
    </nav>
  );
}
export default Navbar