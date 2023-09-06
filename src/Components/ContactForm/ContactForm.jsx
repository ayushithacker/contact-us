import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const ContactForm = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button
              text="via chat"
              icon={<MdOutlineMessage fontSize={"20px"} />}
            />
            <Button text="via call" icon={<AiFillPhone fontSize={"20px"} />} />
          </div>
          <Button
            isOutline={true}
            text="via Form"
            icon={<HiOutlineMail fontSize={"20px"} />}
          />
          <form action="">
            <div className={styles.form_controler}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.form_controler}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div className={styles.form_controler}>
              <label htmlFor="message">Message</label>
              <textarea name="message" rows="8" />
            </div>
            <div style={{ justifyContent: "end", display: "flex" }}>
              <Button text="submit" />
            </div>
          </form>
        </div>

        <div className={styles.contact_image}>
          <img src="/images/service.png" alt="" height={"550"} />
        </div>
      </section>
    </>
  );
};

export default ContactForm;
