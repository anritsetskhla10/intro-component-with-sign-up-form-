
import styled from 'styled-components';


const OfferContainer = styled.div`
    width: 32.7rem;
    padding: 1.8rem 0;
    margin-bottom: 2.4rem;
    border-radius: 1rem;
    box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
    background-color: #5e54a4;
    text-align:center;

    p{
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.73;
      letter-spacing: 0.27px;
      color: #fff;
    }

    span{
      font-weight: 500;
    }

    @media only screen and (min-width:1440px){
      
      width: 54rem;
      padding: 1.7rem 0;

      br{
        display: none;
      }



    }


`

export { OfferContainer }