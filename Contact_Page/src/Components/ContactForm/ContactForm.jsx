import styles from "./ContactForm.module.css";
import Button from "./Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { AiFillMail } from "react-icons/ai";

function ContactForm() {
    return (
        <section>
            <div className={styles["container"]}>
                <div className={styles["contactForm"]}>
                    <div className= {styles["top_btn_container"]}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px" />} />
                    <Button text="VIA CALL" icon={<IoCallSharp fontSize="24px" />} />
                    </div>
                    <Button isOutline={true} text="VIA EMAIL FORM" icon={<AiFillMail fontSize="24px" />} />
                </div>
                <div className={styles["contactImages"]}></div>
            </div>
        </section>
    )
}

export default ContactForm
