import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
 display: block;
    margin: 100px auto 0 auto;
    background-color: transparent;
    border: none;
    color: #3470FF;

   font-size: 16px;
   font-weight: 500;
   line-height: 1.5;
   text-decoration-line: underline;
   cursor: pointer;

   transition: color 0.3s ease;
   &:hover,
  &:focus {
    color: #0B44CD;
  }
`;