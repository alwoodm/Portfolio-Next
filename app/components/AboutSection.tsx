'use client'

import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="omnie" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">O mnie</h2>
          <div className="bg-slate-700 rounded-2xl p-8 shadow-xl">
            <p className="text-gray-300 leading-relaxed">
              Witam! Jestem Aleksander, pasjonat technologii i programowania. 
              Od zawsze interesowałem się elektroniką i IT, a teraz uczę się programowania i rozwijam swoje umiejętności. Programowanie to dla mnie nie tylko praca, ale też pasja. Skupiam się na pisaniu czystego i efektywnego kodu, który działa i rozwija się razem z projektem. 

              Chociaż jestem wciąż na początku swojej drogi zawodowej, mam już solidne podstawy w IT, a także umiejętności związane z systemami, sieciami i zabezpieczeniami. Mam również doświadczenie w pracy z różnymi systemami operacyjnymi, jak Windows, Linux, OS X, oraz w konfiguracji urządzeń i sieci.

              Poza technologią, uwielbiam czytać książki, zgłębiać historię i szukać ciekawych wyzwań. Lubię także współpracować w zespole, dzielić się pomysłami i wspólnie rozwiązywać problemy. W mojej pracy stawiam na komunikację, elastyczność i ciągły rozwój, bo wiem, że każda nowa umiejętność przybliża mnie do celu.
              Chociaż jeszcze uczę się wielu rzeczy, to już teraz czerpię ogromną satysfakcję z rozwiązywania złożonych problemów i ciągłego rozwijania swoich kompetencji w różnych obszarach technologii.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection 