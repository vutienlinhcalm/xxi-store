import React from 'react';
import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import{Container,Row,Col} from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import FacebookIcon from '@mui/icons-material/Facebook';
import {FcGoogle} from 'react-icons/fc';
import Register from '../../asset/images/register.webp'
import FormInput from '../../common/forminput/FormInput';
import './SignUp.css'

const  SignUp = ()=>{
     const [values,setValues] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",
        confirmpassword:"",
     });
     const inputs = [{
        id:"username",
        name:"username",
        type:"text",
        placeholder:"Tên tài khoản",
        label:"Tên tài khoản",
        pattern:"^[a-zA-Z0-9]{3,16}$",
        errormessage:"Tên tài khoản có từ 3-16 ký tự và không bao gồm ký tự đặc biệt",
        required:true
     },
     {
        id:"email",
        name:"email",
        type:"email",
        placeholder:"Email",
        label:"Địa chỉ email",
        errormessage:"Nên là địa chỉ Email",
        required:true
     },
     {
        id:"phone",
        name:"phone",
        type:"text",
        placeholder:"Số Điện Thoại",
        label:"Số Điện Thoại",
        pattern:"^0[0-9]{9}$",
        errormessage:"Số điện thoại bắt đầu bằng 0 bao gồm 10 chữ số",
        required:true
     },
     {
        id:"password",
        name:"password",
        type:"password",
        placeholder:"Mật khẩu",
        label:"Mật khẩu",
        pattern:`(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$`,
        errormessage:"Mật khẩu có ít nhất 8 ký tự bao gồm 1 chữ số, 1 chữ thường và 1 chữ hoa",
        required:true
     },
     {
        id:"confirmpassword",
        name:"confirmpassword",
        type:"password",
        placeholder:"Xác nhận mật khẩu",
        label:"Xác nhận mật khẩu",
        pattern:values.password,
        errormessage:"Mật khẩu chưa giống",
        required:true
     }]
    
    const handleonchange =(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(Object.fromEntries(data.entries()))
    }
  
    return(
        <Container>
            <img className='container__img' src={Register} alt="Register"></img>
            <Row className='container__row'>
            
                <Col className='container__col' xl={6}>
                </Col>
                <Col xl={6} className='container__col'>
                    <h1>Đăng ký</h1>
                    <p>bạn đã có tài khoản ?<NavLink className="link_login" to="/signin" >Đăng Nhập</NavLink ></p>
                <form onSubmit={handleSubmit}>
                   
                    <label><AccountCircleIcon/> {inputs[0].label} </label>
                    <FormInput key={inputs[0].id} {...inputs[0]} value={values[inputs[0].name]} onChage={handleonchange}/>

                    <label><EmailIcon/> {inputs[1].label} </label>
                    <FormInput key={inputs[1].id} {...inputs[1]} value={values[inputs[1].name]}  onChage={handleonchange}/>

                    <label><SmartphoneIcon/> {inputs[2].label} </label>
                    <FormInput key={inputs[2].id} {...inputs[2]} value={values[inputs[2].name]}  onChage={handleonchange}/>

                    <label><LockIcon/> {inputs[3].label} </label>
                    <FormInput key={inputs[3].id} {...inputs[3]} value={values[inputs[3].name]}  onChage={handleonchange}/>

                    <label><LockIcon/> {inputs[4].label} </label>
                    <FormInput key={inputs[4].id} {...inputs[4]} value={values[inputs[4].name]}  onChage={handleonchange}/>


                        <Form.Label className='d-flex justify-content-center container__label'>Đăng ký với</Form.Label>
                        <div className='d-flex justify-content-center'>
                            
                            <button className='container__btn' type='submit'>
                            <FcGoogle className='container__google--icon' />
                                 Google
                            </button>
                            <button className='container__btn' type='submit'>
                            <FacebookIcon className='container__facebook--icon' />
                                 Facebook
                            </button>
                            
                        </div>
                        <div className='d-flex justify-content-center'>
                        <button className='container__signup_btn' type="submit">
                            Đăng Ký
                        </button> 
                        </div>
                                     
                </form>
                </Col>
            </Row>
        </Container>
    
    )
}
export default SignUp;