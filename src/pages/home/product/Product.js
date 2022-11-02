import React, { Component } from "react";
import Slider from "react-slick";

import './Product.css'
import Creed_aventus from '../../../asset/images/male/aventus-eau-de-parfum.png'
import Acquadigio from '../../../asset/images/male/acqua-di-gio-profondo.jpg'
import Ultramale from'../../../asset/images/male/ultra-male.png'
import Russiantea from '../../../asset/images/male/Russian-Tea.png'
import JazzClub from '../../../asset/images/male/jazzclub.png'
import MoschinoToyBoy from '../../../asset/images/male/Moschino-Toy-Boy.png'
import RojaOceania from '../../../asset/images/male/Roja-Oceania.png'
import ScandalPour from '../../../asset/images/male/Scandal-Pour-Homme.png'
import Tomfordmuskpure from '../../../asset/images/male/Tom-ford-musk-pure.png'
import Calvinklein from '../../../asset/images/male/Calvin-Klein-Eternity-Men.png'
export default class Product extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      return (
        <div className="Product">
          <h2 className="product__header">Sản phẩm nổi bật</h2>
          <div className="product__gender">
            <p>Nước Hoa Nam</p>
            <p>Nước Hoa Nữ</p>
            <p>Unisex</p>
          </div>
          <Slider {...settings} className="slider">
            <div className="Slider__container">
              <a className="Slider__container__link" href="https://xxivstore.com/product-category/thuong-hieu/by-kilian">
                    <img className="Slider__container__img" src={Creed_aventus} alt='product'></img>
                    <div className="Slider__container__text">
                        <h3 className="Slider__container__text__name">Creed</h3>
                        <h3 className="Slider__container__text__des">Aventus</h3>
                        <p className="Slider__container__text__cost">6.000.000 <span>đ</span></p>
                    </div>
              </a>
            </div>
            <div className="Slider__container">
              <a className="Slider__container__link" href="https://xxivstore.com/product-category/thuong-hieu/by-kilian">
                    <img className="Slider__container__img" src={Acquadigio} alt='product'></img>
                    <div className="Slider__container__text">
                        <h3 className="Slider__container__text__name">Creed</h3>
                        <h3 className="Slider__container__text__des">Aventus</h3>
                        <p className="Slider__container__text__cost">6.000.000 <span>đ</span></p>
                    </div>
              </a>
            </div>
            <div className="Slider__container">
              <a className="Slider__container__link" href="https://xxivstore.com/product-category/thuong-hieu/by-kilian">
                    <img className="Slider__container__img" src={ Ultramale} alt='product'></img>
                    <div className="Slider__container__text">
                        <h3 className="Slider__container__text__name">Creed</h3>
                        <h3 className="Slider__container__text__des">Aventus</h3>
                        <p className="Slider__container__text__cost">6.000.000 <span>đ</span></p>
                    </div>
              </a>
            </div>
            <div className="Slider__container">
              <a className="Slider__container__link" href="https://xxivstore.com/product-category/thuong-hieu/by-kilian">
                    <img className="Slider__container__img" src={Russiantea} alt='product'></img>
                    <div className="Slider__container__text">
                        <h3 className="Slider__container__text__name">Creed</h3>
                        <h3 className="Slider__container__text__des">Aventus</h3>
                        <p className="Slider__container__text__cost">6.000.000 <span>đ</span></p>
                    </div>
              </a>
            </div>
            <div className="Slider__container">
              <a className="Slider__container__link" href="https://xxivstore.com/product-category/thuong-hieu/by-kilian">
                    <img className="Slider__container__img" src={JazzClub} alt='product'></img>
                    <div className="Slider__container__text">
                        <h3 className="Slider__container__text__name">Creed</h3>
                        <h3 className="Slider__container__text__des">Aventus</h3>
                        <p className="Slider__container__text__cost">6.000.000 <span>đ</span></p>
                    </div>
              </a>
            </div>
            <div className="Slider__container">
              <a className="Slider__container__link" href="https://xxivstore.com/product-category/thuong-hieu/by-kilian">
                    <img className="Slider__container__img" src={MoschinoToyBoy} alt='product'></img>
                    <div className="Slider__container__text">
                        <h3 className="Slider__container__text__name">Creed</h3>
                        <h3 className="Slider__container__text__des">Aventus</h3>
                        <p className="Slider__container__text__cost">6.000.000 <span>đ</span></p>
                    </div>
              </a>
            </div>
            <div className="Slider__container">
              <a className="Slider__container__link" href="https://xxivstore.com/product-category/thuong-hieu/by-kilian">
                    <img className="Slider__container__img" src={RojaOceania} alt='product'></img>
                    <div className="Slider__container__text">
                        <h3 className="Slider__container__text__name">Creed</h3>
                        <h3 className="Slider__container__text__des">Aventus</h3>
                        <p className="Slider__container__text__cost">6.000.000 <span>đ</span></p>
                    </div>
              </a>
            </div>
            <div className="Slider__container">
              <a className="Slider__container__link" href="https://xxivstore.com/product-category/thuong-hieu/by-kilian">
                    <img className="Slider__container__img" src={Tomfordmuskpure} alt='product'></img>
                    <div className="Slider__container__text">
                        <h3 className="Slider__container__text__name">Creed</h3>
                        <h3 className="Slider__container__text__des">Aventus</h3>
                        <p className="Slider__container__text__cost">6.000.000 <span>đ</span></p>
                    </div>
              </a>
            </div>
            <div className="Slider__container">
              <a className="Slider__container__link" href="https://xxivstore.com/product-category/thuong-hieu/by-kilian">
                    <img className="Slider__container__img" src={ScandalPour} alt='product'></img>
                    <div className="Slider__container__text">
                        <h3 className="Slider__container__text__name">Creed</h3>
                        <h3 className="Slider__container__text__des">Aventus</h3>
                        <p className="Slider__container__text__cost">6.000.000 <span>đ</span></p>
                    </div>
              </a>
            </div>
            <div className="Slider__container">
              <a className="Slider__container__link" href="https://xxivstore.com/product-category/thuong-hieu/by-kilian">
                    <img className="Slider__container__img" src={Calvinklein} alt='product'></img>
                    <div className="Slider__container__text">
                        <h3 className="Slider__container__text__name">Creed</h3>
                        <h3 className="Slider__container__text__des">Aventus</h3>
                        <p className="Slider__container__text__cost">6.000.000 <span>đ</span></p>
                    </div>
              </a>
            </div>
          </Slider>
        </div>
      );
    }
  }