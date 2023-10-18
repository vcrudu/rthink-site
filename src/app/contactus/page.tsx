"use client";

import principles from "@/app/images/principles.jpg";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useForm } from "react-hook-form";

const formSchema = zod.object({
  name: zod.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: zod.string().email( {
    message: "Invalid email address.",
  }),
  subject: zod.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: zod.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactUs() {

}
