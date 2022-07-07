import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient( #1e3142 80%, #364168);
    font-family: sans-serif;
`
export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 22rem;
    gap: 15px;
    background-color: white;
    padding: 20px;
    border-radius: 7px;
    background-color: rgba(255,255,255,0.1);
    box-shadow: 3px 3px 10px -1px rgba(0,0,0,0.4);
    align-items: center;
    @media (max-width: 400px){
        width: 80%;
    }
`
export const Heading = styled.h2`
    position: relative;
    font-size: 20px;
    text-transform: uppercase;
    color: white ;
    text-align: center;
    letter-spacing: 0.4rem;
`
export const InputContainer = styled.div`
    width: 100%;
    border-radius: 7px;
    padding: 10px;
    display: flex;
    background-color: #EEEEEE;
    box-sizing: border-box;
    gap:10px
`
export const InputBox = styled.input`
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 15px;
    letter-spacing: 2px;
`
export const Button = styled.div`
    width: 50%;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    text-transform: uppercase;
    background-color: #FF6464;
    padding-block: 10px;
    cursor: pointer;
    color: white;
    font-weight: 700;
    letter-spacing: 0.2rem;

`
