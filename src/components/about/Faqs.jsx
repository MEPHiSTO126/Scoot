// src/components/about/Faqs.jsx
import { useState } from 'react';

const faqsData = [
  {
    category: "How it works",
    questions: [
      {
        question: "How do I download the app?",
        answer: "To download the Scoot app, you can search \"Scoot\" in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you'll be re-directed to the correct page."
      },
      {
        question: "Can I find a nearby Scoots?",
        answer: "You can use the Scoot app to find the nearest Scoot to your location. The app will show you a map with available Scoots nearby, battery levels, and estimated walking distance."
      },
      {
        question: "Do I need a license to ride?",
        answer: "In most cities, you do not need a driver's license to ride a Scoot. However, you must be at least 18 years old and follow all local traffic laws to ensure your safety and the safety of others."
      }
    ]
  },
  {
    category: "Safe driving",
    questions: [
      {
        question: "Should I wear a helmet?",
        answer: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
      },
      {
        question: "How about the rules & regulations?",
        answer: "Please follow all local traffic laws, including riding in bike lanes where available and yielding to pedestrians. Do not ride on sidewalks unless local laws specifically permit it."
      },
      {
        question: "What if I damage my Scoot?",
        answer: "If you are involved in an accident or the Scoot is damaged, please end your ride safely and report the damage immediately through the app. Our support team will guide you on the next steps."
      }
    ]
  }
];

function FaqItem({ question, answer, initiallyOpen = false }) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  return (
    <div 
      className="bg-snow hover:bg-light-yellow cursor-pointer p-8 transition-colors duration-300"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center gap-4">
        <h4 className="text-[18px] md:text-[24px] m-0">{question}</h4>
        <div className={`flex-shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#FCB72B" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
        </div>
      </div>
      {isOpen && (
        <div className="mt-6 text-dim-grey text-[15px] leading-[25px]">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function Faqs() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-8 mb-24">
      <h2 className="text-center mb-16 lg:mb-24">FAQs</h2>
      
      <div className="flex flex-col gap-16">
        {faqsData.map((section, idx) => (
          <div key={section.category} className="flex flex-col lg:flex-row gap-8 lg:gap-24 xl:gap-32">
            <div className="w-full lg:w-1/3">
              <h3 className="text-center lg:text-left">{section.category}</h3>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col gap-4">
              {section.questions.map((q, qIdx) => (
                <FaqItem 
                  key={q.question} 
                  {...q} 
                  initiallyOpen={idx === 0 && qIdx === 0 || idx === 1 && qIdx === 0}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
