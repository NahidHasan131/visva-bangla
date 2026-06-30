import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { MdOutlineEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { IoTimeOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';

const contactInfo = [
  {
    icon: <MdLocationOn size={22} className="text-secondary" />,
    label: 'Our Location',
    value: 'Shiroil Colony, Ghoramara, Boalia, Rajshahi, Bangladesh',
    href: null,
  },
  {
    icon: <MdPhone size={22} className="text-secondary" />,
    label: 'Call Us',
    value: '+880 1700 000000',
    href: 'tel:+8801700000000',
  },
  {
    icon: <MdOutlineEmail size={22} className="text-secondary" />,
    label: 'Email Us',
    value: 'info@visvabangla.org',
    href: 'mailto:info@visvabangla.org',
  },
  {
    icon: <IoTimeOutline size={22} className="text-secondary" />,
    label: 'Working Hours',
    value: 'Sat–Thu: 9AM–6PM',
    href: null,
  },
];

const faqs = [
  {
    q: 'Do I need prior experience to join a meditation class?',
    a: 'Not at all! Our programs are open to everyone — from complete beginners to experienced practitioners. Our teachers will guide you every step of the way.',
  },
  {
    q: 'How do I join a free meditation session?',
    a: 'You can join by contacting us through this form, calling us directly, or visiting our center in Rajshahi. All sessions are completely free of charge.',
  },
  {
    q: 'What should I bring to my first class?',
    a: 'Just bring comfortable clothing and an open mind. We provide all necessary materials. Water bottles are welcome.',
  },
  {
    q: 'Is the VisvaBangla Spiritual University really free?',
    a: 'Yes, absolutely. All programs — meditation, spiritual education, and knowledge sessions — are entirely free of cost, open to every seeker regardless of background.',
  },
  {
    q: 'Can I volunteer as a teacher or researcher?',
    a: 'Yes! Any knowledgeable scholar or researcher may voluntarily teach in our classes. Please contact us to discuss how you can contribute.',
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
            <div className="flex flex-col gap-3">
              <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
                Get In Touch
              </span>
              <h2 className="text-4xl lg:text-5xl font-semibold text-[#11141B] leading-tight">
                We'd Love to <span className="text-secondary">Hear From You</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Have questions about our free meditation sessions, spiritual education programs, or the VisvaBangla Foundation? Reach out and we'll get back to you.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-3 rounded-2xl bg-secondary/8 hover:bg-secondary/12 transition-colors duration-200">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-semibold text-secondary uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-[#11141B] hover:text-secondary transition-colors duration-200">
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
          <div className="lg:w-3/5 bg-secondary/8 rounded-3xl p-8 lg:p-12 lg:pt-12">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-white text-2xl">✓</div>
                <h3 className="text-2xl font-bold text-[#11141B]">Message Sent!</h3>
                <p className="text-gray-500">We'll get back to you as soon as possible.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-2 px-6 py-2.5 rounded-full bg-secondary text-white text-sm font-semibold hover:bg-secondary/90 transition-colors duration-300"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-4xl font-bold text-[#11141B] mb-3">Send a Message!</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[#11141B]">Full Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Your name"
                      className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm outline-none focus:border-secondary transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[#11141B]">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder="your@email.com"
                      className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm outline-none focus:border-secondary transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#11141B]">Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required
                    placeholder="How can we help?"
                    className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm outline-none focus:border-secondary transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#11141B]">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={6}
                    placeholder="Tell us more..."
                    className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm outline-none focus:border-secondary transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="self-start px-8 py-3 rounded-full bg-secondary text-white font-semibold text-sm hover:bg-secondary/90 transition-all duration-300">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Map + FAQ */}
      <div className="bg-primary/8 py-16 lg:py-24">
        <div className="max-w-340 mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* Map */}
            <div className="lg:w-1/2 w-full rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]" style={{ height: '550px' }}>
              <iframe
                title="VisvaBangla Foundation Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.422852976979!2d88.61685881093405!3d24.366589278164213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefc92ba0f3d7%3A0x3c321294477fe7f5!2sVisvabangla%20Foundation!5e0!3m2!1sen!2sus!4v1779622261159!5m2!1sen!2sus"
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
              <div className="flex flex-col gap-3">
                <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  FAQ
                </span>
                <h2 className="text-4xl lg:text-5xl font-semibold text-[#11141B]">Frequently Asked <span className="text-primary">Questions</span></h2>
                <p className="text-gray-500 text-sm">Everything you need to know before joining us.</p>
              </div>

              <div className="flex flex-col gap-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
                    >
                      <span className="font-semibold text-[#11141B] pr-4 text-sm">{faq.q}</span>
                      <MdKeyboardArrowDown
                        size={20}
                        className="shrink-0 text-secondary transition-transform duration-300"
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
