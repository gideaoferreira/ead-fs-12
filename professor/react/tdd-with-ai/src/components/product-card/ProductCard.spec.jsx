import { render, screen } from '../../tests/test-utils'
import ProductCard from './ProductCard'

const mockProduct = {
  id: 1,
  name: 'Fone Premium',
  description: 'Som de alta qualidade',
  price: 499.99,
  image: 'https://via.placeholder.com/240x180',
  rating: 5,
  reviews: 128,
  discount: 10
}

describe('ProductCard Component', () => {
  describe('Success Scenarios', () => {
    test('renderiza o nome do produto corretamente', () => {
      render(<ProductCard product={mockProduct} />)
      expect(screen.getByText('Fone Premium')).toBeTruthy()
    })

    test('renderiza a descrição do produto', () => {
      render(<ProductCard product={mockProduct} />)
      expect(screen.getByText('Som de alta qualidade')).toBeTruthy()
    })

    test('renderiza o preço formatado em reais', () => {
      render(<ProductCard product={mockProduct} />)
      const priceText = screen.getByText('R$ 499,99')
      expect(priceText).toBeTruthy()
    })
  })

  describe('Failure Scenarios', () => {
    test('renderiza o número correto de estrelas de avaliação', () => {
      render(<ProductCard product={mockProduct} />)
      const stars = screen.getByText('⭐⭐⭐⭐⭐')
      expect(stars).toBeTruthy()
    })

    test('exibe a contagem de avaliações em português', () => {
      render(<ProductCard product={mockProduct} />)
      expect(screen.getByText('(128 avaliações)')).toBeTruthy()
    })

    test('renderiza o botão "Adicionar" com texto português', () => {
      render(<ProductCard product={mockProduct} />)
      const button = screen.getByText('Adicionar')
      expect(button).toBeTruthy()
    })
  })
})
