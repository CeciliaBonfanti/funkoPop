import "../styles/shop.css";
export function ShopMainContent () {
    return (
      <>
        <main className="shop-main container">
        <aside className="shop-main-aside">
            <div>
                <label className="shop-main-aside_title" for="buscar">Buscar:</label>
                <input className="shop-main-aside_input" type="text" id="buscar" name="consulta" placeholder="Ítem o Categoría"/>
            </div>
            <div>
                <label className="shop-main-aside_title" for="ordenar">Ordenar por:</label>
                <select className="shop-main-aside_input" id="ordenar" name="ordenar" placeholder="Mayor a Menor">
                    <option value="mayor-a-menor">Mayor a Menor</option>
                    <option value="menor-a-mayor">Menor a Mayor</option>
                </select>
            </div>
            <div>
                <p className="shop-main-aside_title">Precio</p>
                <div id="shop-main-aside_min_max">
                    <label className="shop-main-aside_label" for="precio-min">Min</label>
                    <input className="shop-main-aside_input" type="number" id="precio-min" name="precio-min" placeholder="0"/>
                
                
                    <label className="shop-main-aside_label" for="precio-max">Max</label>
                    <input className="shop-main-aside_input" type="number" id="precio-max" name="precio-max" placeholder="0"/>
                </div>  
            </div>
            <div>
                <span className="shop-main-aside__span">
                    <p className="shop-main-aside_title">Filtrar</p>
                    <input type="checkbox" id="nuevos" name="filtro" value="nuevos"/>
                    <label className="shop-main-aside_label" for="nuevos">Nuevos</label>
                    <br/><br/>
                    <input type="checkbox" id="ofertas" name="filtro" value="ofertas"/>
                    <label className="shop-main-aside_label" for="ofertas">Ofertas</label>
                    <br/><br/>
                    <input type="checkbox" id="edicion-especial" name="filtro" value="edicion-especial"/>
                    <label className="shop-main-aside_label" for="edicion-especial">Edición especial</label>
                    <br/><br/>
                    <input type="checkbox" id="favoritos" name="filtro" value="favoritos"/>
                    <label className="shop-main-aside_label" for="favoritos">Favoritos</label>
                </span>
            </div>
        </aside>
        <section className="shop-main-section">
            <ul className="slider__items">
                <li className="slider__item">
                    <article className="card-item">
                        <a className="card-item__link" href="/">
                            <picture className="card-item__cover">
                                <span className="card-item__tag">Nuevo</span>
                                <img className="card-item__img--front" src="../../img/star-wars/trooper-1.webp" alt="Figura coleccionable funko de un Stormtrooper"/>
                                <img className="card-item__img--back" src="../../img/star-wars/trooper-box.webp" alt="Figura coleccionable funko de un Stormtrooper en caja"/>
                            </picture>
                            <div className="card-item__content">
                                <p className="card-item__licence">STAR WARS</p>
                                <h4 className="card-item__name">STORMTROOPER LIGHTSABER</h4>
                                <p className="card-item__price">$1799,99.-</p>
                                <p className="card-item__promo">3 CUOTAS SIN INTERES</p>
                            </div>
                        </a>
                    </article>
                </li>
                <li className="slider__item">
                    <article className="card-item">
                        <a className="card-item__link" href="/">
                            <picture className="card-item__cover">
                                <span className="card-item__tag">Nuevo</span>
                                <img className="card-item__img--front" src="../../img/pokemon/pidgeotto-1.webp" alt="Figura coleccionable funko de Pidgeotto"/>
                                <img className="card-item__img--back" src="../../img/pokemon/pidgeotto-box.webp" alt="Figura coleccionable funko de Pidgeotto en caja"/>
                            </picture>
                            <div className="card-item__content">
                                <p className="card-item__licence">POKEMON</p>
                                <h4 className="card-item__name">PIDGEOTO</h4>
                                <p className="card-item__price">$1799,99.-</p> 
                                <p className="card-item__promo">3 CUOTAS SIN INTERES</p>
                            </div>
                        </a>
                    </article>
                </li>
                <li className="slider__item">
                    <article className="card-item">
                        <a className="card-item__link" href="/">
                            <picture className="card-item__cover">
                                <span className="card-item__tag">Nuevo</span>
                                <img className="card-item__img--front" src="../../img/harry-potter/luna-1.webp" alt="Figura coleccionable funko de Luna Lovegood"/>
                                <img className="card-item__img--back" src="../../img/harry-potter/luna-box.webp" alt="Figura coleccionable funko de Luna Lovegood en caja"/>
                            </picture>
                            <div className="card-item__content">
                                <p className="card-item__licence">HARRY POTTER</p>
                                <h4 className="card-item__name">LUNA LOVEGOOD LION MASK</h4>
                                <p className="card-item__price">$1799,99.-</p>
                                <p className="card-item__promo">3 CUOTAS SIN INTERES</p>
                            </div>
                        </a>
                    </article>
                </li>
            </ul>
    
            <ul className="slider__items">
                <li className="slider__item">
                    <article className="card-item">
                        <a className="card-item__link" href="/">
                            <picture className="card-item__cover">
                                <span className="card-item__tag">Nuevo</span>
                                <img className="card-item__img--front" src="../../img/star-wars/trooper-1.webp" alt="Figura coleccionable funko de un Stormtrooper"/>
                                <img className="card-item__img--back" src="../../img/star-wars/trooper-box.webp" alt="Figura coleccionable funko de un Stormtrooper en caja"/>
                            </picture>
                            <div className="card-item__content">
                                <p className="card-item__licence">STAR WARS</p>
                                <h4 className="card-item__name">STORMTROOPER LIGHTSABER</h4>
                                <p className="card-item__price">$1799,99.-</p>
                                <p className="card-item__promo">3 CUOTAS SIN INTERES</p>
                            </div>
                        </a>
                    </article>
                </li>
                <li className="slider__item">
                    <article className="card-item">
                        <a className="card-item__link" href="/">
                            <picture className="card-item__cover">
                                <span className="card-item__tag">Nuevo</span>
                                <img className="card-item__img--front" src="../../img/pokemon/pidgeotto-1.webp" alt="Figura coleccionable funko de Pidgeotto"/>
                                <img className="card-item__img--back" src="../../img/pokemon/pidgeotto-box.webp" alt="Figura coleccionable funko de Pidgeotto en caja"/>
                            </picture>
                            <div className="card-item__content">
                                <p className="card-item__licence">POKEMON</p>
                                <h4 className="card-item__name">PIDGEOTO</h4>
                                <p className="card-item__price">$1799,99.-</p> 
                                <p className="card-item__promo">3 CUOTAS SIN INTERES</p>
                            </div>
                        </a>
                    </article>
                </li>
                <li className="slider__item">
                    <article className="card-item">
                        <a className="card-item__link" href="/">
                            <picture className="card-item__cover">
                                <span className="card-item__tag">Nuevo</span>
                                <img className="card-item__img--front" src="../../img/harry-potter/luna-1.webp" alt="Figura coleccionable funko de Luna Lovegood"/>
                                <img className="card-item__img--back" src="../../img/harry-potter/luna-box.webp" alt="Figura coleccionable funko de Luna Lovegood en caja"/>
                            </picture>
                            <div className="card-item__content">
                                <p className="card-item__licence">HARRY POTTER</p>
                                <h4 className="card-item__name">LUNA LOVEGOOD LION MASK</h4>
                                <p className="card-item__price">$1799,99.-</p>
                                <p className="card-item__promo">3 CUOTAS SIN INTERES</p>
                            </div>
                        </a>
                    </article>
                </li>
            </ul>
    
            <ul className="slider__items">
                <li className="slider__item">
                    <article className="card-item">
                        <a className="card-item__link" href="/">
                            <picture className="card-item__cover">
                                <span className="card-item__tag">Nuevo</span>
                                <img className="card-item__img--front" src="../../img/star-wars/trooper-1.webp" alt="Figura coleccionable funko de un Stormtrooper"/>
                                <img className="card-item__img--back" src="../../img/star-wars/trooper-box.webp" alt="Figura coleccionable funko de un Stormtrooper en caja"/>
                            </picture>
                            <div className="card-item__content">
                                <p className="card-item__licence">STAR WARS</p>
                                <h4 className="card-item__name">STORMTROOPER LIGHTSABER</h4>
                                <p className="card-item__price">$1799,99.-</p>
                                <p className="card-item__promo">3 CUOTAS SIN INTERES</p>
                            </div>
                        </a>
                    </article>
                </li>
                <li className="slider__item">
                    <article className="card-item">
                        <a className="card-item__link" href="/">
                            <picture className="card-item__cover">
                                <span className="card-item__tag">Nuevo</span>
                                <img className="card-item__img--front" src="../../img/pokemon/pidgeotto-1.webp" alt="Figura coleccionable funko de Pidgeotto"/>
                                <img className="card-item__img--back" src="../../img/pokemon/pidgeotto-box.webp" alt="Figura coleccionable funko de Pidgeotto en caja"/>
                            </picture>
                            <div className="card-item__content">
                                <p className="card-item__licence">POKEMON</p>
                                <h4 className="card-item__name">PIDGEOTO</h4>
                                <p class="card-item__price">$1799,99.-</p> 
                                <p className="card-item__promo">3 CUOTAS SIN INTERES</p>
                            </div>
                        </a>
                    </article>
                </li>
                <li className="slider__item">
                    <article className="card-item">
                        <a className="card-item__link" href="/">
                            <picture className="card-item__cover">
                                <span className="card-item__tag">Nuevo</span>
                                <img className="card-item__img--front" src="../../img/harry-potter/luna-1.webp" alt="Figura coleccionable funko de Luna Lovegood"/>
                                <img className="card-item__img--back" src="../../img/harry-potter/luna-box.webp" alt="Figura coleccionable funko de Luna Lovegood en caja"/>
                            </picture>
                            <div className="card-item__content">
                                <p className="card-item__licence">HARRY POTTER</p>
                                <h4 className="card-item__name">LUNA LOVEGOOD LION MASK</h4>
                                <p className="card-item__price">$1799,99.-</p>
                                <p className="card-item__promo">3 CUOTAS SIN INTERES</p>
                            </div>
                        </a>
                    </article>
                </li>
            </ul>
        </section>
    </main>
      </>
    );
  }