function CardComponent () {
  const imageStyle = {
    height: '150px',
    objectFit: 'cover'
  }

  const cardData = [
    {
      title: 'Pertamina',
      description:
        'PT. Pertamina adalah sebuah badan usaha milik negara Indonesia yang terutama bergerak di bidang minyak dan gas.',
      image: require('../images/Pertamina.png')
    },
    {
      title: 'Universitas Pertamina',
      description:
        'Universitas Pertamina didirikan pada tanggal 1 Februari 2016 sebagai bentuk tanggung jawab sosial PT Pertamina di bidang pendidikan',
      image: require('../images/UnivPer.png')
    },
    {
      title: 'Elnusa',
      description:
        'Elnusa adalah salah satu perusahaan BUMN yang bergerak di sektor energi, khususnya dalam bidang jasa energi.',
      image: require('../images/Elnusa.png')
    }
  ]

  return (
    <div className='container mt-5 mb-5 pb-5' id='mitra'>
      <div className='row'>
        {cardData.map((card, index) => (
          <div className='col-sm mb-3' key={index}>
            <h5>{card.title}</h5>
            <div className='card'>
              <img
                src={card.image}
                className='img-thumbnail'
                style={imageStyle}
                alt='...'
              />
              <div className='card-body'>
                <p className='card-text' style={{ textAlign: 'justify' }}>
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardComponent;