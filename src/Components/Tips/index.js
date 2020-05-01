import React from 'react';
import { Container, Option, Title, Img } from './styles';

import { Collection } from '../../constants/ArrayTips'

function Tips() {
  return (
    <Container>
        {Collection.map((Items) =>
        <Option key={Items.key} bgColor={Items.bgColor}>
            <Title>{Items.title}</Title>
            <Img source={Items.imagem}/>
        </Option>
        )}
    </Container>
  )
}
export default Tips;