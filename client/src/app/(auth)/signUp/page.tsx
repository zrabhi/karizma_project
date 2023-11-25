"use client";
import { showSnackBar } from "@/components/snackBar";
import { SignUp, SignUpInit } from "@/interfaces/SignUp";
import { useState } from "react";
import Image from "next/image";
import wbImage from "@/../public/website-images.jpg";
import googleLogo from "@/../public/Google.png";
import Link from "next/link";
import { Button } from "@/components/Button";
import "./style.scss";
export default function SignUp() {
  const [Form, setForm] = useState<SignUp>(SignUpInit);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleNameChange = (e: any) => {
    setForm((prevDate) => ({
      ...Form,
      name: e.target.value,
    }));
  };

  const handleEmailChange = (e: any) => {
    console.log("value is => ", e.target.value);
    setForm((prevDate) => ({
      ...Form,
      email: e.target.value,
    }));
  };

  const handlePasswordChange = (e: any) => {
    console.log("value is => ", e.target.value);
    setForm((prevDate) => ({
      ...Form,
      password: e.target.value,
    }));
  };

  const resetForm = () => {
    setForm(() => ({
      name: "",
      email: "",
      password: "",
    }));
  };

  const nameCheck = () => {
    if (Form.name.indexOf(" ") >= 0) {
      showSnackBar("Name must not conatain spaces", false, 5000);
      return false;
    }
    if (Form.name.length <= 3) {
      showSnackBar("Name must be al least more than 3 characters", false, 5000);
      return false;
    }
    if (Form.name.length > 10) {
      showSnackBar("Name must be 10 characters or less", false, 5000);
      return false;
    }
    return true;
  };
  const passwordCheck = () => {
    if (Form.password.length < 8) {
        showSnackBar("Password must be at least 8 characters", false, 5000);
        return false;
    }
    return false;
};
const  validateEmail = () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Form.email))
    {
        showSnackBar("Your email is anvalid, please type a valid email ", false, 5000);
        return false;
    }
    return true;
}
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setErrorMessage("");
    if (!nameCheck() || !passwordCheck() || !validateEmail()) {
      setError(true);
      return false;
    }
  };
  const handleInvalidName = (e: any) => {};
  const handleInvalidPassword = (e: any) => {};

  return (
    <div className="Form-container">
      <div className="Form">
        <form action="">
          <div className="Forms">
            <h1>Welcome </h1>
            <p>Let's Sign You Up</p>
            <div className="Name">
              <lable className="label" htmlFor="nameInput">
                Name
              </lable>
              <input
                type="text"
                className="input"
                placeholder="Name"
                autoComplete="off"
                onChange={handleNameChange}
              />
            </div>
            <div className="email">
              <lable className="label" htmlFor="emailInput">
                Email
              </lable>
              <input
                type="email"
                className="input"
                placeholder="me@example.com"
                autoComplete="off"
                onChange={handleEmailChange}
              />
            </div>
            <div className="password">
              <lable className="label" htmlFor="passwordInput">
                Password
              </lable>
              <input
                type="password"
                className="input"
                placeholder="Password"
                autoComplete="off"
                defaultValue={""}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="Submit" onClick={handleSubmit}>
              <Button text="Sign Up" OncLick={handleSubmit} />
            </div>
              <h3>If you alrady have an account </h3>
              <Link href ="/signIn"><h4>Sign in here</h4></Link>
            <div className="Google-login">
              <div className="First-line"></div>
              <div className="text">
                <h2>OR</h2>
              </div>
              <div className="Second-line"></div>
            </div>
            <Link href="/">
              <div className="Google-logo">
                <Image
                  src={googleLogo.src}
                  width={64}
                  height={54}
                  alt="Google Icon"
                />
              </div>
            </Link>
          </div>
        </form>
      </div>
      <div className="wb-image">
        <Image src={wbImage.src} width={600} height={900} alt="Website image" />
      </div>
    </div>
  );
}
