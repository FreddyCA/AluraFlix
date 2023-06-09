import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const VideoCardStyle = styled.div`
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  border-radius: 4px;
  background-color: var(--color-black);
  border: 4px solid ${(props) => props.borderColor};
  background-image: url(${(props) => props.bgImagen});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-sizing: border-box;
  cursor: pointer;

  @media screen and (max-width: 992px) {
    ${(props) =>
      props.showcase &&
      css`
        min-width: calc(${(props) => props.width} - 70px);
        height: calc(${(props) => props.height} - 39px);
      `}
  }

  @media screen and (max-width: 768px) {
    ${(props) =>
      props.showcase &&
      css`
        min-width: calc(${(props) => props.width} - 120px);
        height: calc(${(props) => props.height} - 67px);
      `}
  }
`;

const VideoCard = ({
  width,
  height,
  borderColor,
  bgImagen,
  linkVideo,
  showcase,
}) => {
  // console.log(linkVideo)
  const handleVideoClick = () => {
    window.open(linkVideo, "_blanck");
  };

  return (
    <VideoCardStyle
      onClick={handleVideoClick}
      width={width}
      height={height}
      borderColor={borderColor}
      bgImagen={bgImagen}
      showcase={showcase}
    ></VideoCardStyle>
  );
};

VideoCard.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  bgImagen: PropTypes.string.isRequired,
  linkVideo: PropTypes.string.isRequired,
  showcase: PropTypes.bool,
};

export default VideoCard;
