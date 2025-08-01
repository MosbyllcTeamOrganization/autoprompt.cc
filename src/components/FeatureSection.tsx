import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Clock, Layers, History, Settings } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Automatic Prompt Refinement with Our AI Tool",
    description: "Our AI system instantly converts your basic questions into expertly crafted prompts, leading to superior AI responses. Experience the ease of this advanced prompt solution."
  },
  {
    icon: Target,
    title: "Multi-Model Support for Diverse Prompting Needs",
    description: "Generate optimized inputs for a wide array of popular LLM models, including ChatGPT, Claude, and Midjourney, with our versatile platform."
  },
  {
    icon: Clock,
    title: "No Complex Prompt Engineering Skills Needed",
    description: "Let AutoPrompt, your intuitive Automatic AI assistant, handle the intricacies of prompt optimization. You focus on your ideas, we refine the inputs for the AI."
  }
];

const keyFeatures = [
  {
    icon: Zap,
    title: "Automatic Prompt Generation",
    description: "Our system, an advanced AI prompt generator, automatically transforms simple questions into professional, optimized prompts for any AI model."
  },
  {
    icon: Layers,
    title: "Multi-Model Prompt Optimization",
    description: "This platform offers specialized prompt enhancement and templates for leading AI systems like ChatGPT, Claude, Midjourney, and more."
  },
  {
    icon: Target,
    title: "Context-Aware Prompt Creation",
    description: "Our AI intelligently adapts to your input's context, creating the most relevant prompt structure to guide the LLM model accurately."
  },
  {
    icon: Clock,
    title: "One-Click Prompt Copying",
    description: "Instantly copy your perfectly generated prompt from our interface with a single click, ready for any AI platform."
  },
  {
    icon: History,
    title: "Track Your Prompt History",
    description: "Save and easily access your previously generated prompts from our AI service for quick reuse and reference (premium feature)."
  },
  {
    icon: Settings,
    title: "Advanced Prompt Customization",
    description: "Fine-tune the output of our AI tool with advanced options for tone, detail level, and format, ensuring prompts meet your exact needs."
  }
];

export const FeatureSection = () => {
  return (
    <>
      {/* What is AutoPrompt Section */}
      <section className="bg-brand-light-gray py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                What is AutoPrompt? The Intelligent Free Automatic AI Prompt Generator
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                AutoPrompt is an intelligent Free Automatic service that automatically transforms your simple questions or ideas into professional, highly optimized prompts. This enhances your interactions with any AI model, making AutoPrompt a leading solution for prompt creation and optimization.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
                <div className="h-80 bg-gradient-to-br from-brand-red/10 to-brand-red/5 rounded-xl flex items-center justify-center">
                  <div className="text-8xl text-brand-red/20">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose AutoPrompt for Free Automatic Prompt Generator?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Our sophisticated Free Automatic tool helps you unlock superior results from various LLM models. AutoPrompt isn't just a utility; it's a powerful way to enhance your AI interactions and create effective prompts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-64 bg-gradient-card rounded-xl mb-6 flex items-center justify-center">
                <div className="text-6xl text-brand-red/30">📈</div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Achieve Better Responses with Optimized Inputs
              </h3>
              <p className="text-muted-foreground">
                The expertly refined prompts created by our service help LLM models understand your intent with greater precision, resulting in more accurate and useful responses.
              </p>
            </div>

            <div className="text-center">
              <div className="h-64 bg-gradient-card rounded-xl mb-6 flex items-center justify-center">
                <div className="text-6xl text-brand-red/30">⏰</div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Save Time with Our Automatic Prompt Crafting
              </h3>
              <p className="text-muted-foreground">
                No more trial and error with prompt writing. Our AI automatically creates optimized prompts, saving you valuable time and effort.
              </p>
            </div>

            <div className="text-center">
              <div className="h-64 bg-gradient-card rounded-xl mb-6 flex items-center justify-center">
                <div className="text-6xl text-brand-red/30">🔗</div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Universal LLM Model Support via AutoPrompt
              </h3>
              <p className="text-muted-foreground">
                Compatible with all major AI models including ChatGPT, Claude, Midjourney, and more. One tool for all your prompt optimization needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-brand-light-gray py-16" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Key Features of Our AutoPrompt Prompt Generator
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              AutoPrompt provides everything you need. This powerful AI tool helps you create perfect, effective prompts for any AI model.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-hero transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};