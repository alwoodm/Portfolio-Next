'use client'

import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 id="contact-heading" className="text-4xl font-bold mb-8 text-center">Kontakt</h2>
          <div className="bg-slate-800 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 id="contact-form-heading" className="text-2xl font-bold mb-6 text-blue-400">
                  Napisz do mnie
                </h3>
                <ContactForm />
              </div>
              
              <div>
                <h3 id="contact-info-heading" className="text-2xl font-bold mb-6 text-blue-400">
                  Dane kontaktowe
                </h3>
                <div className="space-y-6" role="list" aria-labelledby="contact-info-heading">
                  <a
                    href="mailto:kontakt@alwood.ovh"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group"
                    role="listitem"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z"/>
                    </svg>
                    <span className="text-base">kontakt@alwood.ovh</span>
                  </a>
                  <a
                    href="https://github.com/alwoodm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group"
                    role="listitem"
                    aria-label="GitHub profil"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-base">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aleksander-lis-8741502b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group"
                    role="listitem"
                    aria-label="LinkedIn profil"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="text-base">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection