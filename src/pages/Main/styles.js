import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background: #0d1317;
`;

export const Footer = styled.View`
  position: absolute;
  width: 100%;
  height: 90px;
  bottom: 0px;
  background: #161c21;
`;

export const Header = styled.View`
  position: absolute;
  width: 100%;
  height: 90px;
  top: 0px;
  background: #161c21;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 50px;
  background: #0d1317;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 95px;
  height: 95px;
  z-index: 1;
`;

export const MarkLocationButton = styled.TouchableOpacity`
  background: #127983;
  width: 75px;
  height: 75px;
  border-radius: 50px;
`;
