import { useEffect, useState } from 'react'

function App() {

  const [products, setProducts] = useState([])

  async function listarProdutos() {
    const response = await fetch("https://fakestoreapi.com/products?limit=10")
    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    listarProdutos()
  },[])

  return (
    <>
      <table>
        <tr>
          <th>Id</th>
          <th>Preço</th>
          <th>Nome</th>
        </tr>
        {
          products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>R$ { product.price }</td>
                <td>{ product.title }</td>
              </tr>
            )
          )
        }
      </table>
    </>
  )
}

export default App
