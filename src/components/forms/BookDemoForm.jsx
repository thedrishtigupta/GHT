import { useState } from "react";

const SUBJECTS_LIST = [
  "Mathematics", "English", "Social Studies", "Chemistry", "Accounts",
  "Science", "Hindi", "Physics", "Biology", "Economics",
  "Business Studies", "Computer Science",
];

const initialState = {
  fullName: "", email: "", phone: "",
  studentClass: "", time: "",
  subjects: [],
  area: "", message: "",
};

export default function BookDemoForm() {
  const [form, setForm] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectToggle = subject => {
    setForm(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject],
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: wire up to backend API
    console.log("Book Demo Form submitted:", form);
    alert("Thank you! We'll contact you shortly.");
    setForm(initialState);
  };

  return (
    <form className="book-demo-form" onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="fullName">Full Name <span className="required">*</span></label>
        <input type="text" id="fullName" name="fullName" value={form.fullName} onChange={handleChange} required />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email <span className="required">*</span></label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone <span className="required">*</span></label>
          <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="studentClass">Student's Class</label>
          <select id="studentClass" name="studentClass" value={form.studentClass} onChange={handleChange}>
            <option value="">Select Class</option>
            <option>Class 1–5</option>
            <option>Class 6–8</option>
            <option>Class 9–10</option>
            <option>Class 11–12</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="time">Preferred Time</label>
          <select id="time" name="time" value={form.time} onChange={handleChange}>
            <option value="">Select Time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Subjects Required</label>
        <div className="checkbox-grid">
          {SUBJECTS_LIST.map(subject => (
            <label key={subject}>
              <input
                type="checkbox"
                checked={form.subjects.includes(subject)}
                onChange={() => handleSubjectToggle(subject)}
              />
              {subject}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="area">Your Area</label>
        <input type="text" id="area" name="area" value={form.area} onChange={handleChange} placeholder="e.g. Pitampura, Rohini" />
      </div>

      <div className="form-group">
        <label htmlFor="message">Additional Message</label>
        <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange}
          placeholder="Tell us more about your requirements..." />
      </div>

      <button type="submit" className="submit-btn">Book Free Demo</button>
    </form>
  );
}
