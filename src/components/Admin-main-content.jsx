import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/admin.css";
export function AdminMainContent() {
    return (
      <>
        <main className="container-admin container">
    <section className="admin-main_section1">
        <label for="busqueda">
        <img src="../../img/icons/search_icon.svg" alt="Buscar"/>
        </label>
        <input className="admin-section1_input" type="search" id="busqueda" name="busqueda" oninput="buscar(this.value)" placeholder=" código, nombre o categoría"/>
    </section>
    <section className="admin-main_section2">
        <h1>LISTADO DE PRODUCTOS</h1>
        <div>
            AGREGAR
            <a href="/">+</a>
        </div>
    </section>
    <section className="admin-main_grid-container">
        <p className="grid-item">ID</p>
        <p>Código</p>
        <p>Nombre del producto</p>
        <p>Categoría</p>
        <p></p>
        {/* Producto 1*/}
        <p className="grid-item">1</p>
        <p>STW001001</p>
        <p>Baby Yoda Blueball</p>
        <p>STAR WARS</p>
        <figure className="grid-item">
          <img src="../../img/icons/edit_pencil.svg" alt="Editar"/>
          <img src="../../img/icons/delete_trash.svg" alt="Borrar"/>
        </figure>
         {/* Producto 2 */}
         <p className="grid-item">2</p>
         <p>STW001002</p>
         <p>Boba Fett Fighter</p>
         <p>STAR WARS</p>
         <figure className="grid-item">
           <img src="../../img/icons/edit_pencil.svg" alt="Editar"/>
           <img src="../../img/icons/delete_trash.svg" alt="Borrar"/>
         </figure>
           {/* Producto 3 */}
        <p className="grid-item">3</p>
        <p>STW001003</p>
        <p>Luke Skylwalker & Grogu</p>
        <p>STAR WARS</p>
        <figure className="grid-item">
          <img src="../../img/icons/edit_pencil.svg" alt="Editar"/>
          <img src="../../img/icons/delete_trash.svg" alt="Borrar"/>
        </figure>
          {/* Producto 4 */}
          <p className="grid-item">4</p>
          <p>STW001004</p>
          <p>Stormtrooper Lightsaber</p>
          <p>STAR WARS</p>
          <figure className="grid-item">
            <img src="../../img/icons/edit_pencil.svg" alt="Editar"/>
            <img src="../../img/icons/delete_trash.svg" alt="Borrar"/>
          </figure>
            {/* Producto 5 */}
        <p className="grid-item">5</p>
        <p>PKM001001</p>
        <p>Charmander Smiley</p>
        <p>POKEMON</p>
        <figure className="grid-item">
          <img src="../../img/icons/edit_pencil.svg" alt="Editar"/>
          <img src="../../img/icons/delete_trash.svg" alt="Borrar"/>
        </figure>
          {/*Producto 6 */}
          <p className="grid-item">6</p>
          <p>PKM001002</p>
          <p>Dragonite Hi!</p>
          <p>POKEMON</p>
          <figure className="grid-item">
            <img src="../../img/icons/edit_pencil.svg" alt="Editar"/>
            <img src="../../img/icons/delete_trash.svg" alt="Borrar"/>
          </figure>
            {/* Producto 7 */}
        <p className="grid-item">7</p>
        <p>PKM001003</p>
        <p>Pidgeotto Flying</p>
        <p>POKEMON</p>
        <figure className="grid-item">
          <img src="../../img/icons/edit_pencil.svg" alt="Editar"/>
          <img src="../../img/icons/delete_trash.svg" alt="Borrar"/>
        </figure>
          {/* Producto 8 */}
          <p className="grid-item">8</p>
          <p>PKM001004</p>
          <p>Pikachu Smiley</p>
          <p>POKEMON</p>
          <figure className="grid-item">
            <img src="../../img/icons/edit_pencil.svg" alt="Editar"/>
            <img src="../../img/icons/delete_trash.svg" alt="Borrar"/>
          </figure>
            {/* Producto 9 */}
        <p className="grid-item">9</p>
        <p>PKM001005</p>
        <p>Vulpix Fancy</p>
        <p>POKEMON</p>
        <figure className="grid-item">
          <img src="../../img/icons/edit_pencil.svg" alt="Editar"/>
          <img src="../../img/icons/delete_trash.svg" alt="Borrar"/>
        </figure>
          {/* Producto 10 */}
          <p className="grid-item">10</p>
          <p>HPT001001</p>
          <p>Harry Potter & Hegwid</p>
          <p>HARRY POTTER</p>
          <figure className="grid-item">
            <img src="../../img/icons/edit_pencil.svg" alt="Editar"/>
            <img src="../../img/icons/delete_trash.svg" alt="Borrar"/>
          </figure>
            {/* Producto 11 */}
        <p className="grid-item">11</p>
        <p>HPT001002</p>
        <p>Hermione Ball Dress</p>
        <p>HARRY POTTER</p>
        <figure className="grid-item">
          <img src="../../img/icons/edit_pencil.svg" alt="Editar"/>
          <img src="../../img/icons/delete_trash.svg" alt="Borrar"/>
        </figure>
          {/*} Producto 12*/}
          <p className="grid-item">12</p>
          <p>HPT001003</p>
          <p>Luna Lovegood Lion Mask</p>
          <p>HARRY POTTER</p>
          <figure className="grid-item">
            <img src="../../img/icons/edit_pencil.svg" alt="Editar"/>
            <img src="../../img/icons/delete_trash.svg" alt="Borrar"/>
          </figure>
            {/*Producto 13 */}
        <p className="grid-item">13</p>
        <p>HPT001004</p>
        <p>Snape Patronus</p>
        <p>HARRY POTTER</p>
        <figure className="grid-item">
          <img src="../../img/icons/edit_pencil.svg" alt="Editar"/>
          <img src="../../img/icons/delete_trash.svg" alt="Borrar"/>
        </figure>
      </section>
</main>
      </>
    );
  }