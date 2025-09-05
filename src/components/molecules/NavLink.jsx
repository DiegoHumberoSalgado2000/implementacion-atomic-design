function NavLink({ href="#", label  }) {

  return (
    <a
      href={href}
      className="hover:text-blue-600 cursor-pointer transition-colors"
    >
      {label}
    </a>
  );
}
export default NavLink;
