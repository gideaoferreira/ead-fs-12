import './App.css'

function App() {

  function handleClick() {
    console.log('Clicou no botão!');
  }

  return (
    <>
      <p className='text-dark'>Hello world!</p>
      <button onClick={handleClick}>Entrar</button>
      <ul>
        <li>Arroz</li>
        <li>Feijão</li>
        <li>Macarrão</li>
        <li>Carne</li>
      </ul>

      <table>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
        </tr>
        <tr>
          <td>João</td>
          <td>30</td>
        </tr>
        <tr>
          <td>Maria</td>
          <td>25</td>
        </tr>
      </table>
    </>
  )
}

export default App
