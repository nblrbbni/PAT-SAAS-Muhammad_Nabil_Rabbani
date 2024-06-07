import React from 'react'

function FormComponent () {
  const imageStyle = {
    display: 'block',
    margin: '0 auto'
  }

  const images = [
    { src: require('../images/Person1.png'), alt: 'Person 1' },
    { src: require('../images/Person2.png'), alt: 'Person 2' },
    { src: require('../images/Person3.png'), alt: 'Person 3' }
  ]

  return (
    <>
      <div className='container mt-5 pt-5 mb-5 pb-5' id='mereka'>
        <div className='row'>
          <div className='col-sm'>
            <div
              id='carouselExampleAutoplaying'
              className='carousel slide carousel-dark'
              data-bs-ride='carousel'
            >
              <div className='carousel-inner'>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                  >
                    <img
                      src={image.src}
                      className='d-block'
                      style={imageStyle}
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>
              <button
                className='carousel-control-prev'
                type='button'
                data-bs-target='#carouselExampleAutoplaying'
                data-bs-slide='prev'
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Previous</span>
              </button>
              <button
                className='carousel-control-next'
                type='button'
                data-bs-target='#carouselExampleAutoplaying'
                data-bs-slide='next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Next</span>
              </button>
            </div>
          </div>
          <div className='col-sm'>
            <form>
              <div className='mb-3'>
                <label htmlFor='exampleInputEmail1' className='form-label'>
                  Nama
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='exampleInputPassword1' className='form-label'>
                  Email
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleInputPassword1'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='exampleInputPassword1' className='form-label'>
                  Komentar
                </label>
                <textarea className='form-control'></textarea>
              </div>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormComponent;