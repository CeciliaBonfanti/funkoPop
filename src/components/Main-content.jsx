import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/main-content.css";

export function MainContent() {
    return (
      <>
        <section className="banner">
            <article className="container banner__content">
                <h3 className="banner-title">Nuevos Ingresos</h3>
                <p className="banner-text">Descubrí el próximo Funko Pop de tu colección</p>
                <Link className="banner-link" to="/shop">SHOP</Link>
            </article>  
        </section>
        <main className="main-container container">
        <section className="collection">
            <article className="collection__content">
                <h3 className="collection__title"> STAR WARS & THE MANDALORIAN</h3>
                <p className="collection__text"> Disfruta de una saga que sigue agregando personajes a su colección.</p>
                <Link className="collection__link" to="/shop">Ver coleccion</Link>
            </article>
            
            <picture className="collection__cover">
                <img src="/img/star-wars/baby-yoda-1.webp" alt="Star Wars"/>
            </picture>
        </section>
        <section className="collection">
            <article className="collection__content">
                <h3 className="collection__title">POKEMON INDIGO</h3>
                <p className="collection__text"> Atrapa todos los que puedas y disfruta de una colección llena de amigos.</p>
                <Link className="collection__link" to="/shop">Ver coleccion</Link>
            </article>
            <picture className="collection__cover">
                <img src="/img/pokemon/vulpix-1.webp" alt="Pokemon"/>
            </picture>
        </section>
        <section className="collection">
            <article className="collection__content">
                <h3 className="collection__title">HARRY POTTER</h3>
                <p className="collection__text"> Revive los recuerdos de una saga llena de magia y encanto.</p>
                <Link className="collection__link" to="/shop"> Ver coleccion</Link>
            </article>
            
            <picture className="collection__cover">
                <img src="/img/harry-potter/snape-patronus-1.webp" alt="Harry Potter"/>
            </picture>
        </section>
    </main>
      </>
    );
}
