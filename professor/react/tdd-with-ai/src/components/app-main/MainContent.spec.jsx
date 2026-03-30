import { render, screen } from '../../tests/test-utils'
import MainContent from './MainContent'

describe('MainContent Component', () => {
  describe('Success Scenarios', () => {
    test('renderiza children content dentro do container', () => {
      const testText = 'Test Content'
      render(
        <MainContent>
          <div>{testText}</div>
        </MainContent>
      )
      expect(screen.getByText(testText)).toBeTruthy()
    })

    test('has app-main class for styling', () => {
      const { container } = render(
        <MainContent>
          <div>Test</div>
        </MainContent>
      )
      const main = container.querySelector('.app-main')
      expect(main).toBeTruthy()
    })

    test('uses bootstrap container class for responsive layout', () => {
      const { container } = render(
        <MainContent>
          <div>Test</div>
        </MainContent>
      )
      const bootstrapContainer = container.querySelector('.container')
      expect(bootstrapContainer).toBeTruthy()
    })
  })

  describe('Failure Scenarios', () => {
    test('does not use container-fluid class', () => {
      const { container } = render(
        <MainContent>
          <div>Test</div>
        </MainContent>
      )
      const containerFluid = container.querySelector('.container-fluid')
      expect(containerFluid).toBeFalsy()
    })

    test('applies margin-top utility class', () => {
      const { container } = render(
        <MainContent>
          <div>Test</div>
        </MainContent>
      )
      const containerWithMargin = container.querySelector('.mt-4')
      expect(containerWithMargin).toBeTruthy()
    })

    test('maintains semantic HTML with main tag', () => {
      const { container } = render(
        <MainContent>
          <div>Test</div>
        </MainContent>
      )
      const mainTag = container.querySelector('main')
      expect(mainTag).toBeTruthy()
    })
  })
})
