import styled from "styled-components";

import Card from "../card";
import LinkBar from "../linkBar";
import OptionBar from "../optionBar";
import Row from "../row";
import Spacer from "../spacer";

const Template = styled.div.attrs((props) => ({
  "data-testid": props["data-testid"] || "template"
}))``;

const PageTemplate = (props) => {
  const { children, ...rest } = props;
  return (
    <Template {...rest}>
      <Card>{children}</Card>
      <Spacer />
      <Row>
        <OptionBar />
        <LinkBar />
      </Row>
    </Template>
  );
};

export default PageTemplate;
