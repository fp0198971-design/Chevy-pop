function InstagramCTA() {
  try {
    return (
      <a 
        href="https://instagram.com" 
        target="_blank"
        rel="noopener noreferrer"
        className="position-fixed bottom-0 end-0 m-4 btn d-flex align-items-center gap-2 py-3 px-4 border-0"
        style={{ 
          background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)',
          color: 'white',
          fontWeight: '600',
          zIndex: 1000,
          borderRadius: '50px',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(245, 133, 41, 0.4)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 6px 25px rgba(245, 133, 41, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(245, 133, 41, 0.4)';
        }}
        data-name="instagram-cta"
        data-file="components/InstagramCTA.js"
      >
        <i className="icon-instagram"></i>
        <span>Síguenos en Instagram</span>
      </a>
    );
  } catch (error) {
    console.error('InstagramCTA component error:', error);
    return null;
  }
}