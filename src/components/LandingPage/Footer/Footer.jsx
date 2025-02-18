import "./Footer.css";
const Footer = () => {
  return (
    <footer id="footer"
      className="text-white text-center text-lg-start"
      style={{ backgroundColor: "#23242a" }}
    >
      <div className="container p-4">
        <div className="row mt-4">
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 fm-3 fw-bold">About Toko<span className="text-warning">Mebel</span> </h5>
            <p className="fm-2 fs-7">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
            <p className="fm-2 fs-7">
              Blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias.
            </p>
            <div className="mt-4 d-flex gap-2 media">
              <a type="button" className="btn btn-warning ">
                <i className="ri-facebook-box-fill" />
              </a>

              <a type="button" className="btn btn-warning ">
                <i className="ri-instagram-fill" />
              </a>

              <a type="button" className="btn btn-warning">
                <i className="ri-twitter-x-fill" />
              </a>

            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 pb-1 fm-3 fw-bold">Contact Us</h5>
            
            <ul className="list-unstyled fm-2 fs-7">
              <li className="mb-3">
                <span className="fa-li">
                  <i className="ri-map-pin-line" />
                </span>
                <span className="ms-2">New York, NY 10012, US</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="ri-mail-line" />
                </span>
                <span className="ms-2">info@example.com</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="ri-phone-fill" />
                </span>
                <span className="ms-2">+ 01 234 567 88</span>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 fm-3 fw-bold">Opening hours</h5>
            <table className="table table-dark">
              <tbody className="font-weight-normal fm-2">
                <tr>
                  <td>Mon - Thu:</td>
                  <td>8am - 9pm</td>
                </tr>
                <tr>
                  <td>Fri - Sat:</td>
                  <td>8am - 1am</td>
                </tr>
                <tr>
                  <td>Sunday:</td>
                  <td>9am - 10pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <p className="m-0 fm-3 fs-7">&copy; 2024 - Kelompok 2. All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
