import styled from "styled-components";
import LineaHorizontal from "../LineaHorizontal/LineaHorizontal";
import Logo from "../Logo/Logo";
import DeveloperInfo from "../DeveloperInfo/DeveloperInfo";

const FooterStyle = styled.div`
  padding: 1rem 0 0;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;
const Footer = () => {
  return (
    <FooterStyle>
      <LineaHorizontal></LineaHorizontal>
      <Logo width="252px" height="60px"></Logo>
      <DeveloperInfo></DeveloperInfo>
    </FooterStyle>
  );
};

export default Footer;
