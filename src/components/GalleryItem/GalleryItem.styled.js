import styled from 'styled-components'
export const CardCar = styled.div`
 width: 274px;
  height: 426px;
  position: relative;`

export const Card = styled.div`
 width: 274px;
  height: 278px;
  overflow: hidden;
  position: relative;`

export const ImgCar = styled.img`
width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 14px;`

export const Btn = styled.button`
 position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;`

export const InfoCar = styled.div`
 width: 274px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 14px 0 8px 0; `

export const CardTitle = styled.h3`
 margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export const Accent = styled.span`
 color: #3470FF;`

 export const TitlePrice = styled.p`
 margin: 0;
  font-weight: 500;`

  export const AddInfo = styled.div`
    color: rgba(18, 20, 23, 0.50);
  display: flex;
  flex-wrap: wrap;
  width: 270px;
  max-height: 40px;
  margin-bottom: 28px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;`


export const CardBtn = styled.button`
 width: 274px;
  padding: 12px 99px;
  color: white;
  background-color: #3470ff;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  transition: background-color 0.3s ease;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }`


export const AdditionalInfoList = styled.ul`
   display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 10px;
  height: 40px;
  gap: 4px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AdditionalInfoListEllipsis = styled(AdditionalInfoList)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;