import type { ContactFormValues } from "@/lib/schemas/contactForm";

export const enquirySubmissionUrl = process.env.NEXT_PUBLIC_APPSCRIPT_URL || "https://script.google.com/macros/s/AKfycbw1w0gBiwOecb6z_q8Botip07ewrbck7b_rvCM6H-XFtXvHIAE1JihClA3Fu9Xle5BrgA/exec";

export async function submitEnquiryForm(values: ContactFormValues) {
  const formData = new FormData();

  formData.append("Name", values.name);
  formData.append("Email", values.email);
formData.append(
  "Phone",`${values.countryCode}${values.phone}`
);
  formData.append("Purpose", values.purpose);

  if (values.message?.trim()) {
    formData.append("Message", values.message.trim());
  }

  const response = await fetch(enquirySubmissionUrl, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to submit enquiry");
  }
}
