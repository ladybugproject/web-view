import styled from "styled-components";

export const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FlexDirectionColumn = styled(Flexbox)`
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  margin-left: 10px;
  font-size: 16px;
  border: none;
`;

export const InputImg = styled.img`
  width: 10%;
  height: 35px;
  margin-left: 3px;
  opacity: 0.5;
`;

export const WrapInput = styled(Flexbox)`
  background-color: white;
  width: 288px;
  height: 50px;
  margin: 5px auto;
`;

export const Btn = styled.div`
  background-color: #7cc5ae;
  width: 288px;
  height: 50px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 350;
  text-align: center;
  line-height: 50px;
  box-shadow: 1px 1px 25 grey;
  border-radius: 0.3rem;
  color: white;
  margin: 5px auto;
  :active {
    background-color: #7cc5ae;
  }
`;
