import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import App from "./App";

describe('Componente App sendo testado', () => {
  test('Deve exibir a mensagem "Hello world!"', () => {
    // Arrange - Arranjo
    render(<App />);
    
    // Act - Ação
    const text = screen.getByText('Hello world!');

    // Assert - Afirmação
    expect(text).toBeInTheDocument();
  }); 
  test('Deve exibir a mensagem "Hello world!" com a classe "text-dark"', () => {
    // Arrange - Arranjo
    render(<App />);
    // Act - Ação
    const text = screen.getByText('Hello world!');

    // Assert - Afirmação 
    expect(text).toHaveClass('text-dark');
  });
  test('Deve existir a tag <p> com a mensagem "Hello world!"', () => {
    // Arrange - Arranjo
    const pTagName = 'P'
    render(<App />);
    
    // Act - Ação
    const paragraph = screen.getByRole('paragraph');

    // Assert - Afirmação
    expect(paragraph.tagName).toBe(pTagName);
    expect(paragraph.innerHTML).toBe('Hello world!');
  });

  // BOTÃO
  test('Deve exibir um botão com o texto "Entrar"', () => {
    // Arrange - Arranjo
    render(<App />);

    // Act - Ação
    const button = screen.getByRole('button', { name: 'Entrar' });

    // Assert - Afirmação
    expect(button).toBeInTheDocument();
  });
  test('Deve exibir um botão com o texto "Entrar"', () => {
    // Arrange - Arranjo
    render(<App />);

    // Act - Ação
    const button = screen.getByRole('button');

    // Assert - Afirmação
    expect(button.textContent).toBe('Entrar');
  });
  test('Deve exibir um botão com o texto "Entrar" e ao clicar deve exibir a mensagem "Clicou no botão!" no console', () => {
    // Arrange - Arranjo
    const consoleLogSpy = vi.spyOn(console, 'log');
    render(<App />);

    // Act - Ação
    const button = screen.getByRole('button', { name: 'Entrar' });
    fireEvent.click(button);

    // Assert - Afirmação
    expect(consoleLogSpy).toHaveBeenCalledWith('Clicou no botão!');
  });

  // LISTA DE COMPRAS
  test('Deve exibir uma lista de compras com 4 itens', () => {
    // Arrange - Arranjo
    const totalItems = 4;
    render(<App />);

    // Act - Ação
    const listItems = screen.getAllByRole('listitem');

    // Assert - Afirmação
    expect(listItems).toHaveLength(totalItems);
  });
  test('Deve exibir uma lista de compras com os itens "Arroz", "Feijão", "Macarrão" e "Carne"', () => {
    // Arrange - Arranjo
    render(<App />);

    // Act - Ação
    const listItems = screen.getAllByRole('listitem');

    // Assert - Afirmação
    expect(listItems[0].innerHTML).toBe('Arroz');
    expect(listItems[1].innerHTML).toBe('Feijão');
    expect(listItems[2].innerHTML).toBe('Macarrão');
    expect(listItems[3].innerHTML).toBe('Carne');
  });

  // TABELA
  test('Deve exibir uma tabela com 2 colunas e 3 linhas', () => {
    // Arrange - Arranjo
    const totalColumns = 2;
    const totalRows = 3;
    render(<App />);

    // Act - Ação
    const table = screen.getByRole('table');
    const columns = screen.getAllByRole('columnheader');
    const rows = screen.getAllByRole('row');

    // Assert - Afirmação
    expect(table).toBeInTheDocument();
    expect(columns).toHaveLength(totalColumns);
    expect(rows).toHaveLength(totalRows);
  });
  test('Deve exibir uma tabela com os dados corretos', () => {
    // Arrange - Arranjo
    render(<App />);

    // Act - Ação
    const cells = screen.getAllByRole('cell');

    // Assert - Afirmação
    expect(cells[0].innerHTML).toBe('João');
    expect(cells[1].innerHTML).toBe('30');
    expect(cells[2].innerHTML).toBe('Maria');
    expect(cells[3].innerHTML).toBe('25');
  });
  test('Deve exibir uma tabela com os nomes corretos das colunas "Nome" e "Idade"', () => {
    // Arrange - Arranjo
    render(<App />);

    // Act - Ação
    const columnHeaders = screen.getAllByRole('columnheader');

    // Assert - Afirmação
    expect(columnHeaders[0].innerHTML).toBe('Nome');
    expect(columnHeaders[1].innerHTML).toBe('Idade');
  });
});