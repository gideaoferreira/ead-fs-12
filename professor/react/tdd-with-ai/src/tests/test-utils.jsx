/* eslint-disable react-refresh/only-export-components */
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

const AllTheProviders = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
