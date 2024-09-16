import styled from 'styled-components';
import Head from 'next/head';

const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>PlayFight - Unleash Creativity</title>
      </Head>
      <Header>
        <Logo>PlayFight</Logo>
        <Nav>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#services">Services</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </Nav>
      </Header>

      <HeroSection>
        <HeroText>
          <h1>Welcome to PlayFight</h1>
          <p>Unleash Your Creativity</p>
          <Button>Learn More</Button>
        </HeroText>
      </HeroSection>

      <ContentSection>
        <Content>
          <h2>Our Services</h2>
          <p>We provide the best fight choreography, production, and more...</p>
        </Content>
      </ContentSection>

      <Footer>
        <p>© 2024 PlayFight. All Rights Reserved.</p>
      </Footer>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #000;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  &:hover {
    color: #ff6600;
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  background-image: url('/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const HeroText = styled.div`
  h1 {
    font-size: 56px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }

  p {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 40px;
  }
`;

const Button = styled.button`
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 5px;
  font-weight: 700;

  &:hover {
    background-color: #e65c00;
  }
`;

const ContentSection = styled.section`
  padding: 60px 20px;
  background-color: #1a1a1a;
  color: #fff;
  text-align: center;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #ff6600;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
  }
`;

const Footer = styled.footer`
  background-color: #000;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 14px;
`;

