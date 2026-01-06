function Contact() {
  return (
    <div className="page">
      <h2>Contact Us</h2>
      <p>Get in touch with us for more information.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;