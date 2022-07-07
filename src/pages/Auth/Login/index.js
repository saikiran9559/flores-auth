import { useState } from 'react';
import { FaUserAlt} from 'react-icons/fa';
import {GoKey} from 'react-icons/go';
import { BsFillEyeFill, BsFillEyeSlashFill} from 'react-icons/bs'

import {Button, Container, InputContainer, LoginContainer ,Heading, InputBox} from "./styled";


const Login =()=>{
    const [pwdView, setPwdView] = useState(false)
    const [credentials, setCredentials] = useState({
        username:'',
        password:''
    })
    const handleChange=(e)=>{
        setCredentials({
            ...credentials,
            [e.target.name]:e.target.value
        })
    }
    return(
        <Container>
            <LoginContainer>
                <Heading>Welcome</Heading>
                <InputContainer>
                    <FaUserAlt color="grey"/>
                    <InputBox type={"text"} placeholder={"Username"} name='username' onChange={handleChange}/>
                </InputContainer>
                <InputContainer>
                    <GoKey color="grey"/>
                    <InputBox type={pwdView?"text":"password"} placeholder={"Password"} onChange={handleChange}/>
                    {!pwdView ?
                    <BsFillEyeFill onClick={()=>setPwdView(!pwdView)} color='grey' width="10px" height="10px" cursor={"pointer"}/>:
                    <BsFillEyeSlashFill onClick={()=>setPwdView(!pwdView)} color='grey' width="10px" height="10px" cursor={"pointer"}/>
                    }
                </InputContainer>
                <Button>Login</Button>
            </LoginContainer>
        </Container>
    );
}

export default Login;