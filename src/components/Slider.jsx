import { Link } from 'react-router-dom';
import "../styles/slider.css";
export function Slider() {
    return (
      <>
       <section className="slider container">
        <h2 className="slider__title">Ultimos Lanzamientos</h2>
        <ul className="slider__items">
            <li className="slider__item">
                <article className="card-item">
                    <Link className="card-item__link" href="">
                        <picture className="card-item__cover">
                            <span className="card-item__tag">Nuevo</span>
                            <img className="card-item__img--front" src="./img/star-wars/trooper-1.webp" alt="Figura coleccionable funko de un Stormtrooper"/>
                            <img className="card-item__img--back" src="./img/star-wars/trooper-box.webp" alt="Figura coleccionable funko de un Stormtrooper en caja"/>
                        </picture>
                        <div className="card-item__content">
                            <p className="card-item__licence">STAR WARS</p>
                            <h4 className="card-item__name">STORMTROOPER LIGHTSABER</h4>
                            <p className="card-item__price">$1799,99.-</p>
                            <p className="card-item__promo">3 CUOTAS SIN INTERES</p>
                        </div>
                    </Link>
                </article>
            </li>
            <li className="slider__item">
                <article classn ="card-item">
                    <Link className="card-item__link" href="">
                        <picture className="card-item__cover">
                            <span className="card-item__tag">Nuevo</span>
                            <img className="card-item__img--front" src="./img/pokemon/pidgeotto-1.webp" alt="Figura coleccionable funko de Pidgeotto"/>
                            <img className="card-item__img--back" src="./img/pokemon/pidgeotto-box.webp" alt="Figura coleccionable funko de Pidgeotto en caja"/>
                        </picture>
                        <div className="card-item__content">
                            <p className="card-item__licence">POKEMON</p>
                            <h4 className="card-item__name">PIDGEOTO</h4>
                            <p className="card-item__price">$1799,99.-</p> 
                            <p className="card-item__promo">3 CUOTAS SIN INTERES</p>
                        </div>
                    </Link>
                </article>
            </li>
            <li className="slider__item">
                <article className="card-item">
                    <Link className="card-item__link" href="">
                        <picture className="card-item__cover">
                            <span className="card-item__tag">Nuevo</span>
                            <img className="card-item__img--front" src="./img/harry-potter/luna-1.webp" alt="Figura coleccionable funko de Luna Lovegood"/>
                            <img className="card-item__img--back" src="./img/harry-potter/luna-box.webp" alt="Figura coleccionable funko de Luna Lovegood en caja"/>
                        </picture>
                        <div className="card-item__content">
                            <p className="card-item__licence">HARRY POTTER</p>
                            <h4 className="card-item__name">LUNA LOVEGOOD LION MASK</h4>
                            <p className="card-item__price">$1799,99.-</p>
                            <p className="card-item__promo">3 CUOTAS SIN INTERES</p>
                        </div>
                    </Link>
                </article>
            </li>
        </ul>
    </section>
      </>
    );
  }
