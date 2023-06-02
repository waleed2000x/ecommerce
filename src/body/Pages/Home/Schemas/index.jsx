import * as Yup from "yup";

export const HomeInputSchema = Yup.object({
  email: Yup.string().email().min(2).max(25),
});
