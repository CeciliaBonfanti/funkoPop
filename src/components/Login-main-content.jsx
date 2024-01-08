import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/login.css";
export function LoginMainContent() {
    return (
      <>
        <main className=" login-main container">
        <section class="login-main_section">
                <h1>ingresar a mi cuenta</h1>
            <div className="login-input-container">
                <label className= "login-main_section_label" for="email">Email:</label>
                <input className= "login-main_section_input"type="email" id="email" placeholder="johndoe@correo.com"/>
            </div>
                
            <div class="login-input-container">
                <label className= "login-main_section_label" for="contraseña">Contraseña:</label>
                <input className= "login-main_section_input"type="password" id="contraseña" placeholder=" ● ● ● ● ● ● ● ● ● ●"/>
            </div>    
                
            <div className="login-button-container">   
                <a className="login_button_link" href="/">Ingresar</a>
                <div>
                    <input type="checkbox" id="recordarme"/>
                    <label for="recordarme">Recordarme</label>
                </div>
            </div>
            
            <a className="login_button_link_a" href="/">Olvidé mi contraseña</a>
            
        </section>
    </main>
      </>
    );
  }