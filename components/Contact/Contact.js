import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BitmojiContainer,
  ContactSection,
  ContactInterest,
  ContactHead,
  ContactSummary,
  ContactButton,
} from "./Contact.styles";
import akimQuestion from "@/public/assets/bitmojis/bitmoji-question.png";

function Contact(props, ref) {
  return (
    <ContactSection id={props.id} ref={ref}>
      <BitmojiContainer>
        <Image
          title="Akim thinks for contact"
          src={akimQuestion}
          alt="Akim thinks for contact"
          loading="lazy"
          layout="responsive"
          width={398}
          height={398}
        />
      </BitmojiContainer>

      <ContactInterest className="contact-heading">
        Are you still interested ?
      </ContactInterest>
      <ContactHead className="contact-subhead">Get In Touch !</ContactHead>
      <ContactSummary className="contact-summary">
        I am not looking for any new opportunities. Nevertheless, you can always
        contact me via e-mail. Whether you contact me for an issue, question,
        comment or just for a greeting, I will try my best to answer you. You
        can also give me a{" "}
        <Link href="/feedback">
          <a aria-label="Give feedback">feedback</a>
        </Link>{" "}
        on my portfolio and it will be in the blockchain for the eternity.
      </ContactSummary>
      <Link
        href="mailto:akim.benchiha@gmail.com?subject=Contact from your Portfolio"
        passHref={true}
      >
        <ContactButton className="boxButton" aria-label="Contact">
          Contact Me
        </ContactButton>
      </Link>
    </ContactSection>
  );
}

export default React.forwardRef(Contact);
