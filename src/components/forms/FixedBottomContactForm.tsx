"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import EnquiryDialog from "@/components/common/EnquiryDialog";
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
import {
  countryCodes,
  defaultCountryCode,
  generalEnquiryPurpose,
} from "@/lib/constants/countryCodes";
import { salesPhoneHref } from "@/lib/constants/contact";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/schemas/contactForm";
import { submitEnquiryForm } from "@/lib/submissions/submitEnquiry";
import { sanitizePhoneInput } from "@/lib/utils/phone";

interface FixedBottomContactFormProps {
  visible: boolean;
}

function FixedBottomContactForm({ visible }: FixedBottomContactFormProps) {
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
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-[var(--gold-colour)] bg-[var(--dark-blue)] lg:hidden">
        <Link
          href={salesPhoneHref}
          className="flex h-14 flex-1 items-center justify-center text-sm font-semibold text-white"
        >
          Call Now
        </Link>
        <div className="my-3 w-px bg-[var(--gold-colour)]/70" />
        <EnquiryDialog
          fromWhere={generalEnquiryPurpose}
          title="Enquire Now"
        >
          <button
            type="button"
            className="flex h-14 flex-1 items-center justify-center bg-transparent text-sm font-semibold text-white"
          >
            Enquire Now
          </button>
        </EnquiryDialog>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 z-50 hidden transition-transform duration-300 lg:block ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="border-t-2 border-[var(--gold-colour)] bg-[var(--dark-blue)] px-4 py-4 shadow-2xl lg:px-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto flex max-w-7xl flex-wrap items-start gap-4"
          >
            <input type="hidden" {...form.register("purpose")} />
            <input type="hidden" {...form.register("message")} />
            <h2 className="pt-2 text-xl text-white">Enquire Now</h2>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="min-w-[180px] flex-1">
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                      className="h-11 rounded-none border border-[var(--gold-colour)] bg-white px-4 text-[var(--dark-blue)] placeholder:text-[var(--dark-blue)]/70"
                    />
                  </FormControl>
                  <FormMessage className="text-[var(--gold-colour)]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="min-w-[180px] flex-1">
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      {...field}
                      className="h-11 rounded-none border border-[var(--gold-colour)] bg-white px-4 text-[var(--dark-blue)] placeholder:text-[var(--dark-blue)]/70"
                    />
                  </FormControl>
                  <FormMessage className="text-[var(--gold-colour)]" />
                </FormItem>
              )}
            />

            <div className="flex w-fit flex-1 gap-2">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem className="w-fit">
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="h-11 w-full rounded-none border border-[var(--gold-colour)] bg-white px-4 text-[var(--dark-blue)]">
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
                    <FormMessage className="text-[var(--gold-colour)]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex-1">
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
                        className="h-11 rounded-none border border-[var(--gold-colour)] bg-white px-4 text-[var(--dark-blue)] placeholder:text-[var(--dark-blue)]/70"
                      />
                    </FormControl>
                    <FormMessage className="text-[var(--gold-colour)]" />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="h-11 rounded-none bg-[var(--gold-colour)] px-8 text-[var(--dark-blue)] hover:opacity-90"
            >
              {form.formState.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
      </div>
    </>
  );
}

export default FixedBottomContactForm;
