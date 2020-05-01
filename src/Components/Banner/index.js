import React from 'react';
import { Container, Details, Title, Description, Img } from './styles';

import image from '../../Assets/13.png';

function Banner() {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>
        <Description>
            Matenha suas parcerias em dia, use o PicPay para fazer suas cobranças. 
        </Description>
      </Details>
      <Img source={image} />
    </Container>
  )
}
export default Banner;