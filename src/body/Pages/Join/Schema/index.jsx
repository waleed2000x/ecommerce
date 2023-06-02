import * as Yup from "yup";

export const JoinLoginSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .min(2)
    .required("Fill out this field"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*[!@#$%^&*])/, "Password must include special characters")
    .required("Fill out this field"),
});

export const JoinSignupSchema = Yup.object({
  fname: Yup.string().min(2).required("First name is required"),
  lname: Yup.string().min(2).required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(/^(?=.*[!@#$%^&*])/, "Password must include special characters")
    .min(8, "Password must be at least 8 characters"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  address: Yup.string().required("Address is required"),
});
