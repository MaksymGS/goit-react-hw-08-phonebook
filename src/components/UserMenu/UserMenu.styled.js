import styled from 'styled-components';

export const WrapperMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
`;
export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #16437e;

  &:hover {
    color: #62167e;
  }
`;
