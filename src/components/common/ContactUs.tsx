import Image from "next/image";
import React from "react";

const lineBreakRegex = /<br\s*\/?>/gi;

const contactItems = [
  {
    icon: "/icons/outlinePhone.svg",
    title: "Phone",
    value: "+91 8655 6545 65",
  },
  {
    icon: "/icons/mail.svg",
    title: "Mail",
    value: "inquiry@humdevelopers.com",
  },
  {
    icon: "/icons/map.svg",
    title: "Site Office",
    value:
      " HUM Galaxy Heights, Shri Hanuman Mandir Road, Charkop Sector 1,<br/> Kandivali West, Mumbai - 400067"
  },
];

function getContactValueLines(value: string) {
  return value
    .split(lineBreakRegex)
    .map((part) => part.trim())
    .filter(Boolean);
}

function renderContactValue(parts: string[]) {
  if (parts.length <= 1) {
    return parts[0] ?? "";
  }

  return parts.map((part, index) => (
    <React.Fragment key={`${part}-${index}`}>
      {index > 0 ? <br /> : null}
      {part}
    </React.Fragment>
  ));
}

function ContactUs() {
  return (
    <section className="w-full px-6 pb-16 lg:px-16 lg:pb-24" id="contact-us">
      <div className="flex flex-col items-center justify-center gap-4 lg:items-start">
        <h2 className="text-center text-3xl font-bold text-black lg:text-left lg:text-6xl">
          Contact Us
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
        <div className="order-2 flex flex-col gap-8 lg:gap-16 lg:order-1 justify-center h-full">
          {contactItems.map((item) => {
            const valueParts = getContactValueLines(item.value);
            const hasLineBreak = valueParts.length > 1;

            return (
              <div
                key={item.title}
                className={`flex gap-5 ${hasLineBreak ? "items-start" : "items-center"}`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none bg-[var(--gold-colour)]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={28}
                    height={28}
                    className="h-7 w-7"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-[var(--dark-blue)]">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-primary">
                    {renderContactValue(valueParts)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="order-1 overflow-hidden lg:order-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.9153765533156!2d72.82417957528777!3d19.21059524773323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b720026b9ccb%3A0xb4679207dd575703!2sHUM%20GALAXY%20HEIGHTS%20BY%20HUM%20DEVELOPERS!5e1!3m2!1sen!2sin!4v1783689236760!5m2!1sen!2sin"
            width="400"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hum Developers location"
            className="h-[360px] w-full lg:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
