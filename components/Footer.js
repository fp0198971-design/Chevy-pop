function Footer() {
  try {
    return (
      <footer className="py-5 mt-5" style={{ background: 'var(--bg-secondary)' }} data-name="footer" data-file="components/Footer.js">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up">
              <h4 className="fw-bold mb-3">
                <span style={{ color: 'var(--accent-color)' }}>Sneaker</span>Pro
              </h4>
              <p className="text-muted">
                Ofrecemos los mejores tenis deportivos con diseños exclusivos. 
                Nuestra misión es combinar estilo, comodidad y rendimiento en cada producto.
              </p>
            </div>
            
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <h5 className="fw-semibold mb-3">Síguenos</h5>
              <div className="d-flex gap-3">
                <a href="#" className="text-light fs-4"><i className="icon-instagram"></i></a>
                <a href="#" className="text-light fs-4"><i className="icon-facebook"></i></a>
                <a href="#" className="text-light fs-4"><i className="icon-twitter"></i></a>
              </div>
            </div>
            
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <h5 className="fw-semibold mb-3">Contacto</h5>
              <p className="text-muted mb-2"><i className="icon-mail me-2"></i> contacto@sneakerpro.com</p>
              <p className="text-muted"><i className="icon-phone me-2"></i> +1 234 567 8900</p>
            </div>
          </div>
          
          <hr className="my-4" style={{ borderColor: 'var(--glass-border)' }} />
          
          <div className="text-center text-muted">
            <p className="mb-0">© 2025 SneakerPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}