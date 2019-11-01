import React from "react";
import styled from "styled-components";
import {
  FlexDirectionColumn,
  Input,
  InputImg,
  WrapInput,
  Btn
} from "../BaseComponents";
import mail from "./mail.png";
import password from "./password.png";
import mainLogo from "./ladybug_Main_Logo.png";
import { Link } from "react-router-dom";
import { fetchUsingMethod } from "../../Utility";
import Address from "../../Address";

const WrapLogin = styled(FlexDirectionColumn)`
  width: 100%;
  min-height: 100%;
  position: absolute;
`;

const BlankDiv = styled.div`
  width: 70%;
  height: 50px;
  margin: 10px;
  bacground-color: transparent;
`;

const Login = () => {
  const clickLoginBtn = async e => {
    const id = document.getElementById("email").value;
    const pw = document.getElementById("pw").value;

    if (id === "") {
      return e;
    }

    if (pw === "") {
      return e;
    }

    const res = await fetchUsingMethod(Address + "/login", {
      methodType: "POST",
      data: { id, pw }
    });

    if (res.status === 200) {
      window.history.pushState("", "", "/home");
      window.location.reload();
    }
  };

  const pressEnter = async e => {
    const loginBtn = document.getElementById("login-btn");
    if (e.key === "Enter") {
      loginBtn.click();
    }
  };
  return (
    <WrapLogin>
      <img src={mainLogo} alt={"main-logo"} width={"50%"} height={"35%"} />
      <WrapInput>
        <InputImg src={mail} alt={"mail"} />
        <Input id={"email"} />
      </WrapInput>
      <WrapInput>
        <InputImg src={password} alt={"password"} />
        <Input id={"pw"} type={"password"} onKeyPress={pressEnter} />
      </WrapInput>

      <Link to={"home"}>
        <Btn id={"login-btn"}>
          {" "}
          {/*onClick={clickLoginBtn}>*/}
          로그인
        </Btn>
      </Link>

      <Link to={"/signin"}>
        <Btn>회원 가입</Btn>
      </Link>
      <BlankDiv />
    </WrapLogin>
  );
};

export default Login;
