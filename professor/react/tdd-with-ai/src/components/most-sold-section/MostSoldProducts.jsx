import ProductCard from '../product-card/ProductCard'
import './most-sold-products.scss'

function MostSoldProducts() {
  const products = [
    {
      id: 1,
      name: 'Fone de Ouvido Premium',
      description: 'Som de alta qualidade com cancelamento de ruído',
      price: 499.99,
      image: 'https://via.placeholder.com/240x180?text=Fone+de+Ouvido',
      rating: 5,
      reviews: 128,
      discount: 15
    },
    {
      id: 2,
      name: 'Relógio Inteligente Pro',
      description: 'Monitoramento avançado de atividades e notificações',
      price: 899.99,
      image: 'https://via.placeholder.com/240x180?text=Relogio+Inteligente',
      rating: 4,
      reviews: 95,
      discount: 10
    },
    {
      id: 3,
      name: 'Carregador Wireless',
      description: 'Carregamento rápido para todos os dispositivos',
      price: 149.99,
      image: 'https://via.placeholder.com/240x180?text=Carregador',
      rating: 5,
      reviews: 234,
      discount: 0
    },
    {
      id: 4,
      name: 'Caixa de Som Portátil',
      description: 'Som cristalino com design portátil e compacto',
      price: 299.99,
      image: 'https://via.placeholder.com/240x180?text=Caixa+de+Som',
      rating: 4,
      reviews: 156,
      discount: 20
    },
    {
      id: 5,
      name: 'Cabo USB-C',
      description: 'Cabo durável e de carregamento rápido',
      price: 59.99,
      image: 'https://via.placeholder.com/240x180?text=Cabo+USB-C',
      rating: 5,
      reviews: 412,
      discount: 5
    },
    {
      id: 6,
      name: 'Suporte para Celular',
      description: 'Suporte ajustável para todos os celulares',
      price: 89.99,
      image: 'https://via.placeholder.com/240x180?text=Suporte+Celular',
      rating: 4,
      reviews: 87,
      discount: 0
    }
  ]

  return (
    <section className="most-sold-products">
      <div className="most-sold-products__header">
        <h2 className="most-sold-products__title">Produtos Mais Vendidos</h2>
        <p className="most-sold-products__subtitle">Confira os favoritos dos nossos clientes</p>
      </div>

      <div className="most-sold-products__grid sub">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default MostSoldProducts
