import React from "react";
import emailjs from "emailjs-com";
import "../styles/ContactForm.scss";

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n9re6t1",
        "template_a2uhk3r",
        e.target,
        "user_z1M4t2ArPi51hXWrBYzho"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="wrapper">
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="contact-form__containers">
          <label>
            <p>Namn:</p>
          </label>
          <input type="text" placeholder="Förnamn Efternamn" name="from_name" />
        </div>
        <div className="contact-form__containers">
          <label>
            <p>Email:</p>
          </label>
          <input
            type="email"
            placeholder="email@adress.com"
            name="user_email"
          />
        </div>
        <div className="contact-form__containers">
          <label>
            <p>Ämne:</p>
          </label>
          <input type="text" placeholder="Ämne" name="subject" />
        </div>
        <div className="contact-form__containers">
          <label>
            <p>Meddelande:</p>
          </label>
          <textarea placeholder="Ditt meddelande" name="message" />
        </div>
        <div className="contact-form__containers">
          <input
            className="contact-form__button"
            type="submit"
            value="Skicka"
          />
        </div>
      </form>
    </div>
  );
}
