function NavbarComponent () {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary fixed-top'>
        <div className='container'>
          <a className='navbar-brand' to='/'>
            <img src={require('../images/Logo.png')} height='50px' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' to='/'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' to='/about-us'>
                  Profil Sekolah
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' to='/contact-us'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarComponent;