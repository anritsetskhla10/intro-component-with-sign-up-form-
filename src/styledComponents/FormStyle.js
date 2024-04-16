import styled from "styled-components";


const FormStyle = styled.form`
        width: 32.7rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2.4rem;
        border-radius: 1rem;
        box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
        background-color: #fff;



    button{
        width: 100%;
        margin-bottom: 0.8rem;
        padding: 1.5rem 0;
        border: none;
        border-radius: 0.5rem;
        box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.09);
        background-color: #38cc8b;
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.73;
        letter-spacing: 1px;
        color: #fff;
    }

    p{
        width: 24.9rem;
        margin-top: 0.8rem;
        font-size: 1.1rem;
        font-weight: 500;
        line-height: 1.91;
        text-align: center;
        color: #bab7d4;
    }

    span{
        font-weight: bold;
        color: #ff7979;
    }

    .inputContainer{
            width: 100%;
            position: relative;
            margin-bottom: 1.6rem;
    }

    .errorImg{
        width: 24px;
        height: 24px;
        position: absolute;
        top: 1.6rem;
        right: 2.7rem;
    }

    .errorText{
        width: 100%;
        font-size: 11px;
        font-weight: 500;
        font-style: italic;
        text-align: right;
        color: #ff7979;
        margin-top: 0.6rem;
    }


    @media only screen and (min-width:1440px) {
        
        width: 54rem;
        padding: 4rem;


        p{
            width: 36.7rem;
            line-height: 2.36;
            white-space: nowrap;
        }

        .inputContainer{
            width: 100%;
            position: relative;
            margin-bottom: 2rem;
        }

        button:hover{
            cursor: pointer;
            background-color: #77e2b3;
        }




    }

`




export { FormStyle }