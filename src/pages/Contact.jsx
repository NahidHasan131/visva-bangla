import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { MdOutlineEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { IoTimeOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Events from '../components/Events/Events';

const contactInfo = [
  {
    icon: <MdLocationOn size={22} className="text-[#62826B]" />,
    label: 'Our Location',
    value: '123 Wellness Street, Dhaka, Bangladesh',
    href: null,
  },
  {
    icon: <MdPhone size={22} className="text-[#62826B]" />,
    label: 'Call Us',
    value: '+880 1234 567890',
    href: 'tel:+8801234567890',
  },
  {
    icon: <MdOutlineEmail size={22} className="text-[#62826B]" />,
    label: 'Email Us',
    value: 'info@shunnoyoga.com',
    href: 'mailto:info@shunnoyoga.com',
  },
  {
    icon: <IoTimeOutline size={22} className="text-[#62826B]" />,
    label: 'Working Hours',
    value: 'Mon–Fri: 9AM–6PM, Sat–Sun: 8AM–4PM',
    href: null,
  },
];

const faqs = [
  {
    q: 'Do I need prior experience to join a class?',
    a: 'Not at all! We offer classes for all levels — from complete beginners to advanced practitioners. Our instructors will guide you every step of the way.',
  },
  {
    q: 'How do I book a class?',
    a: 'You can book a class by contacting us through this form, calling us directly, or visiting our studio. We also offer online sessions.',
  },
  {
    q: 'What should I bring to my first class?',
    a: 'Just bring comfortable clothing and an open mind. We provide yoga mats and all necessary equipment. Water bottles are welcome.',
  },
  {
    q: 'Do you offer private sessions?',
    a: 'Yes! We offer one-on-one private sessions tailored to your specific goals and schedule. Contact us to discuss availability.',
  },
  {
    q: 'Is there a free trial class?',
    a: 'Absolutely. We offer a free first class for new members so you can experience our teaching style before committing.',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div>
      <Breadcrumb />

      {/* Contact section */}
      <div className="max-w-340 mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left: info */}
          <div className="lg:w-2/5 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800 text-sm">
                Get In Touch
              </span>
              <h2 className="text-[44px] font-bold text-[#11141B] leading-tight">
                We'd Love to Hear From You
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Have questions about our classes or want to book a session? Reach out and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 rounded-2xl bg-[#F0F7F2] hover:bg-[#e6f2ea] transition-colors duration-200">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-semibold text-[#62826B] uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-[#11141B] hover:text-[#62826B] transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-[#11141B] whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:w-3/5 bg-[#F0F7F2] rounded-3xl p-8 lg:p-12 lg:pt-20">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#62826B] flex items-center justify-center text-white text-2xl">✓</div>
                <h3 className="text-2xl font-bold text-[#11141B]">Message Sent!</h3>
                <p className="text-gray-500">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-2 px-6 py-2.5 rounded-full bg-[#62826B] text-[#FFEFC5] text-sm font-medium hover:bg-[#11141B] transition-colors duration-300"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-2xl font-bold text-[#11141B] mb-2">Send a Message</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[#11141B]">Full Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Your name"
                      className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[#11141B]">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder="your@email.com"
                      className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#11141B]">Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required
                    placeholder="How can we help?"
                    className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#11141B]">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Tell us more..."
                    className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="self-start px-8 py-3 rounded-full bg-[#62826B] text-[#FFEFC5] font-medium hover:bg-[#11141B] hover:scale-105 transition-all duration-300">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Events />
      
      {/* Map + FAQ side by side */}
      <div className="bg-[#F0F7F2] py-16 lg:py-24">
        <div className="max-w-340 mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* Map */}
            <div className="lg:w-1/2 w-full rounded-3xl overflow-hidden" style={{ height: '500px' }}>
              <iframe
                title="Shunno Yoga Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902!2d90.4125!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ4JzM3LjEiTiA5MMKwMjQnNDUuMCJF!5e0!3m2!1sen!2sbd!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* FAQ */}
            <div className="lg:w-1/2 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800 text-sm bg-white">
                  FAQ
                </span>
                <h2 className="text-4xl font-bold text-[#11141B]">Frequently Asked Questions</h2>
                <p className="text-gray-500 text-sm">Everything you need to know before joining us.</p>
              </div>

              <div className="flex flex-col gap-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
                    >
                      <span className="font-semibold text-[#11141B] pr-4 text-sm">{faq.q}</span>
                      <MdKeyboardArrowDown
                        size={20}
                        className="shrink-0 text-[#62826B] transition-transform duration-300"
                        style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)' }}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
