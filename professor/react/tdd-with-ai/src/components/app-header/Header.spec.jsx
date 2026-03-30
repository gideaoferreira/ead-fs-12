import { render, screen } from '../../tests/test-utils'
import Header from './Header'

describe('Header Component', () => {
  describe('Success Scenarios', () => {
    test('renders brand text "TDD with AI"', () => {
      render(<Header />)
      const brandElement = screen.getByText('TDD with AI')
      expect(brandElement).toBeTruthy()
    })

    test('renders navigation link to home', () => {
      render(<Header />)
      const homeLink = screen.getByText('Home')
      expect(homeLink).toBeTruthy()
    })

    test('has navbar structure with app-header class', () => {
      const { container } = render(<Header />)
      const header = container.querySelector('.app-header')
      expect(header).toBeTruthy()
    })
  })

  describe('Failure Scenarios', () => {
    test('does not render a logo image', () => {
      const { container } = render(<Header />)
      const images = container.querySelectorAll('img')
      expect(images.length).toBe(0)
    })

    test('brand link href is correctly set to "/"', () => {
      render(<Header />)
      const brandLink = screen.getByText('TDD with AI')
      expect(brandLink.getAttribute('href')).toBe('/')
    })

    test('home link href is correctly set to "/"', () => {
      render(<Header />)
      const homeLink = screen.getByText('Home')
      expect(homeLink.getAttribute('href')).toBe('/')
    })
  })
})
