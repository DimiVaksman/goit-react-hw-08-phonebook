import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 30px;
  max-width: 850px;
  min-height: calc(100vh - 70px);
  box-shadow: 0 0 10px 2px #787878bf;
  margin-left: 100px;
  background-color: #7272ff;
`;

export const Header = styled.header`
  padding-bottom: 10px;
  margin: 0 auto;
  border-bottom: 1px solid #72dcff;
`;

export const PageContainer = styled.div`
  max-width: 850px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  min-height: 85vh;

  p.TextAuth {
    font-size: 20px;
    padding-top: 15px;
  }

  a {
    color: #72dcff;
    &:hover,
    &:focus {
      color: #fff;
      text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
        rgba(0, 0, 0, 0.5) 1px 1px 1px;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-top: 1px solid ;
  padding: 10px;

  a {
    color: #fff;
    text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
      rgba(0, 0, 0, 0.5) 1px 1px 1px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:hover,
    &:focus {
      color: #72dcff;
    }
  }
`;