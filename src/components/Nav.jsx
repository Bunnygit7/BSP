function Nav() {
  return (
    <div className="container-fluid bg-dark">
      <nav className="navbar navbar-dark navbar-expand-sm d-flex">
        <a href="#" className="navbar-brand">
          <img src="BSP-logo-removebg-preview.png" alt="" srcset="" height='50'/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuItems"
          aria-controls="menuItems"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="menuItems">
          <ul class="nav h3" >
            <li class="nav-item">
              <a class="nav-link active  text-danger" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-danger" href="#">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  text-danger"  text-danger href="#">
                Resume
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  text-danger" href="#">
                My Tube
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
