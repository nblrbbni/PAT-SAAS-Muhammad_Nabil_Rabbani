function CardComponent () {
  const imageStyle = {
    height: '150px',
    objectFit: 'cover'
  }

  return (
    <>
      <div className='container mt-5 mb-5 pb-5' id='mitra'>
        <div className='row'>
          <div className='col-sm mb-3'>
            <h5>Pertamina</h5>
            <div className='card'>
              <img
                src={require('../images/Pertamina.png')}
                className='img-thumbnail'
                style={imageStyle}
                alt='...'
              />
              <div className='card-body'>
                <p className='card-text'>
                  PT Pertamina adalah sebuah badan usaha milik negara Indonesia
                  yang terutama bergerak di bidang minyak dan gas.
                </p>
              </div>
            </div>
          </div>
          <div className='col-sm mb-3'>
            <h5>Universitas Pertamina</h5>
            <div className='card'>
              <img
                src={require('../images/UnivPer.png')}
                className='img-thumbnail'
                style={imageStyle}
                alt='...'
              />
              <div className='card-body'>
                <p className='card-text'>
                  Universitas Pertamina didirikan pada tanggal 1 Februari 2016
                  sebagai bentuk tanggung jawab sosial PT Pertamina di bidang
                  pendidikan
                </p>
              </div>
            </div>
          </div>
          <div className='col-sm mb-3'>
            <h5>Elnusa</h5>
            <div className='card'>
              <img
                src={require('../images/Elnusa.png')}
                className='img-thumbnail'
                style={imageStyle}
                alt='...'
              />
              <div className='card-body'>
                <p className='card-text'>
                  Elnusa adalah salah satu perusahaan BUMN yang bergerak di
                  sektor energi, khususnya dalam bidang jasa energi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardComponent
