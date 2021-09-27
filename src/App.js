
import './App.css';
import Header from './componentes/header/Header';
import Contact from './componentes/contact/Contact';
//import Acerca from './componentes/acerca/Acerca';
function App() {
  return (
    <div className="container">
       
      <Header/>
       <section id="informacion">
         <Contact />

       </section>
    </div>
  );
}

export default App;
