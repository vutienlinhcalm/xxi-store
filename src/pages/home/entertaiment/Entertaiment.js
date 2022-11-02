import React from 'react';
import './Entertaiment.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SecurityIcon from '@mui/icons-material/Security';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
const Entertaiment = ()=>{
    return (
        <Container className='Entertaiment__container'>
            <h2 className='Entertaiment__header'>
                Tại sao chọn XXI Store
            </h2>
            <Row className='Entertaiment__container__row'>
                <Col className='Entertaiment__container__col'>
                    <SecurityIcon className='Entertaiment__container__col__icon' />
                    <p>Sản Phẩm Chính Hãng</p>
                    <p>sản phẩm nước hoa được mua trực tiếp tại store ở pháp, cam kết chính hãng</p>
                </Col>
                <Col className='Entertaiment__container__col'>
                    <LocalShippingIcon className='Entertaiment__container__col__icon' />
                    <p>Freeship Toàn Quốc</p>
                    <p>xxi áp dụng free ship toàn quốc cho tất cả các khách hàng. chúng tôi chưa áp dụng giao hàng quốc tiếp
                        tại thời điểm này
                    </p>
                </Col>
                <Col className='Entertaiment__container__col'>
                    <CardGiftcardIcon className='Entertaiment__container__col__icon' />
                    <p>Thành Viên Thân Thiết</p>
                    <p>thành viên vàng sẽ được giảm 5% / đơn hàng. với thành viên bạc được giảm 3%/đơn hàng</p>
                </Col>
            </Row>
        </Container>
    )
}
export default Entertaiment;