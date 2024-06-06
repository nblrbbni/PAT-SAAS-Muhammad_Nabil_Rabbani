function NavbarComponent () {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary fixed-top'>
        <div className='container'>
          <a href='#' className='nav-link navbar-brand'>
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
                <a href='#about' className='nav-link px-2 text-body-secondary'>
                  Profil Sekolah
                </a>
              </li>
              <li className='nav-item'>
                <a href='#mitra' className='nav-link px-2 text-body-secondary'>
                  Kemitraaan
                </a>
              </li>
              <li className='nav-item'>
                <a href='#review' className='nav-link px-2 text-body-secondary'>
                  PPDB
                </a>
              </li>
              <li className='nav-item'>
                <a href='#mereka' className='nav-link px-2 text-body-secondary'>
                  Kata Mereka
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarComponent
