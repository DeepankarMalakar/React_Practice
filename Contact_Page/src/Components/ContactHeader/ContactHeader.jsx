import styles from "./ContactHeader.module.css";
function ContactHeader() {
    return (
        <div className= {styles["contact-header"]}>
            <div className={styles["heading"]}>
                <h1>CONTACT US</h1>
            </div>
            <div className={styles["content1"]}>
                <span>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </span>
            </div>
        </div>
    )
}

export default ContactHeader
