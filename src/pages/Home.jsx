import styled from "styled-components";
import GlobalStyle from "../style/reset";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar/NavBar";
import LineaHorizontal from "../components/LineaHorizontal/LineaHorizontal";
import Showcase from "../components/Showcase/Showcase";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";

const HomeStyle = styled.div`
`;

const Home = ({ dataFront }) => {
  return (
    <HomeStyle>
      <GlobalStyle />
      <NavBar />
      <LineaHorizontal />
      <Showcase dataFront={dataFront}></Showcase>
      <Featured data={dataFront}></Featured>
      <Featured data={dataFront}></Featured>
      <Footer></Footer>
    </HomeStyle>
  );
};

Home.propTypes = {
  dataFront: PropTypes.object.isRequired,
};

export default Home
