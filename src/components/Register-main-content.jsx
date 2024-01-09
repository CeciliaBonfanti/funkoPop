import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/register.css";
export function RegisterMainContent() {
    return (
      <>
        <main class=" register-main container">
        <section class="register-main_section">
            <div>
                <h1>crea tu cuenta</h1>
                <p>Completa el formulario para ser parte del mundo de los Funkos</p>
                <div className="register-input-container">
                    <label className= "register-main_section_label" for="nombre">Nombre:</label>
                    <input className= "register-main_section_input" type="text" id="nombre" placeholder="John"/>
                </div>
                <div class="register-input-container">
                    <label className= "register-main_section_label" for="apellido">Apellido:</label>
                    <input className= "register-main_section_input" type="text" id="apellido" placeholder="Doe"/>
                </div>
                <div class="register-input-container">
                    <label className= "register-main_section_label" for="email">Email:</label>
                    <input className= "register-main_section_input" type="email" name="" id="email" placeholder="johndoe@correo.com"/>
                </div>
                <div class="register-input-container">
                    <label className= "register-main_section_label" for="contraseña">Contraseña:</label>
                    <input className= "register-main_section_input" type="password" id="contraseña" placeholder="● ● ● ● ● ● ● ● ● ●"/>
                </div>
                <div className="register-input-container">
                    <label className= "register-main_section_label" for="repeat">Repita Contraseña:</label>
                    <input className= "register-main_section_input" type="password" id="repeat" placeholder="● ● ● ● ● ● ● ● ● ●"/>
                </div>
                <div className="register-button-container">
                    <a className="register_button_link" href="/">Registrar</a>
                    <div>
                        <input type="checkbox" id="acepto"/>
                        <label for="acepto">Acepto</label>
                    </div>
                    <a className="register_button_link_a" href="/">Terminos y Condiciones</a>
                    
                </div>
                
        
            </div>
        </section>
    </main>

      </>
    );
  }