import styles from "./ContactForm.module.css";
import Button from "./Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { AiFillMail } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";

function ContactForm() {
    return (
        <section>
            <div className={styles["container"]}>
                <div className={styles["contactForm"]}>
                    <div className={styles["top_btn_container"]}>
                        <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px" />} />
                        <Button text="VIA CALL" icon={<IoCallSharp fontSize="24px" />} />
                    </div>
                    <Button isOutline={true} text="VIA EMAIL FORM" icon={<AiFillMail fontSize="24px" />} />
                    <form>
                        <div className={styles["form_container"]}>
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="name" />
                        </div>
                        <div className={styles["form_container"]}>
                            <label htmlFor="email">E-Mail</label>
                            <input type="email" name="email" />
                        </div>
                        <div className={styles["form_container"]}>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" rows="6"></textarea>
                        </div>
                        <div className={styles["submit_btn"]}>
                            <Button text="SUBMIT" icon={<IoIosSend fontSize="24px" />} />
                        </div>
                    </form>
                </div>
                <div className={styles["contactImages"]}>
                    <img src="service.svg" alt="contact_image" />
                </div>
            </div>
        </section>
    )
}

export default ContactForm
