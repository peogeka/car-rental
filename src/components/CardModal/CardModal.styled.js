import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 14;
`;

export const ModalContent = styled.div`
  position: relative;
  background: #fff;
  padding: 40px;
  border-radius: 24px;
  max-width: 541px;
  max-height: 752px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const ModalImg = styled.img`
  display: block;
  width: 100%;
  max-height: 314px;
  object-fit: cover;
  border-radius: 5px;
`;

export const ModalInfo = styled.div`
  margin-top: 20px;
`;

export const Accent = styled.span`
  color: #3470ff;
`;
export const InfoList = styled.ul`
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  height: 40px;
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  width: 299px;
`;

export const Line = styled.span`
  height: 16px;
  width: 1px;
  background-color: #1214171a;
  display: inline-block;
  margin: 0 6px;
`;

export const Description = styled.p`
  color: #121417;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42;
  margin: 14px 0 24px 0;
`;

export const CardSubTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
  margin-top: 0;
`;

export const FunctionalitiesList = styled.ul`
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 461px;
  padding-left: 0;
  height: 40px;
  margin: 0 0 24px 0;
  font-size: 12px;
  line-height: 1.5;
  gap: 4px 0;
  overflow: hidden;
`;
export const RentalList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const RentalItem = styled.li`
  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
  display: flex;
  padding: 7px 14px;
  align-items: center;
  gap: 8px;
  border-radius: 35px;
  background: #f9f9f9;
  margin-right: 8px;
  margin-bottom: 8px;
`;

export const ConditionText = styled.span`
  flex: 1;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;

export const BlueText = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const RentalCarBtn = styled.a`
  display: inline-block;
  padding: 12px 50px;
  border-radius: 12px;
  background: #3470ff;
  text-decoration: none;

  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  transition: background-color 0.3s ease;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const CloseBtn = styled.button`
  display: block;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 15;

  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
`;
