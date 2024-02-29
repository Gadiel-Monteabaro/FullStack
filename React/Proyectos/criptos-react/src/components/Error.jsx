import React from "react";
import styled from "@emotion/styled";

const Texto = styled.div`
  text-align: center;
  padding: 12px;
  font-size: 18px;
  background-color: #ffccd5;
  border-radius: 10px;
  font-weight: 700;
  color: #c9184a;
`;

const Error = ({ children, error }) => {
  return <Texto className={error && "active"}>{children}</Texto>;
};

export default Error;
