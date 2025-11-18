function ProductSidebar({ product, onClose, onAddToCart }) {
  try {
    const [selectedSize, setSelectedSize] = React.useState(null);
    const [selectedColor, setSelectedColor] = React.useState(product.colors[0]);
    const [quantity, setQuantity] = React.useState(1);

    const handleAddToCart = () => {
      if (selectedSize) {
        onAddToCart();
        alert('Producto agregado al carrito');
      } else {
        alert('Por favor selecciona una talla');
      }
    };

    return (
      <>
        <div className="position-fixed top-0 start-0 w-100 h-100" 
             style={{ background: 'rgba(0,0,0,0.7)', zIndex: 1050, backdropFilter: 'blur(5px)' }}
             onClick={onClose}
             data-name="sidebar-overlay"
             data-file="components/ProductSidebar.js"
        ></div>
        
        <div className="position-fixed top-0 end-0 h-100 glass-effect overflow-auto" 
             style={{ width: '450px', maxWidth: '90vw', zIndex: 1051, animation: 'slideIn 0.3s ease' }}
             data-name="product-sidebar"
        >
          <style>
            {`@keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }`}
          </style>
          
          <div className="p-4">
            <button className="btn btn-link text-light float-end" onClick={onClose}>
              <i className="icon-x fs-4"></i>
            </button>
            <h3 className="fw-bold mb-4">{product.name}</h3>
            
            <img src={product.image} alt={product.name} className="w-100 rounded-3 mb-4" />
            
            <div className="mb-4">
              <h5 className="mb-3">Colores Disponibles</h5>
              <div className="d-flex gap-2">
                {product.colors.map(color => (
                  <div 
                    key={color}
                    className={`rounded-circle ${selectedColor === color ? 'border border-3' : ''}`}
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      background: color, 
                      cursor: 'pointer',
                      borderColor: 'var(--accent-color) !important'
                    }}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h5 className="mb-3">Tallas</h5>
              <div className="d-flex gap-2 flex-wrap">
                {product.sizes.map(size => (
                  <button 
                    key={size}
                    className={`btn ${selectedSize === size ? 'btn-accent' : 'glass-effect text-light'}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="d-flex align-items-center justify-content-between mb-4">
              <span className="fs-3 fw-bold" style={{ color: 'var(--accent-color)' }}>${product.price}</span>
              <span className="text-muted">Stock: {product.stock} unidades</span>
            </div>
            
            <button className="btn btn-accent w-100 py-3" onClick={handleAddToCart}>
              Agregar al Carrito
            </button>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error('ProductSidebar component error:', error);
    return null;
  }
}