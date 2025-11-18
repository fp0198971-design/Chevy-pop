function ProductCard({ product, onClick }) {
  try {
    return (
      <div 
        className="product-card glass-effect rounded-4 overflow-hidden h-100"
        onClick={onClick}
        data-name="product-card"
        data-file="components/ProductCard.js"
      >
        <div className="position-relative" style={{ height: '280px', overflow: 'hidden' }}>
          <img src={product.image} alt={product.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
          {product.isNew && (
            <span className="position-absolute top-0 start-0 m-3 badge" style={{ background: 'var(--accent-color)', color: 'var(--bg-dark)' }}>
              Nuevo
            </span>
          )}
          {product.discount && (
            <span className="position-absolute top-0 end-0 m-3 badge bg-danger">
              -{product.discount}%
            </span>
          )}
        </div>
        
        <div className="p-4">
          <h5 className="fw-semibold mb-2">{product.name}</h5>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              {product.discount ? (
                <>
                  <span className="text-decoration-line-through text-muted me-2">${product.price}</span>
                  <span className="fs-5 fw-bold" style={{ color: 'var(--accent-color)' }}>
                    ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="fs-5 fw-bold" style={{ color: 'var(--accent-color)' }}>${product.price}</span>
              )}
            </div>
            <span className="text-muted small">{product.stock} disponibles</span>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProductCard component error:', error);
    return null;
  }
}