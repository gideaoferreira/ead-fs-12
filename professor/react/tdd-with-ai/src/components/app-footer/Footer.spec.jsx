import { render, screen } from '../../tests/test-utils'
import Footer from './Footer'

describe('Footer Component', () => {
  describe('Success Scenarios', () => {
    test('renders copyright text with current year', () => {
      render(<Footer />)
      const currentYear = new Date().getFullYear()
      const copyrightText = screen.getByText(new RegExp(`© ${currentYear}`))
      expect(copyrightText).toBeTruthy()
    })

    test('renders footer description text', () => {
      render(<Footer />)
      const descriptionText = screen.getByText('Built with React + Bootstrap + TDD')
      expect(descriptionText).toBeTruthy()
    })

    test('has app-footer class for styling', () => {
      const { container } = render(<Footer />)
      const footer = container.querySelector('.app-footer')
      expect(footer).toBeTruthy()
    })
  })

  describe('Failure Scenarios', () => {
    test('copyright text includes "All rights reserved"', () => {
      render(<Footer />)
      const copyrightText = screen.getByText(/All rights reserved/)
      expect(copyrightText).toBeTruthy()
    })

    test('does not render external links', () => {
      const { container } = render(<Footer />)
      const links = container.querySelectorAll('a')
      expect(links.length).toBe(0)
    })

    test('footer has correct structure with two columns on desktop', () => {
      const { container } = render(<Footer />)
      const columns = container.querySelectorAll('.col-md-6')
      expect(columns.length).toBe(2)
    })
  })
})
