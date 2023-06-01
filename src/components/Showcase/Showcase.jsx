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
  
`;

const ShowcaseInfoStyle = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Showcase = ({ data}) => {
  const videoShowcase = Object.values(data.videos)[0]

  const dataNew= {...data}
  const dataNewKeys = Object.keys(dataNew.videos)
  console.log(dataNewKeys)
  const newObjVideos = dataNewKeys.slice(1).reduce((obj, key) => {
    obj[key] = dataNew.videos[key]
    return obj
  }, {})
  dataNew.videos = newObjVideos


  return (
    <>
      <ShowcaseStyle>
        <ShowcaseInfoStyle>
          <TitleCategory
            texto={data.label}
            backgroundColor={data.color}
            fontSize="var(--font-size-titleBig)"
            showcase
          ></TitleCategory>

          <TitleVideo titulo={videoShowcase.titulo} showcase></TitleVideo>

          <DescriptionVideo descripcion={videoShowcase.descripcion} showcase></DescriptionVideo>
        </ShowcaseInfoStyle>
        <VideoCard
          width="418.68px"
          height="235px"
          borderColor={data.color}
          bgImagen={videoShowcase.linkImagen}
          linkVideo={videoShowcase.linkVideo}
          showcase
        ></VideoCard>
      </ShowcaseStyle>
      <Carousel data={dataNew}></Carousel>
    </>
  );
};


Showcase.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Showcase;
