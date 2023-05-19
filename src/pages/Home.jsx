import styled from "styled-components";
import PropTypes from "prop-types";
import Showcase from "../components/Showcase/Showcase";
import Featured from "../components/Featured/Featured";

const HomeStyle = styled.div`
`;

const Home = ({ dataFront }) => {
  return (
    <HomeStyle>
      <Showcase dataFront={dataFront}></Showcase>
      <Featured data={dataFront}></Featured>
      <Featured data={dataFront}></Featured>
    </HomeStyle>
  );
};

Home.propTypes = {
  dataFront: PropTypes.object.isRequired,
};

export default Home
