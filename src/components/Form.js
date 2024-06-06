function FormComponent () {
  const imageStyle = {
    display: 'block',
    margin: '0 auto'
  }

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
                <div className='carousel-item active'>
                  <img
                    src={require('../images/Person1.png')}
                    className='d-block'
                    style={imageStyle}
                    alt='...'
                  />
                </div>
                <div className='carousel-item'>
                  <img
                    src={require('../images/Person2.png')}
                    className='d-block'
                    style={imageStyle}
                    alt='...'
                  />
                </div>
                <div className='carousel-item'>
                  <img
                    src={require('../images/Person3.png')}
                    className='d-block'
                    style={imageStyle}
                    alt='...'
                  />
                </div>
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