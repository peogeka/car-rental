import styled from 'styled-components';
import HomeImage from '../../components/Images/back-foto-main.jpg';

export const SectionHome = styled.section`
  background-image: url(${HomeImage});
  background-size: cover;
  background-position: center center;

  min-height: 900px;
`;
export const TitleText = styled.h1`
    font-size: 100px;
    text-align: center;
    padding-top: 50px;
    color: #0b305b`
