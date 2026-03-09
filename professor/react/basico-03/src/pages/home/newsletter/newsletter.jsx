function Newsletter() {
    return (
        <div className="newsletter alert alert-primary d-flex justify-content-between align-items-center">
            <p className="m-0">Receba nossas novidades e garanta o menor preço nos melhores produtos!</p>
            <div class="input-group" style={{ width: "450px"}}>
                <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <button class="btn btn-primary" type="button" id="button-addon1">Cadastrar</button>
            </div>
        </div>
    )
}

export default Newsletter