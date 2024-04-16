import styled from "styled-components";



const InputStyle = styled.input`

    width: 100%;
    padding: 1.5rem 0 1.5rem 1.94rem;
    border-radius: 0.5rem;
    border: ${(props) => props.$error ? "solid 2px #ff7979" : "solid 1px #dedede"} ; 
    background-color: #fff;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.86;
    letter-spacing: 0.25px;
    color: #3d3b48;

    @media only screen and (min-width:1440px) {
        
        padding: 1.5rem 0 1.5rem 3.2rem;

        &:active{
            border: solid 1px #5e54a4;
            background-color: #fff;
        }
        
    }

`



export { InputStyle }