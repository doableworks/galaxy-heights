"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  countryCodes,
  defaultCountryCode,
  generalEnquiryPurpose,
} from "@/lib/constants/countryCodes";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/schemas/contactForm";
import { submitEnquiryForm } from "@/lib/submissions/submitEnquiry";
import { sanitizePhoneInput } from "@/lib/utils/phone";

function ContactForm() {
  const router = useRouter();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: defaultCountryCode,
      phone: "",
      message: "",
      purpose: generalEnquiryPurpose,
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      await submitEnquiryForm(values);
      router.push("/thank-you");
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit form. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-5 lg:space-y-8"
      >
        <input type="hidden" {...form.register("purpose")} />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Name"
                  {...field}
                  className="h-11 w-full rounded-none border-0 border-b pl-0 text-white shadow-none placeholder:text-white placeholder:text-xl"
                />
              </FormControl>
              <FormMessage className="text-red-300" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  {...field}
                  className="h-11 w-full rounded-none border-0 border-b pl-0 text-white shadow-none placeholder:text-white placeholder:text-xl"
                />
              </FormControl>
              <FormMessage className="text-red-300" />
            </FormItem>
          )}
        />

        <div className="flex w-full gap-3">
          <FormField
            control={form.control}
            name="countryCode"
            render={({ field }) => (
              <FormItem className="shrink-0">
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="h-full w-fit rounded-none border-0 border-b bg-transparent px-0 py-0 text-white  text-lg shadow-none [&_svg]:text-white [&_[data-slot=select-value]]:text-white ">
                      <SelectValue placeholder="Code"/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countryCodes.map((code) => (
                      <SelectItem key={code.value} value={code.value}>
                        {code.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="min-w-0 flex-1">
                <FormControl>
                  <Input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="Phone"
                    {...field}
                    onChange={(event) => {
                      field.onChange(sanitizePhoneInput(event.target.value));
                    }}
                    className="h-11 flex-1 w-full rounded-none border-0 border-b pl-0 text-white shadow-none placeholder:text-white placeholder:text-xl"
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />
        </div>

        {/* <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Message"
                  {...field}
                  className="w-full rounded-none border-0 border-b px-0 text-white shadow-none placeholder:text-white placeholder:text-xl"
                />
              </FormControl>
              <FormMessage className="text-red-300" />
            </FormItem>
          )}
        /> */}

        <Button
          type="submit"
          className="mx-auto flex w-full items-center justify-center gap-2 bg-[var(--gold-colour)] px-6 py-5 text-primary hover:opacity-90 lg:w-[150px]"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
