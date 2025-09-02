"use client";
import React, { useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import LoadingButton from "./LoadingButton";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_KEY!,
        process.env.NEXT_PUBLIC_TEMPLATE_KEY!,
        formRef.current,
        {
          publicKey: "YanETJtYfDU5fAlpN",
        }
      );

      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (error: any) {
      toast.error("Failed to send message.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-6 py-20 md:min-h-[80vh] flex flex-col gap-10 text-slate-100"
    >
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#383838] dark:text-slate-100 lg:text-right mb-4">
            . Let's Connect
          </h2>
          <p className="text-sm sm:text-lg md:text-base leading-relaxed text-[#666666] dark:text-slate-100 lg:text-right">
            I'm actively looking for opportunities and exciting projects to work
            on.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#373737] dark:text-slate-200 mb-6">
                Ready to contribute
              </h3>
              <p className="text-[#666666] dark:text-slate-200 mb-6">
                With a strong foundation in development and a passion for
                learning, I'm excited to bring my perspective and skills to your
                team. Let’s connect and explore how I can support your next
                project.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <Mail
                        size={20}
                        className="dark:text-slate-100 text-[#383838]"
                      />
                    ),
                    title: "Email",
                    value: "krantikumar803@gmail.com",
                  },
                  {
                    icon: (
                      <Linkedin
                        size={20}
                        className="dark:text-slate-100 text-[#383838]"
                      />
                    ),
                    title: "LinkedIn",
                    value: "linkedin.com/in/kranti-kumar-671762223/",
                  },
                  {
                    icon: (
                      <Github
                        size={20}
                        className="dark:text-slate-100 text-[#383838]"
                      />
                    ),
                    title: "GitHub",
                    value: "github.com/Kranti803",
                  },
                ].map((contact, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="dark:bg-stone-600/30 border border-gray-300 dark:border-stone-700 p-3 rounded-md">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium text-[#373737] dark:text-slate-100">
                        {contact.title}
                      </p>
                      <p className=" text-[#666666] dark:text-slate-200">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={200}>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              {[
                {
                  id: "name",
                  type: "text",
                  placeholder: "Your name",
                  label: "Name",
                },
                {
                  id: "email",
                  type: "email",
                  placeholder: "your.email@example.com",
                  label: "Email",
                },
              ].map((field, i) => (
                <div key={i}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-[#373737] dark:text-slate-200 mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required
                    className="w-full px-4 py-2 dark:border border-2 border-gray-300 dark:border-stone-700 dark:bg-stone-600/30 rounded-md text-[#373737] dark:text-slate-200"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#373737] dark:text-slate-200 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 dark:border border-2 border-gray-300 dark:border-stone-700 dark:bg-stone-600/30 rounded-md text-[#373737] dark:text-slate-200"
                  placeholder="Tell me about the opportunity..."
                ></textarea>
              </div>

              {isSending ? (
                <LoadingButton />
              ) : (
                <button
                  type="submit"
                  className="w-full dark:bg-stone-700 bg-[#141414] text-slate-100 py-3 px-6 rounded-md hover:bg-stone-800/90 border dark:border-stone-600/30"
                >
                  Send Message
                </button>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
