import emailjs from "emailjs-com";

import styles from "./styles.module.scss";

export const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "contact_form", e.target, "user_C1AOZPrWKX6FXP9nwgzb0")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className={styles.contactContainer}>
      <p>
        Gostou do meu trabalho?
        <br /> Entre em contato para o seu próximo projeto!
      </p>
      <form onSubmit={sendEmail}>
        <div className={styles.inputs}>
          <input type="hidden" name="contact_number" />
          <label>
            Nome
            <input type="text" name="user_name"></input>
          </label>

          <label>
            Email
            <input type="email" name="user_email"></input>
          </label>
        </div>

        <label className={styles.message}>
          Me conte sobre seu projeto
          <textarea rows="8" name="message"></textarea>
        </label>

        <button type="submit" value="Send">
          Enviar
        </button>
      </form>
    </div>
  );
};
