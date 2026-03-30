import { expect } from 'vitest'
import { render, screen } from '../../tests/test-utils'
import MostSoldProducts from './MostSoldProducts'

describe('MostSoldProducts Component', () => {
  describe('Success Scenarios', () => {
    test('renderiza o título "Produtos Mais Vendidos"', () => {
      render(<MostSoldProducts />)
      expect(screen.getByText('Produtos Mais Vendidos')).toBeTruthy()
    })

    test('renderiza o subtítulo descritivo', () => {
        render(<MostSoldProducts />)
        expect(screen.getByText('Confira os favoritos dos nossos clientes')).toBeTruthy()
    })

    test('renderiza exatamente 6 cards de produtos', () => {
      const { container } = render(<MostSoldProducts />)
      const productCards = container.querySelectorAll('.product-card')
      expect(productCards.length).toBe(6)
    })
  })

  describe('Failure Scenarios', () => {
    test('renderiza todos os nomes de produtos da lista', () => {
      render(<MostSoldProducts />)
      const productNames = [
        'Fone de Ouvido Premium',
        'Relógio Inteligente Pro',
        'Carregador Wireless',
        'Caixa de Som Portátil',
        'Cabo USB-C',
        'Suporte para Celular'
      ]
      
      productNames.forEach((name) => {
        expect(screen.getByText(name)).toBeTruthy()
      })
    })

    test('seção tem a classe "most-sold-products" para estilização', () => {
      const { container } = render(<MostSoldProducts />)
      const section = container.querySelector('.most-sold-products')
      expect(section).toBeTruthy()
    })

    test('grid container existe com a classe apropriada', () => {
      const { container } = render(<MostSoldProducts />)
      const grid = container.querySelector('.most-sold-products__grid')
      expect(grid).toBeTruthy()
    })
  })
})
