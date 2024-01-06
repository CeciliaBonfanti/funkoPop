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
      </>
    );
}
