import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      toast.warn("PREENCHA TODOS OS CAMPOS");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_sr0weyr",
        "template_13ttmtb",
        templateParams,
        "oG-nu52fncO1y3nwr"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("ERRO:", error);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Entrar em contato</h5>
      <h2> Contacte-me </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>matheussdev3@gmail.com</h5>
            <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJfrKnHwdrtMzGlGBMGMnRbsBdJCTRsHpTkJvfxhPzjHFJlmBNDPvBvHcgbGlbkHrBdGQDq" target="_blank-">
              Contate-me
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>matheussdev3@gmail.com</h5>
            <a href="https://m.me/matheus.figueiredo.75098" target="_blank-">
              Contate-me
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 92 99982-7649</h5>
            <a
              href="https://wa.me/message/HDP33S5LPCCNA1"
              target="_blank-"
            >
              Contate-me
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form onSubmit={sendEmail}>
          <input
            type="text"
            value={name}
            placeholder="Nome Completo"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="Seu Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            value={message}
            rows="7"
            placeholder="Escreva sua mensagem"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};
