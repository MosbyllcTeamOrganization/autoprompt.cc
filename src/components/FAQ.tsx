import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "1",
    question: "AutoPrompt.cc vs. Research Paper: How is This Tool Different for Prompt Creation?",
    answer: "AutoPrompt.cc is a user-friendly web tool, an advanced Automatic prompt generator designed for practical AI model interaction. Unlike the academic 'AutoPrompt' paper, our platform helps everyday users craft better prompts for real-world applications with ChatGPT, Claude, Midjourney, and other leading AI models."
  },
  {
    id: "2",
    question: "Which AI Models Does This Prompt Optimization Tool Support?",
    answer: "Our AutoPrompt tool is designed to support all major AI models including ChatGPT, Claude, Midjourney, Stable Diffusion, and Gemini. We continuously update our platform to ensure compatibility with new AI systems, making it a versatile prompt generator."
  },
  {
    id: "3",
    question: "Do I Need Special Skills to Use This AI Platform?",
    answer: "Not at all! That's the core benefit of AutoPrompt. Our AI platform handles the prompt engineering complexities. Simply describe your goal, and this intuitive service will create an optimized prompt. It's an easy-to-use prompt generator."
  },
  {
    id: "4",
    question: "How Does AutoPrompt Optimize Prompts with its Technology?",
    answer: "AutoPrompt's underlying technology employs sophisticated techniques like clear instruction formatting, context specification, and model-specific optimizations. These methods dramatically enhance the clarity and effectiveness of your inputs, making it a reliable prompt generator."
  },
  {
    id: "5",
    question: "Is the AutoPrompt AI Tool (for Prompt Generation) Free?",
    answer: "Yes, AutoPrompt offers a robust free plan for its AI-powered prompt generation, allowing you to experience core features. We also provide premium plans for unlimited access and advanced capabilities with our prompt generator."
  },
  {
    id: "6",
    question: "Does This Service Store My AI Prompts?",
    answer: "We prioritize your privacy. By default, our service does not store your prompt content. Premium users can optionally save prompts, but this data is kept confidential and is not used to train AI models. Trust our prompt generator for secure use."
  }
];

export const FAQ = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            AutoPrompt FAQ: Your Free Automatic Prompt Generator Tool Questions Answered
          </h2>
          <p className="text-lg text-muted-foreground">
            Have more questions about how our service for prompt optimization can help you? Feel free to contact us.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="border border-border rounded-lg px-6 shadow-sm hover:shadow-card transition-shadow duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {faq.id}
                  </div>
                  <span className="font-semibold text-foreground">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-12 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};