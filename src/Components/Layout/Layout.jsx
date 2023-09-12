import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Footer, PageContainer } from './Layout.styles';
import Navigation from '../Navigation/Navigations';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>

      <PageContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </PageContainer>

      <Footer>
        <p>
          Created by
          <a href="https://github.com/DimiVaksman"> &copy; VAKSMAN </a>
        </p>
      </Footer>
    </Container>
  );
};

export default Layout;