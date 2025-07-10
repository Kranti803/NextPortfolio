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
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm actively looking for opportunities and exciting projects to work
            on.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Ready to contribute
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With a strong foundation in development and a passion for
              learning, I'm excited to bring my perspective and skills to your
              team. Let’s connect and explore how I can support your next
              project.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                  <Mail
                    className="text-emerald-600 dark:text-emerald-400"
                    size={20}
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Email
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    krantikumar803@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                  <Linkedin
                    className="text-emerald-600 dark:text-emerald-400"
                    size={20}
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    LinkedIn
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    linkedin.com/in/kranti-kumar-671762223/
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg">
                  <Github
                    className="text-emerald-600 dark:text-emerald-400"
                    size={20}
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    GitHub
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    github.com/Kranti803
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="Tell me about the opportunity..."
                ></textarea>
              </div>

              {isSending ? (
                <LoadingButton />
              ) : (
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
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
