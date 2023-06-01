import styled, { css } from "styled-components";

import PropTypes from "prop-types";

import VideoCard from "../VideoCard/VideCard";

const CarouselContainerStyle = styled.div`
  max-width: 1024px;
  height: auto;
  overflow: hidden;
  margin: 0 auto;

  ${props => props.body && css`
    padding: 0 2rem;
    margin: 0;
  `}
`;

const CarouselStyle = styled.div`
  display: flex;
  gap: 20px;

  ${(props) =>
    props.cantidad > 3 &&
    css`
      width: calc(295px * ${(props) => props.cantidad});
      animation: scroll-${(props) => props.cantidad} ${(props) =>
          `calc(2.5s * ${props.cantidad})`} linear infinite;
    `}

  @keyframes scroll-${(props) => props.cantidad} {
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

const Carousel = ({ data, body }) => {
  const dataVideos = data.videos;
  const cantidadObjects = Object.keys(dataVideos).length;
  console.log(cantidadObjects);

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
    <CarouselContainerStyle body={body}>
      <CarouselStyle cantidad={cantidadObjects}>
        {videoCards}
        {cantidadObjects > 3 && videoCards}
      </CarouselStyle>
    </CarouselContainerStyle>
  );
};

Carousel.propTypes = {
  data: PropTypes.object.isRequired,
  body: PropTypes.bool
};

export default Carousel;
