import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css'

const Footer = () =>{

    return (
        <Container className='footer'>
            <Row className='footer__row'>
                <Col className='footer__row__col'>
                    <p className='footer__row__col__text'> XXI Store</p>
                    <ul className='footer__row__col__items'>
                        <li className='footer__row__col__item'>ưu đãi thành viên</li>
                        <li className='footer__row__col__item'>tài khoản</li>
                        <li className='footer__row__col__item'>tuyển dụng</li>
                    </ul>
                    
                </Col>
                <Col className='footer__row__col'>
                    <p className='footer__row__col__text'> Chính sách bán hàng</p>
                    <ul className='footer__row__col__items'>
                        <li className='footer__row__col__item'>phương thức vận chuyển</li>
                        <li className='footer__row__col__item'>câu hỏi thường gặp</li>
                        <li className='footer__row__col__item'>điều khoản và điều kiện sử dụng</li>
                        <li className='footer__row__col__item'>điều khoản và điều kiện bán hàng</li>
                        <li className='footer__row__col__item'>thông báo pháp lý</li>
                    </ul>
                </Col>
                <Col className='footer__row__col'>
                    <p className='footer__row__col__text'>thông tin chung</p>
                    <ul className='footer__row__col__items'>
                        <li className='footer__row__col__item'>giới thiệu</li>
                        <li className='footer__row__col__item'>blog</li>
                        <li className='footer__row__col__item'>liên hệ</li>
                        <li className='footer__row__col__item'>sản phẩm</li>
                    </ul>
                </Col>
            </Row>
            <div className='footer__social'>
                <div className='footer__social__wrap'>
                    <FacebookIcon htmlColor='#1977F3' className='footer__social__icon' />
                </div>
                <div className='footer__social__wrap'>
                    <YouTubeIcon htmlColor='red' className='footer__social__icon' />
                </div>
                <div className='footer__social__wrap'>
                    <TelegramIcon htmlColor='blue' className='footer__social__icon' />
                </div>
                <div className='footer__social__wrap'>
                    <TwitterIcon htmlColor="#1D9BF0" className='footer__social__icon' />
                </div>
                <div className='footer__social__wrap'>
                    <InstagramIcon htmlColor="#E7476D" className='footer__social__icon'/>
                </div>
            </div>
        </Container>
    )
}
export default Footer;