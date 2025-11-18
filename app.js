class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <h1 className="mb-4">Algo salió mal</h1>
            <button onClick={() => window.location.reload()} className="btn btn-accent">
              Recargar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const [cartCount, setCartCount] = React.useState(0);
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [showSidebar, setShowSidebar] = React.useState(false);

    const handleAddToCart = () => {
      setCartCount(prev => prev + 1);
    };

    const handleProductClick = (product) => {
      setSelectedProduct(product);
      setShowSidebar(true);
    };

    return (
      <div data-name="app" data-file="app.js">
        <Navbar cartCount={cartCount} />
        <HeroCarousel />
        
        <main className="container py-5">
          <section className="mb-5" data-aos="fade-up">
            <h2 className="text-center mb-5 display-4 fw-bold">Productos Destacados</h2>
            <div className="row g-4">
              {PRODUCTS.map(product => (
                <div key={product.id} className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={product.id * 100}>
                  <ProductCard product={product} onClick={() => handleProductClick(product)} />
                </div>
              ))}
            </div>
          </section>
        </main>

        <InstagramCTA />
        <Footer />
        
        {showSidebar && (
          <ProductSidebar 
            product={selectedProduct} 
            onClose={() => setShowSidebar(false)}
            onAddToCart={handleAddToCart}
          />
        )}
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);