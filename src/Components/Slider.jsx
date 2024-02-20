import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/over2.jpg";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 400,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            autoplay: true,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            autoplay: true,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            autoplay: true,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="sildermainboxclient">
        <Slider {...settings}>
          <div>
            <div className="boxclient">
              <img
                className="imgclient"
                src={img1}
                alt="img"
                width={250}
                height={250}
              ></img>
            </div>
          </div>
          <div>
            <div className="boxclient">
              <img
                className="imgclient"
                src={img1}
                alt="img"
                width={250}
                height={250}
              ></img>
            </div>
          </div>
          <div>
            <div className="boxclient">
              <img
                className="imgclient"
                src={img1}
                alt="img"
                width={250}
                height={250}
              ></img>
            </div>
          </div>
          <div>
            <div className="boxclient">
              <img
                className="imgclient"
                src={img1}
                alt="img"
                width={250}
                height={250}
              ></img>
            </div>
          </div>
          <div>
            <div className="boxclient">
              <img
                className="imgclient"
                src={img1}
                alt="img"
                width={250}
                height={250}
              ></img>
            </div>
          </div>
          <div>
            <div className="boxclient">
              <img
                className="imgclient"
                src={img1}
                alt="img"
                width={250}
                height={250}
              ></img>
            </div>
          </div>
          <div>
            <div className="boxclient">
              <img
                className="imgclient"
                src={img1}
                alt="img"
                width={250}
                height={250}
              ></img>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
