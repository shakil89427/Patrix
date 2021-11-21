import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import client_1 from "../../images/testimonials/client-1.jpg";
import client_2 from "../../images/testimonials/client-2.jpg";
import client_3 from "../../images/testimonials/client-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    pauseonhover: true,
    centermode: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="testimonial-div">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,128L48,160C96,192,192,256,288,245.3C384,235,480,149,576,128C672,107,768,149,864,149.3C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <h1 className="testimonial-h1 text-white text-center fw-bolder mt-5">
        Testimonials
      </h1>
      <hr className="hr-1 text-white mb-2" />
      <h5 className="text-center text-white">what our clients are saying</h5>
      <Slider className="container testimonial" {...settings}>
        <div className="text-center">
          <div className="pb-5 testimonial-p">
            <p className="pt-3 px-2">
              <i class="fas fa-quote-left"></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              aut consequatur illo animi optio exercitationem doloribus eligendi
              iusto atque repudiandae. Distinctio.
              <i class="fas fa-quote-right"></i>
            </p>
            <p>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </p>
          </div>
          <img
            className="testimonial-img rounded-circle mx-auto"
            src={client_1}
            alt=""
          />
          <h2 className="text-white">Patrick Muriungi</h2>
          <h6 className="text-white">CEO & Founder</h6>
        </div>
        <div className="text-center">
          <div className="pb-5 testimonial-p">
            <p className="pt-3 px-2">
              <i class="fas fa-quote-left"></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              aut consequatur illo animi optio exercitationem doloribus eligendi
              iusto atque repudiandae. Distinctio.
              <i class="fas fa-quote-right"></i>
            </p>
            <p>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </p>
          </div>
          <img
            className="testimonial-img rounded-circle mx-auto"
            src={client_2}
            alt=""
          />
          <h2 className="text-white">Joy Marete</h2>
          <h6 className="text-white">Finance Manager</h6>
        </div>
        <div className="text-center">
          <div className="pb-5 testimonial-p">
            <p className="pt-3 px-2">
              <i class="fas fa-quote-left"></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              aut consequatur illo animi optio exercitationem doloribus eligendi
              iusto atque repudiandae. Distinctio.
              <i class="fas fa-quote-right"></i>
            </p>
            <p>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </p>
          </div>
          <img
            className="testimonial-img rounded-circle mx-auto"
            src={client_3}
            alt=""
          />
          <h2 className="text-white">ClaireBelle Zawadi</h2>
          <h6 className="text-white">Global Brand Manager</h6>
        </div>
      </Slider>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,128L48,160C96,192,192,256,288,245.3C384,235,480,149,576,128C672,107,768,149,864,149.3C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Testimonials;
