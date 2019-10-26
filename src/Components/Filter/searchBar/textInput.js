import React from "react";
import styled from "styled-components";

const WrapInput = styled.div`
  width: 70%;
  height: 10%;
  padding: 5px 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
`;

const TextInput = () => {
  return (
    <WrapInput>
      <Input></Input>
    </WrapInput>
  );
};

export default TextInput;
