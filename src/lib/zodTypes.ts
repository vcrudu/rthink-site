import { type } from "os";
import * as zod from "zod";

export const contactUsSchema = zod.object({
  name: zod.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: zod.string().email({
    message: "Invalid email address.",
  }),
  subject: zod.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: zod.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export type TContactUsSchema = zod.infer<typeof contactUsSchema>;