import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/create.css";
export function CreateMainContent() {
    return (
      <>
      <main className="create-main container">
            <section className="create-main_section">
                <h1>
                    Crear nuevo item
                </h1>
                <div className="create_section_categoria">
                    <label for="categoria">Categoría:</label>
                    <select className="create_section_select">
                        <option value="cat1">Categoría 1</option>
                        <option value="cat2">Categoría 2</option>
                    </select>
                 
                    
                    <label for="licencia">Licencia:</label>
                    <select className="create_section_select" id="licencia" name="licencia" placeholder="Seleccionar">
                        <option value="lic1">Licencia 1</option>
                        <option value="lic2">Licencia 2</option>
                    </select>
                </div>   
                <div className="create_section_productname">
                    <label for="productname">Nombre del producto:</label>
                    <input className="create_section_input" type="text" id="productname" placeholder="Kakashi Hatake Shippuden Saga"/>
                </div>

                <textarea rows="10" cols="100" style={{ backgroundColor: 'white' }} placeholder=" Descripción del producto"></textarea>

                <div className="create_section_formulario">
                    <label for="sku">SKU:</label>
                    <input className="create_section_input" type="text" id="sku" placeholder="SSK111AB001"/>
            
                    <label  for="precio">Precio:</label>
                    <input  className="create_section_input" type="number" id="precio" placeholder="$ 0.000,00"/>
            
                    <label  for="stock">Stock:</label>
                    <input  className="create_section_input" type="number" id="stock" placeholder="0"/>
                    <div>
                        <label for="descuento">Descuento:</label>
                        <input  className="create_section_input" type="number" id="descuento" placeholder="0%"/>
                
                        <label for="cuotas">Cuotas:</label>
                        <select className="create_section_select" id="cuotas" name="cuotas" placeholder="3 Cuotas sin interés">
                            <option value="opcion1">3 Cuotas sin interés</option>
                            <option value="opcion2">6 Cuotas sin interés</option>
                        </select>
                    </div> 
                </div>
                <div className="create_section_imagenes">
                    <p>Imágenes: </p>
                    <button>Elegir archivos</button>
                    <p>no se ha encontrado ningun archivo</p>
                </div>

                <div className="create_section_a">
                    <a className="create_section_a_link" href="/">Agregar producto</a>
                    <a className="create_section_a_link" href="/">Limpiar</a>
                </div>
            </section>
    </main>
      </>
    );
  }