import PropTypes from "prop-types";
import React from "react";

import { Label, Value } from "./styled";

const AttributeText = ({ label, value, ...rest }) =>
  value ? (
    <div {...rest}>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </div>
  ) : null;

AttributeText.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export default AttributeText;
