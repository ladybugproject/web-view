import React from "react";
import styled from "styled-components";
import { Flexbox, FlexDirectionColumn } from "../BaseComponents";
import mail from "./mail.png";
import password from "./password.png";
import mainLogo from "./ladybug_Main_Logo.png";
import { Link, Redirect } from "react-router-dom";

const WrapLogin = styled(FlexDirectionColumn)`
	width: 100%;
	min-height: 100%;
	position: absolute;
`;

const WrapInput = styled(Flexbox)`
	background-color: white;
	width: 70%;
	height: 50px;
	margin: 10px;
`;

const BlankDiv = styled.div`
	width: 70%;
	height: 50px;
	margin: 10px;
	bacground-color: transparent;
`;

const Img = styled.img`
	width: 10%;
	height: 35px;
	margin-left: 3px;
`;

const Input = styled.input`
	width: 100%;
	height: 40px;
	outline: none;
	margin-left: 10px;
	font-size: 16px;
`;

const LoginBtn = styled.div`
	background-color: rgb(62, 221, 44);
	width: 288px;
	height: 50px;
	margin-bottom: 10px;
	font-size: 20px;
	font-weight: 350;
	text-align: center;
	line-height: 50px;
	box-shadow: 1px 1px 25 grey;
	border-radius: 0.3rem;

	:active {
		background-color: rgb(19, 214, 74);
	}
`;

const Login = () => {
	return (
		<WrapLogin>
			<img src={mainLogo} alt={"main-logo"} width={"50%"} height={"35%"} />
			<WrapInput>
				<Img src={mail} alt={"mail"} />
				<Input />
			</WrapInput>
			<WrapInput>
				<Img src={password} alt={"password"} />
				<Input type={"password"} />
			</WrapInput>
			<Link to={"/home"}>
				<LoginBtn>Log in</LoginBtn>
			</Link>
			<LoginBtn>Sign in</LoginBtn>

			<BlankDiv />
		</WrapLogin>
	);
};

export default Login;
