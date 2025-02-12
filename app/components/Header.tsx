const Header = () => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm text-white fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4" aria-label="Główna nawigacja">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Strona główna">
              <span className="text-blue-400" aria-hidden="true">&lt;</span>
              alwood
              <span className="text-blue-400" aria-hidden="true">/&gt;</span>
            </a>
          </div>
          <ul className="flex space-x-8" role="menubar">
            <li role="none"><a href="#" className="hover:text-blue-400 transition-colors" role="menuitem">Home</a></li>
            <li role="none"><a href="#projekty" className="hover:text-blue-400 transition-colors" role="menuitem">Projekty</a></li>
            <li role="none"><a href="#omnie" className="hover:text-blue-400 transition-colors" role="menuitem">O mnie</a></li>
            <li role="none"><a href="#kontakt" className="hover:text-blue-400 transition-colors" role="menuitem">Kontakt</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;