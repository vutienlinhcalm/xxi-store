import  React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignUp.css'

const  SignUp = ()=>{
    return(
    <div>
        <h1>Đăng Nhập</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>tên tài khoản</Form.Label>
                <Form.Control type="text" placeholder="tên tài khoản" />
            </Form.Group>
            

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>mật khẩu</Form.Label>
                <Form.Control type="password" placeholder="mật khẩu" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="ghi nhớ mật khẩu" />
            </Form.Group>
            <Form.Label>Đăng nhập với</Form.Label>
            <div>
                <Button variant="outline-secondary" type="submit">
                    Đăng nhập với google
                </Button>
                <Button variant="outline-secondary" type="submit">
                    Đăng nhập với facebook
                </Button>
            </div>
            <Button variant="outline-secondary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
    )
}
export default SignUp;