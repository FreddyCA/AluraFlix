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
  width: calc(295px * ${(props) => props.cantidad} );
  background-color: yellow;

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

// ESTA TOMANDO COMO PARAMETRO AL ULTIMO CARRUSEL, 
// SEPARAR CADA CARRUSEL A OTRO DIV

const Carousel = ({ data }) => {
  const dataVideos = data.videos
  const cantidadObjects = Object.keys(dataVideos).length;
  console.log(cantidadObjects)

  const videoCards = Object.keys(dataVideos).map((key) => {
    const dataVideo = dataVideos[key];
    return (
      <VideoCard
        key={dataVideo.id}
        width="295px"
        height="168px"
        borderColor={data.color}
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
  data: PropTypes.object.isRequired,
};

export default Carousel;
