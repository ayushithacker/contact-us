import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={`${styles.contact_section} `}>
      <h1>Contact Us</h1>
      <p>
        Let's connect: We are here to help , We would love to here from you!
        Whatever you question have, comment, or just want to chat, you can reach
        out to us through the contact form of this page or by phone, email or
        social media.
      </p>
    </div>
  );
};

export default ContactHeader;
