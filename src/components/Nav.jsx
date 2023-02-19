const Nav = () => {
  return (
    <nav className="pointer-events-auto hidden md:block w-80">
      <ul
        className="flex justify-around rounded-full text-sm font-medium shadow-lg bg-zinc-800/90 ring-white/10 text-zinc-200
                      backdrop-blur px-3 py-3"
      >
        <a href="#about">
          <li className="hover:text-blue-400 cursor-pointer">About</li>
        </a>
        <a href="#projects">
          <li className="hover:text-blue-400 cursor-pointer">Projects</li>
        </a>
        <a href="#contact">
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
