import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/edit.css";
export function EditMainContent() {
    return (
      <>
        <main className="edit-main container">
        <section className="edit-main_section">
            <h1>
                Editar item
            </h1>
            <div className="edit_section_categoria">
                <label for="categoria">Categoría:</label>
                <select className="edit_section_select" id="categoria" name="categoria" placeholder="Figuras">
                <option value="cat1">Figuras</option>
                <option value="cat2">Categoría</option>
                </select>
        
                <label for="licencia">Licencia:</label>
                <select className="edit_section_select" id="licencia" name="licencia" placeholder="Naruto Shippuden">
                <option value="lic1">Naruto Shippuden</option>
                <option value="lic2">Licencia 2</option>
                </select>
            </div>
            <div class="edit_section_productname">
                <label for="productname">Nombre del producto:</label>
                <input className="edit_section_input" type="text" id="productname" placeholder="Kakashi Hatake Shippuden Saga"/>
            </div>
    
            
            <textarea rows="10" cols="100"  style={{backgroundColor: 'white'}} placeholder=" Figura Funko coleccionable de Kakashi Hatake de la saga Naruto Shippuden invocando chidori"></textarea>
    
            <div class="edit_section_formulario">
                <label for="sku">SKU:</label>
                <input class="edit_section_input" type="text" id="sku" placeholder="NAR001012"/>
        
                <label for="precio">Precio:</label>
                <input class="edit_section_input" type="number" id="precio" placeholder="$ 1.799,00"/>
        
                <label for="stock">Stock:</label>
                <input class="edit_section_input" type="number" id="stock" placeholder="10"/>
        
                <div>
                    <label for="descuento">Descuento:</label>
                    <input class="edit_section_input" type="number" id="descuento" placeholder="10%"/>
            
                    <label for="cuotas">Cuotas:</label>
                    <select class="edit_section_select" id="cuotas" name="cuotas" placeholder="6 Cuotas sin interés">
                    <option value="opcion1">3 Cuotas sin interés</option>
                    <option value="opcion2">6 Cuotas sin interés</option>
                    </select>
                </div>
            </div>
            
            <div className="edit_section_imagenes">
                <p>Imágenes</p>
                <button>Elegir archivos</button>
                <p>no se ha encontrado ningun archivo</p>
            </div>

            <picture class="edit_picture">
                <img src="/img/pokemon/pikachu-1.webp" alt=""/>
                <img src="/img/pokemon/pikachu-box.webp" alt=""/>
            </picture>

            <div class="edit_picture-p">
                <p>Frente</p>
                <p>Dorso</p>
            </div>

            <div className="edit_section_a">
                <a className="edit_section_a_link" href="/" >Modificar producto</a>
            </div>
        </section>
    </main>
      </>
    );
}