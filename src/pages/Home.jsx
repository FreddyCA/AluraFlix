import styled from "styled-components";
import PropTypes from "prop-types";
import Showcase from "../components/Showcase/Showcase";
import Featured from "../components/Featured/Featured";

const HomeStyle = styled.div``;

const Home = ({ dataFront, data }) => {

  const dataShowcase = Object.values(data)[0]

  return (
    <HomeStyle>
      <Showcase dataFront={dataFront} data={dataShowcase}></Showcase>

      
      {Object.keys(data).slice(1).map((key) => {
        return (
          <Featured key={key} data={data[key]}></Featured>
        );
      })}
    </HomeStyle>
  );
};

Home.propTypes = {
  dataFront: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default Home;
