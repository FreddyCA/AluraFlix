import styled from "styled-components";
import PropTypes from "prop-types";
import Showcase from "../components/Showcase/Showcase";
import Featured from "../components/Featured/Featured";

const HomeStyle = styled.div`
`;

const Home = ({ dataFront, data }) => {

  return (
    <HomeStyle>
      <Showcase dataFront={dataFront}></Showcase>
      {
         Object.entries(data).map(([key]) => (
          <Featured key={key} data={data[key]}></Featured>
         ))
      }
      {/* <Featured data={dataFront} ></Featured>
      <Featured data={dataFront} ></Featured> */}
    </HomeStyle>
  );
};

Home.propTypes = {
  dataFront: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default Home
