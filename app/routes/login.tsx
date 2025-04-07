import {
  FlatButton,
  FormWraper,
  Input,
  InputsWrapper,
  InputWrapper,
  Label,
  MainWraper,
  MobileLogo,
  PhoneImage,
  PhoneWraper,
  RegisterWraper,
  RightIntroWraper,
  Sup,
  TitleLarge,
  Image,
  ErrorText,
} from "./components/styles-components";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router";

type LoginForm = {
  email: string;
  password: string;
};

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    watch,
    trigger,
    formState: { errors, isValid },
  } = useForm<LoginForm>();

  useEffect(() => {
    console.log(watch().password);
  }, [watch().password]);

  useEffect(() => {
    console.log(errors);
  }, [errors.email]);

  const onSubmit = (data: LoginForm) => {
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <MainWraper>
      <RightIntroWraper>
        <Image src="assets/logo.png" />
        <PhoneWraper>
          <PhoneImage src="assets/app-image.png" />
        </PhoneWraper>
      </RightIntroWraper>
      <RegisterWraper>
        <MobileLogo src="assets/logo.png" />
        <FormWraper
          onSubmit={handleSubmit((data) => {
            console.log(data);
            onSubmit(data);
          })}
        >
          <TitleLarge>Sign In</TitleLarge>

          <InputsWrapper>
            <InputWrapper>
              <Label>
                Email Address <Sup>*</Sup>
              </Label>
              <Input
                type="email"
                className={`error-border ${
                  errors.email?.message ? "error-border" : ""
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: new RegExp(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/),
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter email address"
              />
              {watch().email && errors.email?.message && (
                <ErrorText className="text-red-600 text-sm">
                  {errors.email?.message}
                </ErrorText>
              )}
            </InputWrapper>

            <InputWrapper>
              <Label>
                Password <Sup>*</Sup>
              </Label>
              <Input
                type="password"
                className={`${errors.password?.message ? "error-border" : ""}`}
                required
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum password should be 6 character in length",
                  },
                  maxLength: {
                    value: 16,
                    message:
                      "Maximumn password should be 16 character in length",
                  },
                })}
                placeholder="Enter password"
              />
              {watch().password && errors.password?.message && (
                <ErrorText className="text-red-600 text-sm">
                  {errors.password?.message}
                </ErrorText>
              )}
            </InputWrapper>
          </InputsWrapper>

          <FlatButton type="submit">Sign In</FlatButton>
        </FormWraper>
      </RegisterWraper>
    </MainWraper>
  );
}
