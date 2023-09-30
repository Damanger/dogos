import image from "../assets/img/doguito404.svg"
import '../assets/css/404.css'

const NotFound = () => {
    return (
        <main className="container flex flex--center flex--column">
            <div class="wrap">
		        <span></span>
		        <span></span>
		        <span></span>
		        <span></span>
		        <span></span>
		        <span></span>
		        <span></span>
		        <span></span>
		        <span></span>
		        <span></span>
            </div>
            <img className="dog-image" src={image} alt="Doguito" />
            <div className="notfound-text" style={{textAlign: "center"}}>
                <p>Parece que estás perdido!!!</p>
                <p>Esta página no existe.</p>
            </div>
        </main>
    )
}

export default NotFound