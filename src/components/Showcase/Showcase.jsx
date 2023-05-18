import styled from "styled-components";
import PropTypes from "prop-types";

import bgShowcase from "../../assets/bgShowcase.png";
import VideoCard from "../VideoCard/VideCard";
import TitleCategory from "../TitleCategory/TitleCategory";
import TitleVideo from "../TitleVideo/TitleVideo";
import DescriptionVideo from "../DescriptionVideo/DescriptionVideo";
import Carousel from "../Carousel/Carousel";

const ShowcaseStyle = styled.div`
  max-width: 1024px;
  height: 550px;
  background-image: url(${bgShowcase});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover, contain;
  margin: 0 auto;
  padding: 50px 2rem;
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  

  @media screen and (max-width: 992px) {
    height: 475px;
  }
  
`;

const ShowcaseInfoStyle = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Showcase = ({dataFront}) => {
  return (
    <>
      <ShowcaseStyle>
        <ShowcaseInfoStyle>
          <TitleCategory
            texto="Front End"
            backgroundColor="var(--color-primario)"
            fontSize="var(--font-size-titleBig)"
            showcase
          ></TitleCategory>

          <TitleVideo titulo="Challenge React" showcase></TitleVideo>

          <DescriptionVideo descripcion="Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React." showcase></DescriptionVideo>
        </ShowcaseInfoStyle>
        <VideoCard
          width="418.68px"
          height="235px"
          borderColor="yellow"
          bgImagen="https://i.ytimg.com/vi/AG2QssLpQzI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbUU2Mf8CAJ3sB0P3Lf5XVkbyYMQ"
          linkVideo="https://www.youtube.com/watch?v=RwRBaXYJioM&list=RDGMEM2VCIgaiSqOfVzBAjPJm-agVMQpuOyCqocV8&index=3"
          showcase
        ></VideoCard>
      </ShowcaseStyle>
      <Carousel dataFront={dataFront}></Carousel>
    </>
  );
};


Showcase.propTypes = {
  dataFront: PropTypes.object.isRequired,
};

export default Showcase;
