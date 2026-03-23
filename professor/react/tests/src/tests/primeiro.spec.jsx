import { render, screen } from "@testing-library/react"
import AppHeader from "../components/app-header/app-header"
import { expect, test } from "vitest"

test('Deve renderizar o botão de cadastro', () => {
    render(<AppHeader />)
    const text = screen.getByRole('paragraph')
    expect(text).exist
    expect(text.innerHTML).equals("Header")
})