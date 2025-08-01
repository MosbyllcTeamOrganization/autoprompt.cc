import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Chen",
    role: "Content Creator",
    avatar: "DC",
    quote: "AutoPrompt completely changed how I work with ChatGPT. I just type what I want, and this AI tool turns it into the perfect prompt. My content quality has improved dramatically!",
    highlight: "AutoPrompt improved my work with ChatGPT!"
  },
  {
    name: "Rachel Kim",
    role: "Digital Artist",
    avatar: "RK",
    quote: "As a Stable Diffusion user, the AutoPrompt service is a true game-changer. It creates detailed prompts that produce exactly the images I envision, no complex formats needed.",
    highlight: "This Automatic tool is a game-changer for Stable Diffusion!"
  },
  {
    name: "Marcus Thompson",
    role: "Software Developer",
    avatar: "MT",
    quote: "I've tried many similar tools, but AutoPrompt's platform consistently produces the best results for technical coding questions with ChatGPT. The time savings are incredible.",
    highlight: "Best results from this platform for ChatGPT!"
  },
  {
    name: "Sofia Garcia",
    role: "Marketing Specialist",
    avatar: "SG",
    quote: "AutoPrompt, my go-to solution, helps me create perfect prompts for generating compelling marketing copy with AI. It understands my needs and formats inputs professionally.",
    highlight: "AutoPrompt helps create perfect marketing prompts!"
  },
  {
    name: "James Wilson",
    role: "Educator",
    avatar: "JW",
    quote: "I use the AutoPrompt platform to help create engaging educational content with AI. The quality of responses has significantly improved, and this service saves me hours.",
    highlight: "The AutoPrompt service saves hours on prompt work!"
  },
  {
    name: "Anna Zhang",
    role: "UX Designer",
    avatar: "AZ",
    quote: "AutoPrompt's AI Automatic tool helps me generate perfect prompts for Midjourney when creating UI mockups. The level of detail and control this platform offers is amazing.",
    highlight: "This tool creates exact Midjourney prompts!"
  }
];

export const Testimonials = () => {
  return (
    <section className="bg-brand-light-gray py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What Our Users Say About the AutoPrompt Free Prompt Generator
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Hear directly from individuals and professionals who use the AutoPrompt platform, a highly effective Automatic tool, to significantly enhance their AI interactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-hero transition-shadow duration-300 h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={`/imgs/users/${23 + index}.png`} />
                    <AvatarFallback className="bg-brand-red text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <Quote className="w-4 h-4 text-brand-red" />
                    </div>
                    <p className="text-sm text-brand-red font-medium">
                      {testimonial.highlight}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    {testimonial.role}
                  </p>
                </div>
                
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};