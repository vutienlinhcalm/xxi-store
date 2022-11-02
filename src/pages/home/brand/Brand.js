import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Brand.css'
import Creed from '../../../asset/images/Creed.png'
import DamePerfumery from '../../../asset/images/Dame-Perfumery-1.png'
import LmaginaryAuthor from '../../../asset/images/Hang-nuoc-hoa-Imaginary-Authors.png'
import Zoologist from '../../../asset/images/Hang-nuoc-hoa-Zoologist.png'
import Lorchestre from '../../../asset/images/LOrchestre-Parfums.png'   
//import Nasomatto from '../../../asset/images/Nasomatto.png'
import ByKilian from '../../../asset/images/nuoc-hoa-by-kilian.png' 
import Dior from '../../../asset/images/nuoc-hoa-dior.png'
import Lelabo from '../../../asset/images/nuoc-hoa-le-labo.png'
import Tomford from '../../../asset/images/nuoc-hoa-tomford.png'
import Ysl from '../../../asset/images/nuoc-hoa-ysl.png'
//import OrtoParisi from '../../../asset/images/Orto-Parisi.png'
// import ByKilianLink from 'https://xxivstore.com/product-category/thuong-hieu/by-kilian/'

const Brand = ()=>{
    return(
        <Container className='brand__container'>
            <div>
                <p className='brand__container__header'>Thương Hiệu Nổi Tiếng</p>
            </div>
            <Row className="brand__container__items">
                <Col xs={2} className='brand__container__item'>
                    <a href='https://xxivstore.com/product-category/thuong-hieu/by-kilian' className=''>
                        <img className='brand__container__item-img' src={Creed} alt='Creed'></img>
                    </a>
                </Col>
                <Col xs={2} className='brand__container__item'>
                    <a href='https://xxivstore.com/product-category/thuong-hieu/by-kilian'  className=''>
                        <img className='brand__container__item-img' src={DamePerfumery} alt='Dame-Perfumery'></img>
                     </a>
                 </Col>
                <Col xs={2} className='brand__container__item'>
                    <a href='https://xxivstore.com/product-category/thuong-hieu/by-kilian'  className=''>
                        <img className='brand__container__item-img' src={LmaginaryAuthor} alt='Imaginary-Authors'></img>
                    </a>
                </Col>
                <Col xs={2} className='brand__container__item'>
                    <a href='https://xxivstore.com/product-category/thuong-hieu/by-kilian'  className=''>
                        <img className='brand__container__item-img' src={Zoologist} alt='Zoologist'></img>
                    </a>
                </Col>
                <Col xs={2} className='brand__container__item'>
                    <a href='https://xxivstore.com/product-category/thuong-hieu/by-kilian'  className=''>
                        <img className='brand__container__item-img' src={Lorchestre} alt='LOrchestre-Parfums'></img>
                    </a>
                </Col>
                {/* <Col xs={2} className='brand__container__item'>
                    <a href='https://xxivstore.com/product-category/thuong-hieu/by-kilian'  className=''>
                        <img className='brand__container__item-img' src={Nasomatto} alt='Nasomatto'></img>
                    </a>
                </Col> */}
            </Row>
            <Row className="brand__container__items">
                <Col xs={2} className='brand__container__item'>
                    <a href='https://xxivstore.com/product-category/thuong-hieu/by-kilian'  className=''>
                        <img className='brand__container__item-img' src={ByKilian} alt='by-kilian'></img>
                    </a>
                </Col>
                <Col xs={2} className='brand__container__item'>
                    <a href='https://xxivstore.com/product-category/thuong-hieu/by-kilian'  className=''>
                        <img className='brand__container__item-img' src={Dior} alt='dior'></img>
                    </a>
                </Col>
                <Col xs={2} className='brand__container__item'>
                    <a href='https://xxivstore.com/product-category/thuong-hieu/by-kilian'  className=''>
                        <img className='brand__container__item-img' src={Lelabo} alt='le-labo'></img>
                    </a>
                </Col>
                <Col xs={2} className='brand__container__item'>
                    <a href='https://xxivstore.com/product-category/thuong-hieu/by-kilian'  className=''>
                        <img className='brand__container__item-img' src={Tomford} alt='Tomford'></img>
                    </a></Col>
                <Col xs={2} className='brand__container__item'>
                    <a href='https://xxivstore.com/product-category/thuong-hieu/by-kilian'  className=''>
                        <img className='brand__container__item-img' src={Ysl} alt='Ysl'></img>
                    </a>
                </Col>
                {/* <Col className='brand__container__item'>
                    <a href='https://xxivstore.com/product-category/thuong-hieu/by-kilian/' className=''>
                        <img className='brand__container__item-img' src={OrtoParisi} alt='Orto-Parisi'></img>
                    </a>
                </Col> */}
            </Row>
        </Container>
    )
}
export default Brand;