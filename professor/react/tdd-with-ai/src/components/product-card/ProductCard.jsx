import './product-card.scss'

function ProductCard({ product }) {
  const handleAddToCart = (e) => {
    e.preventDefault()
    console.log(`Adicionado "${product.name}" ao carrinho`)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <div className="product-card">
      <div className="product-card__image">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-card__img"
        />
        {product.discount > 0 && (
          <div className="product-card__badge">
            -{product.discount}%
          </div>
        )}
      </div>
      
      <div className="product-card__content">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        
        <div className="product-card__rating">
          <span className="product-card__stars">
            {'⭐'.repeat(product.rating)}
          </span>
          <span className="product-card__reviews">
            ({product.reviews} avaliações)
          </span>
        </div>

        <div className="product-card__footer">
          <span className="product-card__price">
            {formatPrice(product.price)}
          </span>
          <button 
            className="product-card__button"
            onClick={handleAddToCart}
            title="Adicionar ao carrinho"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
