import './Header.css';
import foto from './foto.jpeg';
function Header(){
    return(
<header>
    <div className="ContenedorT1">
    <div className="texto">
        <h1>Mellany Jasbleidy Herrera Beltrán</h1>

    </div>
    <div className="Texto1">
        <p><b>Email</b>  Mellanybeltran35@hotmail.com           <b>Teléfono</b> 3022514394</p>
        <p><b> Dirección</b> Carrera 103 f # 140 D 16  Suba-El Poa    <b>17 años</b> </p>
        <p><b> T.I 1031800956</b></p>
        <h3>Soy una persona  responsable, apasionada por el aprendizaje, 
        me considero una persona con buen ánimo y capaz 
        de resolver problemas fácilmente.
        Ando en búsqueda de oportunidades laborales en las 
        que pueda aprender mucho y demostrar mis capacidades.
        </h3>
    </div>
    </div>
    <div className="foto">
       <img src={foto} alt="foto Mellany Herrera"/> 
    </div>
    
</header>
    );
}

export default Header;