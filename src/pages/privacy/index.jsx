import React from "react";

import Headline from "../../components/headline";
import useLanguage from "../../language";

const Privacy = () => {
  const { translate } = useLanguage();
  const privacy = translate("privacy");

  return <Headline>{privacy}</Headline>;
};

export default Privacy;
