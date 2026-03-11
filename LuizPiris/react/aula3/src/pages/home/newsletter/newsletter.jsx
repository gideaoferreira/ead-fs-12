function Newsletter () {
    return (
        <div className="newsletter alert alert-primary d-flex justify-content-between align-items-center">
            <p className="m-0">Receba Nossas Novidades e Garanta o Menor Preço nos Melhores Produtos</p>
            <div className="input-group" style={{width: '400px'}}>
                <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                <button className="btn btn-primary" type="button" id="button-addon1">Cadastrar</button>
            </div>
        </div>
    )

}

export default Newsletter
