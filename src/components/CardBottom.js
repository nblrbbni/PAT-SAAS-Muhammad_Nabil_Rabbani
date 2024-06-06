function CardBottomComponent () {
  const imageStyle = {
    objectFit: 'cover'
  }

  return (
    <div className='container bg-body-tertiary p-5' id='review'>
      <div className='row'>
        <div className='col-md-8'>
          <h1>PPDB</h1>
          <div className='row'>
            <div className='col'>
              <div class='card mb-3'>
                <div class='row g-0'>
                  <div class='col-md-4'>
                    <img
                      src={require('../images/Satu.png')}
                      class='img-fluid rounded-start'
                      alt='...'
                      style={imageStyle}
                    />
                  </div>
                  <div class='col-md-8'>
                    <div class='card-body'>
                      <h5 class='card-title'>31 Jan 2024</h5>
                      <p class='card-text'>
                        Deadline Pendaftaran
                      </p>
                      <small class='text-body-secondary'>SMK TI Bazma</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class='card mb-3'>
                <div class='row g-0'>
                  <div class='col-md-4'>
                    <img
                      src={require('../images/Dua.png')}
                      class='img-fluid rounded-start'
                      alt='...'
                      style={imageStyle}
                    />
                  </div>
                  <div class='col-md-8'>
                    <div class='card-body'>
                      <h5 class='card-title'>09 Feb 2024</h5>
                      <p class='card-text'>Pengumuman & Seleksi Berkas</p>
                      <p class='card-text'>
                        <small class='text-body-secondary'>SMK TI Bazma</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class='card mb-3'>
                <div class='row g-0'>
                  <div class='col-md-4'>
                    <img
                      src={require('../images/Tiga.png')}
                      class='img-fluid rounded-start'
                      alt='...'
                    />
                  </div>
                  <div class='col-md-8'>
                    <div class='card-body'>
                      <h5 class='card-title'>17-18 Feb 2024</h5>
                      <p class='card-text'>Tes Akademik (B.Inggris & MTK)</p>
                      <p class='card-text'>
                        <small class='text-body-secondary'>SMK TI Bazma</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col'>
              <div class='card mb-3'>
                <div class='row g-0'>
                  <div class='col-md-4'>
                    <img
                      src={require('../images/Empat.png')}
                      class='img-fluid rounded-start'
                      alt='...'
                      style={imageStyle}
                    />
                  </div>
                  <div class='col-md-8'>
                    <div class='card-body'>
                      <h5 class='card-title'>01-03 Mar 2024</h5>
                      <p class='card-text'>Tes Bacaan Al-Qur'an</p>
                      <p class='card-text'>
                        <small class='text-body-secondary'>SMK TI Bazma</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class='card mb-3'>
                <div class='row g-0'>
                  <div class='col-md-4'>
                    <img
                      src={require('../images/Lima.png')}
                      class='img-fluid rounded-start'
                      alt='...'
                      style={imageStyle}
                    />
                  </div>
                  <div class='col-md-8'>
                    <div class='card-body'>
                      <h5 class='card-title'>08-10 Mar 2024</h5>
                      <p class='card-text'>Wawancara</p>
                      <p class='card-text'>
                        <small class='text-body-secondary'>SMK TI Bazma</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class='card mb-3'>
                <div class='row g-0'>
                  <div class='col-md-4'>
                    <img
                      src={require('../images/Enam.png')}
                      class='img-fluid rounded-start'
                      alt='...'
                      style={imageStyle}
                    />
                  </div>
                  <div class='col-md-8'>
                    <div class='card-body'>
                      <h5 class='card-title'>16-17 Mar 2024</h5>
                      <p class='card-text'>Psikotest</p>
                      <p class='card-text'>
                        <small class='text-body-secondary'>SMK TI Bazma</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4  '>
          <img
            src={require('../images/PPDB.jpg')}
            className='img-fluid'
            alt='...'
          />
        </div>
      </div>
    </div>
  )
}

export default CardBottomComponent
