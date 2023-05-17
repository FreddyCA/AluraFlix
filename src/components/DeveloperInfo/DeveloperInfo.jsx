import styled from "styled-components";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

const DeveloperInfoStyle = styled.div`
  background-color: #0a3871;
  color: #d8dfe8;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  width: 100%;
  padding: 1.5rem;
  gap: 2rem;
`;

const DeveloperInfoName = styled.p`
  font-size: 0.985rem;
  font-weight: 700;
`;

const DeveloperInfoSocialStyle = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 30px;
`;

const DeveloperInfoLinkStyle = styled.a`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const DeveloperInfoSvgStyle = styled.img`
  background-color: #d8dfe8;
  width: 100%;
  border-radius: 7px;
  height: 100%;
  &:hover {
    background-color: white;
  }
`;

const DeveloperInfo = () => {
  return (
    <DeveloperInfoStyle>
      <DeveloperInfoName>
        Developed by Freddy Coaricona | 2023
      </DeveloperInfoName>
      <DeveloperInfoSocialStyle>
        <DeveloperInfoLinkStyle target="_blank" href="https://www.linkedin.com/in/charlesfly/">
          <DeveloperInfoSvgStyle src={linkedin} alt="linkedin" />
        </DeveloperInfoLinkStyle>
        <DeveloperInfoLinkStyle target="_blank" href="https://github.com/FreddyCA">
          <DeveloperInfoSvgStyle src={github} alt="github" />
        </DeveloperInfoLinkStyle>
      </DeveloperInfoSocialStyle>
    </DeveloperInfoStyle>
  );
};

export default DeveloperInfo;
