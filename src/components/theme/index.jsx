import styled from "styled-components";
import SVG from "react-inlinesvg";

import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import useLanguage from "../../language";

const StyledSVG = styled(SVG)`
  width: ${({ theme }) => theme.sizes.medium};
  height: ${({ theme }) => theme.sizes.medium};
  & path {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;

const ThemeButton = styled.button.attrs((props) => ({
  "data-testid": props["data-testid"] || "theme",
  "aria-label": props["aria-label"] || "label"
}))`
  font-size: ${({ theme }) => theme.sizes.medium};
  background: transparent;
  border-color: transparent;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
`;

const Theme = (props) => {
  const { theme, toggleTheme } = props;
  const src = theme === "dark" ? sun : moon;
  const { translate } = useLanguage();
  const ariaLabel = translate(theme);

  return (
    <ThemeButton onClick={toggleTheme} aria-label={ariaLabel}>
      <StyledSVG src={src} />
    </ThemeButton>
  );
};

export default Theme;
