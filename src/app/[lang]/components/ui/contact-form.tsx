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

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  message: z.string().min(1, { message: "This field has to be filled." }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });
  const { toast } = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
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
          description: "✅ Message sent successfully!",
        });
      } else {
        toast({
          description: "❎ Message could not be sent. Please try again.",
        });
      }
    } catch (error) {
      toast({
        description: "❎ Message could not be sent. Please try again.",
      });
    }

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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
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
              <FormControl>
                <Textarea
                  placeholder="Type your message here..."
                  className="h-40 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="outline" className="shadow-sm">
          Send
        </Button>
      </form>
    </Form>
  );
}
