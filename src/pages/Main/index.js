import React from 'react';
import {Text} from 'react-native';
import * as S from './styles';
const Main = () => {
  return (
    <S.Container>
      <S.Header />
      <S.ButtonContainer>
        <S.MarkLocationButton />
      </S.ButtonContainer>
      <S.Footer />
    </S.Container>
  );
};

export default Main;
