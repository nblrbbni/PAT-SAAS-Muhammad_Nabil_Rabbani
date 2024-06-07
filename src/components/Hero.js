function HeroComponent () {
  return (
    <>
      <div class='container mt-5 pt-5' id='about'>
        <div class='row flex-lg-row-reverse align-items-center g-5 py-5'>
          <div class='col-12 col-sm-12 col-lg-6'>
            <video width='100%' height='auto' controls>
              <source src={require('../videos/Videobazma.mp4')} type='video/mp4' />
              Your browser does not support HTML video.
            </video>
          </div>
          <div class='col-lg-6'>
            <h1 class='display-5 fw-bold text-body-emphasis lh-1 mb-3'>
              Merajut Asa, Menjejak & Menebar Manfaat
            </h1>
            <p style={{textAlign: 'justify'}}>
              Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA)
              menyelenggarakan program pembelajaran yang ditempuh selama 4 tahun
              dengan siswa-siswa yang berasal dari berbagai daerah di seluruh
              Indonesia. SMK TI Bazma menyelenggarakan pendidikan dengan jurusan
              SIJA (Sistem Informatika, Jaringan & Aplikasi) dengan kombinasi
              kurikulum berbasis asrama.
            </p>
            <div class='d-grid gap-2 d-md-flex justify-content-md-start'>
              <button type='button' class='btn btn-primary btn-lg px-4 me-md-2'>
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroComponent;