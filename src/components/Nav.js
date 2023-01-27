const Nav = () => {
  return (
    <nav className="pointer-events-auto md:block w-80">
      <ul className="flex justify-around rounded-full text-sm font-medium shadow-lg bg-zinc-800/90 ring-white/10 text-zinc-200
                      backdrop-blur px-3 py-3">
        <li className="hover:text-blue-400 cursor-pointer">About</li>
        <li className="hover:text-blue-400 cursor-pointer">Projects</li>
        <li className="hover:text-blue-400 cursor-pointer">Social</li>
        <li className="hover:text-blue-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  )
}
