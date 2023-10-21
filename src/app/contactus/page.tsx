"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/lib/verifyCaptcha";
import { useRef, useState } from "react";
import { TContactUsSchema, contactUsSchema } from "@/lib/zodTypes";
import { sendMessage } from "@/lib/sendMessage";

export default function ContactUs() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);
  const form = useForm({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: TContactUsSchema) {
    sendMessage(values);
  }

  async function handleCaptchaSubmission(token: string | null) {
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }

  return (
    <div className="flex w-full justify-center mt-28">
      {!form.formState.isSubmitSuccessful && (
        <div className="w-2/6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      placeholder="Type your message here."
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                ref={recaptchaRef}
                onChange={handleCaptchaSubmission}
              />
              <Button type="submit" disabled={!isVerified}>
                Send
              </Button>
            </form>
          </Form>
        </div>
      )}
      {form.formState.isSubmitSuccessful && (
        <div className="text-xl h-[60vh] mt-14 ml-10 mr-10">
          <p>
            Thank you very much for considering us. We will be in touch shortly!
          </p>
        </div>
      )}
    </div>
  );
}
