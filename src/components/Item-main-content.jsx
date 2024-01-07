import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/item.css";
export function ItemMainContent() {
    return (
      <>
        <main className="container">
            <section className="item-main_section">
                <picture>
                    <img src="../../img/star-wars/baby-yoda-1.webp" alt=''/>
                </picture>
                <div>
                    <p className="item-main_section_licence">star wars</p>
                    <h2 className="item-main_section_name">baby yoda blueball</h2>
                    <p className="item-main_section_description">Figura coleccionable de Baby Yoda (Grougu) - The Mandalorian Saga, edición limitada.</p>
                    <p className="item-main_section_price">$1799,99.-</p>
                    <div className="item-add_tocart">
                        <div>
                            <button className="item-button" id="boton-menos">-</button>
                            <span className="item-span">0</span>
                            <button className="item-button" id="boton-mas">+</button>
                        </div>
                        <a className="item-main_section_link" href="/">Agregar al carrito</a>
                    </div>
                    
                    <p className="item-main_section_pay">Ver métodos de pago - 3 CUOTAS SIN INTERÉS</p>
                </div>
            </section>
        </main>
      </>
    );
  }