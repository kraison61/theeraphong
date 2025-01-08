import Image from "next/image"

const Nav = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" data-navbar-on-scroll="data-navbar-on-scroll">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image src="/img/icons/logo.png" width={30} height={30} alt="logo" />
            <span className="text-1000 fs-1 ms-2 fw-medium">Lasles<span className="fw-bold">VPN</span></span>
          </a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto border-bottom border-lg-bottom-0 pt-2 pt-lg-0">
              <li className="nav-item"><a className="nav-link active active" aria-current="page" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Pricing </a></li>
              <li className="nav-item"><a className="nav-link" href="#">Testimonials</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Help </a></li>
            </ul>
            <form className="d-flex py-3 py-lg-0">
              <button className="btn btn-link text-1000 fw-medium order-1 order-lg-0" type="button">Sign in</button>
              <button className="btn btn-outline-danger rounded-pill order-0" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Nav