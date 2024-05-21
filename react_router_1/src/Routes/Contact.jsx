function Contact(){
    return(
        <>
            <div className="tittle">
            <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
            </div>
            <form className="form">
                    <label htmlFor="name">Nombre: </label>
                    <input type="text" id="name" name="name" className="inputs"/>
                    <label htmlFor="email">Correo: </label>
                    <input type="email" id="email" name="email" className="inputs"/>
                    <label htmlFor="textArea">Descripcion:</label>
                    <textarea rows={5} cols={5} id="textArea" name="textArea" className="textArea"/>
            </form>
        </>
    )
}
export default Contact;