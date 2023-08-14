import styled, { keyframes } from 'styled-components';

export const ContactsContainer = styled.div`
  text-align: center;
`;

export const Items = styled.li`
  list-style: none;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export const Text = styled.p`
  margin-right: 15px;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #333;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-bottom: 20px;
  margin-left: 70px;

  animation: ${spin} 1s ease-in-out infinite;
`;
export const DeleteButton = styled.button`
border-radius: 50px;
background-color: white;
border-left: 10px solid red;
    cursor: pointer;
&:hover {
  background-color: red;
  color: red;
}
  `