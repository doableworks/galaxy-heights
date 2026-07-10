export function sanitizePhoneInput(value: string) {
  return value.replace(/\D/g, "").slice(0, 10);
}
