import React from "react";

import Headline from "../../components/headline";
import useLanguage from "../../language";

const Help = () => {
  const { translate } = useLanguage();
  const help = translate("help");

  return <Headline>{help}</Headline>;
};

export default Help;
