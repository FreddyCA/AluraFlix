import styled from "styled-components";
import PropTypes from "prop-types";

import VideoCard from "../VideoCard/VideCard";

const CarouselContainerStyle = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  height: auto;
  overflow: hidden;
`;

const CarouselStyle = styled.div`
  display: flex;
  animation: scroll 20s linear infinite;
  gap: 20px;
  width: calc(295px * ${(props) => props.cantidad});

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(
        calc(
          -295px * ${(props) => props.cantidad} - 20px * ${(props) => props.cantidad}
        )
      );
    }
  }
`;

const Carousel = ({ dataFront }) => {
  const cantidadObjects = Object.keys(dataFront).length;

  const videoCards = Object.keys(dataFront).map((key) => {
    const dataVideo = dataFront[key];
    return (
      <VideoCard
        key={dataVideo.id}
        width="295px"
        height="168px"
        borderColor="blue"
        bgImagen={dataVideo.linkImagen}
        linkVideo={dataVideo.linkVideo}
      ></VideoCard>
    );
  });

  return (
    <CarouselContainerStyle>
      <CarouselStyle cantidad={cantidadObjects}>
      {videoCards}
      {videoCards}
      </CarouselStyle>
    </CarouselContainerStyle>
  );
};


Carousel.propTypes = {
  dataFront: PropTypes.object.isRequired,
};

export default Carousel;
