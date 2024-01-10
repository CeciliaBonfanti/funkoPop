import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/footer.css";
export function Footer() {
  return (
    <>
      <footer className="fw-100  mt-5 fixed-bottom color-footer">
        <section className="container py-4">
          <div className="m-0 p-0 d-flex align-items-center justify-content-between w-100">
            <article className=" d-flex flex-column align-items-center align-items-md-start gap-2">
              <Link to={"/about"} className="Link">
                SOBRE NOSOTROS
              </Link>
              <Link to={"/faq"} className="Link">
                PREGUNTAS FRECUENTES
              </Link>
              <div className="d-flex align-items-center gap-4 mt-3 responsive-red">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook fs-2" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram fs-2" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter fs-2"></i>
                </a>
              </div>
            </article>
            
            <article className="d-flex align-items-center align-items-md-end justify-content-center gap-2">
              <Link
                to={"/"}
                className=" d-flex align-items-center justify-content-center img-footer"
              >
                <img
                  src="/img/branding/isotype.svg"
                  alt=""
                  className="img-fluid w-50"
                />
              </Link>
            </article>
          </div>
        </section>
      </footer>
    </>
  );
}