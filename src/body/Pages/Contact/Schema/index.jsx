import * as Yup from "yup";

export const ContactSchema = Yup.object({
  fullname: Yup.string().min(2).required("*reqiured"),
  email: Yup.string().email().min(4).max(25).required("*required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*[!@#$%^&*])/, "Password must include special characters")
    .required("*reqiured"),
  message: Yup.string().min(20).max(150).required("*required"),
});
