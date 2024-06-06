function FooterComponent () {
  return (
    <>
      <div className='bg-body-tertiary'>
        <div className='container'>
          <footer className='py-3 mt-5'>
            <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
              <li className='nav-item'>
                <a href='#profil' className='nav-link px-2 text-body-secondary'>
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
            <p className='text-center text-body-secondary'>
              Copyright © 2024 SMK TI Bazma
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default FooterComponent
