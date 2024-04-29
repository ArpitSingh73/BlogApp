// "use client";
import Image from "next/image";
import styles from "./contact.module.css";


export const metadata = {
  title: "Contact",
  description: "Welcome to contact page",
};

const ContactPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="your name" />
          <input type="text" placeholder="your email address" />
          <input type="text" placeholder="your phone number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
