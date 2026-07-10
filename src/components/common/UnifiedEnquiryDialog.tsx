"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
} from "@/lib/constants/countryCodes";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/schemas/contactForm";
import { submitEnquiryForm } from "@/lib/submissions/submitEnquiry";
import { sanitizePhoneInput } from "@/lib/utils/phone";

interface UnifiedEnquiryDialogProps {
  children: React.ReactNode;
  title: string;
  purpose: string;
}

function UnifiedEnquiryDialog({
  children,
  title,
  purpose,
}: UnifiedEnquiryDialogProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: defaultCountryCode,
      phone: "",
      message: "",
      purpose,
    },
  });

  React.useEffect(() => {
    form.setValue("purpose", purpose);
  }, [form, purpose]);

  const onSubmit = async (values: ContactFormValues) => {
    try {
      await submitEnquiryForm(values);
      setIsOpen(false);
      router.push("/thank-you");
    } catch (error) {
      console.error("Enquiry submission error:", error);
      toast.error("Failed to submit enquiry. Please try again.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[calc(100vw-2rem)] max-w-2xl border-none bg-[#FFFCF3] p-6 sm:p-8">
        <DialogHeader className="pb-2">
          <DialogTitle className="text-center text-xl font-semibold text-[var(--dark-blue)] sm:text-2xl">
            {title}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <input type="hidden" {...form.register("purpose")} />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--dark-blue)]">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                        className="h-11 border-[var(--gold-colour)] bg-white"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--dark-blue)]">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                        className="h-11 border-[var(--gold-colour)] bg-white"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-[140px_minmax(0,1fr)]">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--dark-blue)]">
                      Country
                    </FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="h-11 w-full border-[var(--gold-colour)] bg-white">
                          <SelectValue placeholder="Code" />
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
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--dark-blue)]">Phone</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="Enter 10-digit phone number"
                        {...field}
                        onChange={(event) => {
                          field.onChange(sanitizePhoneInput(event.target.value));
                        }}
                        className="h-11 border-[var(--gold-colour)] bg-white"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[var(--dark-blue)]">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={4}
                      placeholder="Tell us what you're looking for"
                      {...field}
                      className="resize-none border-[var(--gold-colour)] bg-white"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <div className="flex justify-center pt-2">
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="min-w-40 rounded-none bg-[var(--dark-blue)] px-8 text-[var(--gold-colour)] hover:opacity-90"
              >
                {form.formState.isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default UnifiedEnquiryDialog;
