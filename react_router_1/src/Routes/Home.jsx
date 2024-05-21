import imagen from '../assets/Pastel2.webp'

function Home() {
    return (
        <>
            <div className="div_main">
                <h1>Bienvenido a Happy Cake</h1>
                <p>El lugar de los pasteles felices</p>
                <img src={imagen} alt="imagen" className='imagen-pastel'/>
            </div>
        </>
    )
}
export default Home;