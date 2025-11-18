function Navbar({ cartCount }) {
  try {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [searchExpanded, setSearchExpanded] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <nav 
        className={`navbar navbar-expand-lg navbar-dark fixed-top glass-effect ${isScrolled ? 'py-2' : 'py-3'}`}
        style={{ transition: 'all 0.3s ease' }}
        data-name="navbar"
        data-file="components/Navbar.js"
      >
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#inicio">
            <span style={{ color: 'var(--accent-color)' }}>Sneaker</span>Pro
          </a>
          
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#nuevos">Nuevos</a></li>
              <li className="nav-item"><a className="nav-link" href="#proximos">Próximos</a></li>
              <li className="nav-item"><a className="nav-link" href="#disponibilidad">Disponibilidad</a></li>
              <li className="nav-item"><a className="nav-link" href="#ofertas">Ofertas</a></li>
            </ul>
            
            <div className="d-flex align-items-center gap-3">
              <div className={`search-box ${searchExpanded ? 'expanded' : ''}`}>
                <input 
                  type="text" 
                  className="form-control bg-transparent border-0 text-light"
                  placeholder="Buscar..."
                  style={{ display: searchExpanded ? 'block' : 'none' }}
                />
                <i className="icon-search" onClick={() => setSearchExpanded(!searchExpanded)} style={{ cursor: 'pointer' }}></i>
              </div>
              <a href="#ayuda" className="text-light"><i className="icon-help-circle"></i></a>
              <a href="#carrito" className="text-light position-relative">
                <i className="icon-shopping-cart"></i>
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" 
                        style={{ background: 'var(--accent-color)', color: 'var(--bg-dark)' }}>
                    {cartCount}
                  </span>
                )}
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    return null;
  }
}