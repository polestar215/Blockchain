import { Container, MainContainer } from "./Layout.styles";
import { Footer } from "@/components";

function Layout({ noFooter = false, children }) {
  return (
    <Container id="wrapper">
      <MainContainer>{children}</MainContainer>
      {noFooter ? <></> : <Footer />}
    </Container>
  );
}

export default Layout;
