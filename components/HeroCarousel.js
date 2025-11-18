function HeroCarousel() {
  try {
    const slides = [
      {
        id: 1,
        title: "Colección Primavera 2025",
        subtitle: "Nuevos Modelos Exclusivos",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80"
      },
      {
        id: 2,
        title: "Edición Limitada",
        subtitle: "Diseños Únicos y Modernos",
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=1200&q=80"
      },
      {
        id: 3,
        title: "Performance Elite",
        subtitle: "Máximo Rendimiento y Estilo",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200&q=80"
      }
    ];

    return (
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-name="hero-carousel" data-file="components/HeroCarousel.js" style={{ marginTop: '76px' }}>
        <div className="carousel-indicators">
          {slides.map((slide, index) => (
            <button 
              key={slide.id}
              type="button" 
              data-bs-target="#heroCarousel" 
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></button>
          ))}
        </div>
        
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="position-relative" style={{ height: '70vh', overflow: 'hidden' }}>
                <img src={slide.image} className="d-block w-100 h-100" alt={slide.title} style={{ objectFit: 'cover', filter: 'brightness(0.6)' }} />
                <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
                  <h1 className="display-2 fw-bold mb-3" data-aos="fade-up">{slide.title}</h1>
                  <p className="fs-4 mb-4" data-aos="fade-up" data-aos-delay="100">{slide.subtitle}</p>
                  <button className="btn btn-accent btn-lg" data-aos="fade-up" data-aos-delay="200">Ver Colección</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    );
  } catch (error) {
    console.error('HeroCarousel component error:', error);
    return null;
  }
}