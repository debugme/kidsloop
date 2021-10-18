import { Fragment } from "react";
import Input from "../input";
import Label from "../label";
import useLanguage from "../../language";

const Email = (props) => {
  const { value, error, onChange, id = "email", ...rest } = props;
  const { translate } = useLanguage();
  const placeholder = translate("emailOrPhone");

  return (
    <Fragment>
      <Input
        placeholder={placeholder}
        type="email"
        value={value}
        error={error}
        onChange={onChange}
        id={id}
        data-testid="email-input"
        {...rest}
      />
      <Label htmlFor="email" error={error} data-testid="email-label">
        {error}
      </Label>
    </Fragment>
  );
};

export default Email;
