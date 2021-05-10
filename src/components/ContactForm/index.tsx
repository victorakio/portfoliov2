import emailjs from "emailjs-com";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

import styles from "./styles.module.scss";

export const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("gmail", "contact_form", e.target, "user_C1AOZPrWKX6FXP9nwgzb0")
      .then(
        (result) => {
          if (result.text === "OK") {
            setIsSuccess(true);
            setIsSending(false);
          }
        },
        (error) => {
          if (error.text !== "OK") {
            setIsSending(false);
          }
        }
      );
  }

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactText}>
        <h2 id="contact">
          Gostou do meu trabalho?
          <br />
          Vamos conversar sobre seu próximo projeto!
        </h2>

        <hr />
        <p>
          Atuo há 5 anos com Desenvolvimento Web, focado em Front End e
          Wordpress, além disso me preocupo muito com o Design, que acredito ser
          essencial para ter uma presença marcante atualmente.
        </p>

        <p>
          Conte me mais sobre como posso ajudar seu negócio, seja um site ou
          aplicação web, posso te ajudar a atingir seus objetivos.
        </p>
      </div>
      <form onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>
          Nome
          <input type="text" name="user_name"></input>
        </label>

        <label>
          Email
          <input type="email" name="user_email"></input>
        </label>

        <label className={styles.message}>
          Me conte sobre seu projeto
          <textarea rows="8" name="message"></textarea>
        </label>

        <button
          type="submit"
          value="Send"
          className={isSuccess ? styles.inactive : ""}
          disabled={isSuccess}
        >
          {isSending ? (
            <AiOutlineLoading className={styles.spinner} />
          ) : isSuccess ? (
            "Enviado com sucesso!"
          ) : (
            "Enviar"
          )}
        </button>
      </form>
    </div>
  );
};
