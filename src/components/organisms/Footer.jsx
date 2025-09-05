import NavLink from "../molecules/NavLink";

function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10 py-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-10">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Fortaleciendo. Todos los derechos
          reservados.
        </p>
        <ul className="flex gap-6 text-gray-600 text-sm">
          <li>
            <NavLink href="/privacidad" label="privacidad" />
          </li>
          <li>
            <NavLink href="/terminos" label="Términos" />
          </li>
          <li>
            <NavLink href="/contacto" label="Contacto" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
