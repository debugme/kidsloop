import React from "react";

import Headline from "../../components/headline";
import useLanguage from "../../language";

const Terms = () => {
  const { translate } = useLanguage();
  const terms = translate("terms");

  return <Headline>{terms}</Headline>;
};

export default Terms;
