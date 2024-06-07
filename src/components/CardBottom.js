function CardBottomComponent () {
  const imageStyle = {
    objectFit: 'cover'
  }

  const cardData = [
    {
      date: '1.) 31 Jan 2024',
      text: 'Deadline Pendaftaran',
      image: require('../images/Satu.png'),
      smallText: 'SMK TI Bazma'
    },
    {
      date: '2.) 09 Feb 2024',
      text: 'Pengumuman & Seleksi Berkas',
      image: require('../images/Dua.png'),
      smallText: 'SMK TI Bazma'
    },
    {
      date: '3.) 17-18 Feb 2024',
      text: 'Tes Akademik (B.Inggris & MTK)',
      image: require('../images/Tiga.png'),
      smallText: 'SMK TI Bazma'
    },
    {
      date: '4.) 01-03 Mar 2024',
      text: "Tes Bacaan Al-Qur'an",
      image: require('../images/Empat.png'),
      smallText: 'SMK TI Bazma'
    },
    {
      date: '5.) 08-10 Mar 2024',
      text: 'Wawancara',
      image: require('../images/Lima.png'),
      smallText: 'SMK TI Bazma'
    },
    {
      date: '6.) 16-17 Mar 2024',
      text: 'Psikotest',
      image: require('../images/Enam.png'),
      smallText: 'SMK TI Bazma'
    }
  ]

  return (
    <div className='container bg-body-tertiary p-5' id='review'>
      <div className='row'>
        <div className='col-md-8'>
          <h1>PPDB</h1>
          <div className='row'>
            {cardData.map((card, index) => (
              <div className='col-md-6' key={index}>
                <div className='card mb-3'>
                  <div className='row g-0'>
                    <div className='col-md-4'>
                      <img
                        src={card.image}
                        className='img-fluid rounded-start'
                        alt='...'
                        style={imageStyle}
                      />
                    </div>
                    <div className='col-md-8'>
                      <div className='card-body'>
                        <h5 className='card-title'>{card.date}</h5>
                        <p className='card-text'>{card.text}</p>
                        <p className='card-text'>
                          <small className='text-body-secondary'>
                            {card.smallText}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='col-md-4'>
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

export default CardBottomComponent;