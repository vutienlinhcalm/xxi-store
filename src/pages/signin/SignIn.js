import React from 'react';
import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import{Container,Row,Col} from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import {FcGoogle} from 'react-icons/fc';
import Register from '../../asset/images/register.webp'
import FormInput from '../../common/forminput/FormInput';
import './SignIn.css'

const  SignIn = ()=>{
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
        Label:"Tên tài khoản",
        errormessage:"Bạn chưa nhập tài khoản",
        required:true
     },
    
     {
        id:"password",
        name:"password",
        type:"password",
        placeholder:"Mật khẩu",
        Label:"Mật khẩu",
        errormessage:"Bạn chưa nhập mật khẩu",
        required:true
     }
     ]

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
                    <h1>Đăng Nhập</h1>
                <form onSubmit={handleSubmit}>
                    <label><AccountCircleIcon/> {inputs[0].Label} </label>
                    <FormInput key={inputs[0].id} {...inputs[0]} value={values[inputs[0].name]} onChage={handleonchange}/>

                    
                    <label><LockIcon/> {inputs[1].Label} </label>
                    <FormInput key={inputs[1].id} {...inputs[1]} value={values[inputs[1].name]}  onChage={handleonchange}/>

                  


                        <Form.Label className='d-flex justify-content-center container__label'>Đăng nhập với</Form.Label>
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
export default SignIn;