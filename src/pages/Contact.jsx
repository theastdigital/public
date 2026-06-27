import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  project: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (submitted) setSubmitted(false);
    if (error) setError(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(false);

    try {
      const response = await fetch('https://formsubmit.co/ajax/theastdigital@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          project: formData.project,
          _subject: 'New lead from AST Digital website',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitted(true);
      setFormData(initialForm);
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="page-shell">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h1>Let’s build something ambitious together.</h1>
      </div>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <label className="field">
              <span>Name</span>
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Alex Chen" required />
            </label>
            <label className="field">
              <span>Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="alex@company.com" required />
            </label>
          </div>

          <label className="field">
            <span>What are you building?</span>
            <textarea
              name="project"
              value={formData.project}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us about your product, timeline, and goals."
              required
            />
          </label>

          <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Request a discovery call'}
          </button>
          {submitted ? (
            <p className="form-status">Thanks — your message has been sent to theastdigital@gmail.com.</p>
          ) : null}
          {error ? (
            <p className="form-status">Sorry, the form could not be sent right now. Please email hr@theastdigital.com directly.</p>
          ) : null}
        </form>

        <div className="contact-points">
          <article className="info-card contact-card">
            <h3>Email</h3>
            <p>hr@theastdigital.com</p>
          </article>
          <article className="info-card contact-card">
            <h3>Availability</h3>
            <p>We’re available for discovery calls, strategy sessions, and product delivery partnerships.</p>
          </article>
          <article className="info-card contact-card">
            <h3>Response time</h3>
            <p>Usually within one business day for new inquiries.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
