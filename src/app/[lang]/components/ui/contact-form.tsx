"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Button } from "./button";
import { Textarea } from "./textarea";
import { useToast } from "./use-toast";
import { DictionaryData } from "@/app/types";
import { useState } from "react";
import { LoadingIcon } from "./icons";

interface ContactFormProps {
  dict: DictionaryData;
}

export const ContactForm: React.FC<ContactFormProps> = ({ dict }) => {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);

  const formSchema = z.object({
    email: z
      .string()
      .min(1, { message: `${dict.contact.form.error.emptyField}` })
      .email(`${dict.contact.form.error.email}`),
    message: z
      .string()
      .min(1, { message: `${dict.contact.form.error.emptyField}` }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSending(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.getValues("email"),
          message: form.getValues("message"),
        }),
      });
      console.log(response);
      if (response.ok) {
        toast({
          description: `${dict.contact.toast.success}`,
        });
      } else {
        toast({
          description: `${dict.contact.toast.error}`,
        });
      }
    } catch (error) {
      toast({
        description: `${dict.contact.toast.error}`,
      });
    }
    setIsSending(false);
    form.reset();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dict.contact.form.email.label}</FormLabel>
              <FormControl>
                <Input
                  placeholder={dict.contact.form.email.placeholder}
                  {...field}
                />
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
              <FormLabel>{dict.contact.form.message.label}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={dict.contact.form.message.placeholder}
                  className="h-40 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="outline" className="w-full shadow-sm">
          {isSending ? <LoadingIcon /> : dict.contact.form.button}
        </Button>
      </form>
    </Form>
  );
};
