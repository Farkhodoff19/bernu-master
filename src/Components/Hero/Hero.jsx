import banner from '../Images/banner.png';
import sale from '../Images/sale.png';
import child from '../Images/child.png';

function Hero() {
  return (
    <div className="container d-flex items-center">
      <div
        id="carouselExampleIndicators"
        class="carousel slide w-[750px] h-[380px] mt-[20px] ml-[20px]"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={banner} class="d-block w-100" alt="banner" />
          </div>
          <div class="carousel-item">
            <img src={banner} class="d-block w-100" alt="banner" />
          </div>
          <div class="carousel-item">
            <img src={banner} class="d-block w-100" alt="banner" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="bg-dark carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="bg-dark carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="img-wrapper mx-[10px]">
        <img className='w-[470px] h-[185px] my-[10px]' src={sale} alt="sale" />
        <img className='w-[470px] h-[185px]' src={child} alt="child" />
      </div>
    </div>
  );
}

export default Hero;
