import styled from 'styled-components';

export const SearchFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 859px;
  gap: 18px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const LabelForm = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;
export const BrandSelect = styled.select`
  width: 224px;
  height: 48px;
  font-size: 18px;
  line-height: 20px;
  padding: 14px 18px;
  border: none;
  border-color: transparent;
  border-radius: 14px;
  background-color: #f7f7fb;

  &:hover,
  &:focus {
    border: none;
    border-color: transparent;
  }

  &::placeholder {
    background: #374151;
    cursor: pointer;
    font-size: 18px;
    line-height: 20px;
    border: none;
    border-radius: 14px;
    padding: 6px 8px;
    font-weight: 500;
  }
`;

export const Select = styled.select`
  width: 125px;
  height: 48px;
  font-size: 18px;
  line-height: 20px;
  padding: 14px 18px;
  border: none;
  border-color: transparent;
  border-radius: 14px;
  background-color: #f7f7fb;

  &:hover,
  &:focus {
    border: none;
    border-color: transparent;
  }
`;

export const LebelWrap = styled.div`
display: flex;
    flex-direction: column;`

    export const InputWrap= styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;`

export const InputLeft = styled.input`
  padding-left: 24px;
  width: 120px;
  height: 48px;
  border: none;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.20);
  background-color: #F7F7FB;

  &::placeholder {
    color: #000;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
`;

export const InputRight = styled.input`
  padding-left: 24px;
  width: 160px;
  height: 48px;
  border: none;
  border-radius: 0px 14px 14px 0px;
  background-color: #F7F7FB;
  color: #121417;

  &::placeholder {
    color: #000;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
`;

export const BtnSearch = styled.button`
 width: 136px;
  height: 48px;
  padding: 14px 44px;
  border: none;
  border-radius: 12px;
  background-color: #3470FF;
  color: #fff;
  cursor: pointer;
  margin-top: 19px;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #0B44CD;
  }
`;

export const ResetButton = styled.button`
  width: 136px;
  height: 48px;
  padding: 4px 30px;
  border: none;
  border-radius: 12px;
  background-color: #3470FF;
  color: #fff;
  cursor: pointer;
  margin-top: 19px;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #0B44CD;
  }
`;