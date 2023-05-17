import styled from "styled-components";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

const NavBarStyle = styled.div`
  max-width: 1024px;
  height: 94px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin: 0 auto;
`;

const NavBar = () => {
  return (
    <NavBarStyle>
      <Logo width="168px" height="40px"></Logo>
      <Button
        backgroundColor="var(--color-black)"
        color="var(--color-white)"
        colorBorde="var(--color-grayClaro)"
        fontSize="1.312rem"
        texto="Nuevo Video"
        padding="14px 28px"
      ></Button>
    </NavBarStyle>
  );
};

export default NavBar;
