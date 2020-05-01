import React from 'react';
import { Container, Option, Img, Label } from './styles';
import { Collection } from '../../constants/ArraySuggestion'

function Suggestions() {
  return (
    <Container>
      {Collection.map((Item) =>
      <Option>
        <Img source={Item.imagem} />
        <Label>{Item.title}</Label>
      </Option>
      )}
    </Container>
  )
}
export default Suggestions;