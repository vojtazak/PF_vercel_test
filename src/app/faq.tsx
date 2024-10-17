import React, { useState } from 'react'; 


interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Next.js?",
    answer: "Next.js is a React framework that enables you to create fast and user-friendly web applications with ease.",
  },
  {
    question: "How does Tailwind CSS work?",
    answer: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.",
  },
  {
    question: "What is an accordion?",
    answer: "An accordion is a UI component that allows the user to expand and collapse sections of content.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg--background">
      <div className="max-w-3xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text--text-color">Frequently Asked Questions</h2>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 pb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left flex justify-between items-center text-lg font-medium text--text-color"
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text--text-color">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
