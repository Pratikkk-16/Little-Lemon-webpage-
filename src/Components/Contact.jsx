import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', isSubmitted: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ ...form, isSubmitted: true });
  };

  const isFormValid = form.name && form.email && form.message.split(' ').length >= 2;

  return (
    <section id="contact-us" className="contact-us">
      <h2>Contact Us</h2>
      {form.isSubmitted ? (
        <p>Sent Successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Message:
            <textarea name="message" value={form.message} onChange={handleChange} required />
          </label>
          <button type="submit" disabled={!isFormValid}>
            Send
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
