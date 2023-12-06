import { useState } from "react";
import { useDispatch } from "react-redux";
import { signin, signup } from "../../../redux/auth/operations";

import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import sprite from "../../images/symbol-defs.svg";

import {
  StyledInputAuth,
  StyledFormAuth,
  StyledBtnAuthAccent,
  StyledWrapInputAuth,
  StyledLabelAuth,
  StyledErrorAuth,
  StyledWrapAuthBtn,
  AuthWrapComponent,
  WrapperForm,
  AuthFormPasswordIcon,
  StyledEyeIcon,
  StyledEyeIconVis,
  LinkItem,
  Title,
  TitleText,
} from "../Login/Login.styled";
import { useNavigate } from "react-router-dom";

let schema = yup.object({
  name: yup
    .string()
    .required("Please enter your name")
    .min(2, "Min length 2 symbols")
    .max(32, "Max length 32 symbols")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+[\]{}|;':",.<>?`~\-=_]+$/,
      "Use valid characters"
    ),
  password: yup
    .string()
    .required("Please enter a password")
    .min(7, "Min length 7 symbols")
    .max(7, "Max length 7 symbols")
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      "6 English letters and 1 number"
    )
    .test(
      "no-spaces",
      "Password cannot contain spaces",
      (value) => !/\s/.test(value)
    ),

  email: yup
    .string()
    .required("Please enter an email")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Enter a valid email address"),
});
const initialValues = {
  name: "",
  email: "",
  password: "",
  // showPassword: false,
};

function Registration() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(signup(values))
      .unwrap()
      .then(() => dispatch(signin({ email, password })))
      .then(() => navigate("/"))
      .then(() => resetForm());
  };

  return (
    <>
      <WrapperForm>
        <AuthWrapComponent>
          <Title>Register</Title>
          <TitleText>
            To start using our services, please fill out the registration form
            below. All fields are mandatory:
          </TitleText>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={onSubmit}
          >
            <StyledFormAuth>
              <StyledWrapInputAuth>
                <StyledInputAuth type="text" name="name" placeholder="Name" />
                <StyledLabelAuth></StyledLabelAuth>
                <ErrorMessage name="name">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </StyledWrapInputAuth>

              <StyledWrapInputAuth>
                <StyledInputAuth
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <StyledLabelAuth></StyledLabelAuth>
                <ErrorMessage name="email">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </StyledWrapInputAuth>

              <StyledWrapInputAuth>
                <StyledInputAuth
                  className="no-bottom-padding"
                  name="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                />

                <StyledLabelAuth></StyledLabelAuth>

                <ErrorMessage name="password">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
                <AuthFormPasswordIcon onClick={handleTogglePassword}>
                  {showPassword ? (
                    <StyledEyeIcon>
                      <use href={sprite + "#icon-eye"}></use>
                    </StyledEyeIcon>
                  ) : (
                    <StyledEyeIconVis>
                      <use href={sprite + "#icon-eye-off"}></use>
                    </StyledEyeIconVis>
                  )}
                </AuthFormPasswordIcon>
              </StyledWrapInputAuth>
              <StyledWrapAuthBtn>
                <StyledBtnAuthAccent type="submit" disabled={isLoading}>
                  Register Now
                </StyledBtnAuthAccent>
              </StyledWrapAuthBtn>
              <LinkItem to="/login">Login</LinkItem>
            </StyledFormAuth>
          </Formik>
        </AuthWrapComponent>
      </WrapperForm>
    </>
  );
}

export default Registration;
