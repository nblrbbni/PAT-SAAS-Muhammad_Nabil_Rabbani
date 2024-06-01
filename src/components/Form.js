function FormComponent () {
  return (
    <>
      <div className='container mb-5'>
        <div className='row'>
          <div className='col-sm'>
            <div id='carouselExample' class='carousel slide'>
              <div class='carousel-inner'>
                <div class='carousel-item active'>
                  <img src={require('../images/Logo.png')} class='d-block w-100' alt='...' />
                </div>
                <div class='carousel-item'>
                  <img src={require('../images/Logo.png')} class='d-block w-100' alt='...' />
                </div>
                <div class='carousel-item'>
                  <img src={require('../images/Logo.png')} class='d-block w-100' alt='...' />
                </div>
              </div>
              <button
                class='carousel-control-prev'
                type='button'
                data-bs-target='#carouselExample'
                data-bs-slide='prev'
              >
                <span
                  class='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span class='visually-hidden'>Previous</span>
              </button>
              <button
                class='carousel-control-next'
                type='button'
                data-bs-target='#carouselExample'
                data-bs-slide='next'
              >
                <span
                  class='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span class='visually-hidden'>Next</span>
              </button>
            </div>
          </div>
          <div className='col-sm'>
            <form>
              <div class='mb-3'>
                <label for='exampleInputEmail1' class='form-label'>
                  Nama
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
              </div>
              <div class='mb-3'>
                <label for='exampleInputPassword1' class='form-label'>
                  Email
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='exampleInputPassword1'
                />
              </div>
              <div class='mb-3'>
                <label for='exampleInputPassword1' class='form-label'>
                  Komentar
                </label>
                <textarea className='form-control'></textarea>
              </div>
              <button type='submit' class='btn btn-primary'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormComponent
