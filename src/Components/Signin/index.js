import React, { useState } from "react";
import styled from "styled-components";
import { Input, InputImg, WrapInput, Btn, Flexbox } from "../BaseComponents";
import { fetchUsingMethod } from "../../Utility";
import ADDRESS from "../../Address";
import mail from "../Login/mail.png";
import password from "../Login/password.png";
import logo from "./logo.png";
import profile from "./profile.png";

const WrapSignin = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
`;

const Wrapper = styled.div`
  width: 150px;
  height: 50px;
  margin: 20px auto;
`;

const WrapFavorite = styled(Flexbox)`
  width: 80%;
  flex-wrap: wrap;
  margin: 10px auto;
`;

const Favorite = styled.span`
  display: inline-block;
  width: 60px;
  height: 30px;
  text-align: center;
  margin: 3px;

  line-height: 30px;
  border-radius: 0.3rem;
  box-shadow: 3px 3px 3px #aaaaaa;
  padding: 3px;

  &.clicked {
    background-color: #7bc5ae;
  }
`;

const FavoriteText = styled(Flexbox)`
  font-size: 20px;
  font-weight: 350;
  width: 280px;
  height: 50px;
  margin: 10px auto;
  border-radius: 0.3rem;
  background-color: #018489;
  color: white;
  padding: 3px;
`;

const SelectAge = styled.select`
  width: 288px;
  height: 50px;
  border: 2px solid green;
  margin: 10px auto;
`;
const Logo = styled.img``;

const Signin = () => {
  const [favorites, setFavorites] = useState(0);

  const clickSigninBtn = async e => {
    e.preventDefault();
    const ID = document.getElementById("id").value;
    const PW = document.getElementById("pw").value;
    const confirmPw = document.getElementById("confirmPw").value;
    const AGE = document.getElementById("age").value;
    const GENDER = document.getElementById("gender").value;

    if (ID === "") return e;
    if (PW === "") return e;
    if (confirmPw === "" || PW !== confirmPw) return e;
    if (AGE === "" || parseInt(AGE) > 100 || parseInt(AGE) < 0) return e;
    if (GENDER === "" || !(GENDER === "남" || GENDER === "여")) return e;
    if (favorites < 3) return e;

    const favors = document.querySelectorAll(".clicked");
    const res = await fetchUsingMethod(`${ADDRESS}/signup`, {
      methodType: "POST",
      data: {
        ID,
        PW,
        AGE,
        GENDER,
        FAVORITE1: favors[0].value,
        FAVORITE2: favors[1].value,
        FAVORITE3: favors[2].value
      }
    });

    if (res.status === 200) {
      window.history.pushState("", "", "/");
      window.location.reload();
    }
  };

  const clickFavorites = e => {
    if (e.target.tagName !== "SPAN") return e;

    if (e.target.classList.contains("clicked")) {
      e.target.classList.remove("clicked");
      setFavorites(favorites - 1);
    } else {
      if (favorites >= 3) return e;
      e.target.classList.add("clicked");
      setFavorites(favorites + 1);
    }
  };
  return (
    <WrapSignin>
      <Wrapper>
        <Logo src={logo} />
      </Wrapper>
      <form>
        <WrapInput>
          <InputImg src={mail} />
          <Input id={"id"} placeholder={"이메일"} />
        </WrapInput>
        <WrapInput>
          <InputImg src={password} />
          <Input id={"pw"} placeholder={"비밀번호"} type={"password"} />
        </WrapInput>
        <WrapInput>
          <InputImg src={password} />
          <Input
            id={"confirmPw"}
            placeholder={"비밀번호 확인"}
            type={"password"}
          />
        </WrapInput>
        <WrapInput>
          <InputImg src={profile} />
          <Input id={"age"} placeholder={"나이"} type={"number"} />
        </WrapInput>
        <WrapInput>
          <InputImg src={profile} />
          <Input id={"gender"} placeholder={"성별 남/여"} />
        </WrapInput>
        <FavoriteText>관심 분야를 3개 선택해주세요</FavoriteText>
        <WrapFavorite onClick={clickFavorites}>
          <Favorite>뮤지컬</Favorite>
          <Favorite>연극</Favorite>
          <Favorite>오페라</Favorite>
          <Favorite>클래식</Favorite>
          <Favorite>국악</Favorite>
          <Favorite>무용</Favorite>
          <Favorite>콘서트</Favorite>
          <Favorite>복합</Favorite>
        </WrapFavorite>
        <Btn onClick={clickSigninBtn}>회원 가입</Btn>
      </form>
    </WrapSignin>
  );
};

export default Signin;

/*
[POST]/signup
ID - 유저ID
PW - 유저PW
AGE - 유저 나이
GENDER - 유저성별(남/여)
FAVORITE1 - 선호장르1
FAVORITE2 - 선호장르2
FAVORITE3 - 선호장르3
뮤지컬 연극 오페라 클래식 국악 무용 복합 콘서트
*/
