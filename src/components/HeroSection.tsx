import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const HeroSection = () => {
  const [task, setTask] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!task.trim()) {
      toast.error("Please enter your task description");
      return;
    }

    setIsGenerating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const generatedPrompt = `# Enhanced Task Prompt

## Objective
${task}

## Instructions
- Provide detailed, step-by-step guidance
- Use clear and concise language
- Include relevant examples where appropriate
- Ensure the response is actionable and practical

## Expected Output
A comprehensive response that addresses the user's needs with high accuracy and usefulness.

## Additional Context
Please consider the following when responding:
- Target audience level of expertise
- Practical implementation considerations
- Best practices in the relevant domain`;

    setPrompt(generatedPrompt);
    setIsGenerating(false);
    toast.success("Prompt generated successfully!");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    toast.success("Prompt copied to clipboard!");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Announcement Banner */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm">
          <span className="bg-brand-red text-white px-2 py-1 rounded text-xs font-semibold">New</span>
          <Sparkles className="w-4 h-4" />
          <span>Our Advanced AI Prompt Generator Tools Are Online Now!</span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-brand-red">AutoPrompt:</span>{" "}
          <span className="text-foreground">Free Automatic AI</span>
          <br />
          <span className="text-brand-red">Prompt Generator</span>
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-4 text-lg text-muted-foreground">
          <p>AutoPrompt: Your ultimate AI prompt generator for crafting perfect prompts.</p>
          <p>Automatically create optimized prompts for ChatGPT, Midjourney, and all popular AI models.</p>
          <p>Get better results with perfect prompts in seconds using our leading prompt generator.</p>
        </div>
      </div>

      {/* Supported Platforms */}
      <div className="flex justify-center items-center gap-8 mb-16 flex-wrap">
        <img src="/imgs/logos/openai.svg" alt="OpenAI" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
        <img src="/imgs/logos/claude.svg" alt="Claude" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
        <img src="/imgs/logos/midjourney.svg" alt="Midjourney" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
        <img src="/imgs/logos/cursor.webp" alt="Cursor" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
        <img src="/imgs/logos/tailwindcss.svg" alt="Tailwind CSS" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
        <img src="/imgs/logos/react.svg" alt="React" className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
      </div>

      {/* Main Generator Interface */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Task Input */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Your Task</h3>
          <Select defaultValue="deepseek">
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deepseek">DeepSeek Chat (Default Model)</SelectItem>
              <SelectItem value="chatgpt">ChatGPT</SelectItem>
              <SelectItem value="claude">Claude</SelectItem>
              <SelectItem value="midjourney">Midjourney</SelectItem>
            </SelectContent>
          </Select>
          <Textarea
            placeholder="Typing your task here, i.e., write a poem about the moon"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="min-h-[300px] resize-none"
          />
          <Button 
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full bg-brand-red hover:bg-brand-red/90 text-white"
          >
            {isGenerating ? "Generating..." : "Generate"}
          </Button>
        </div>

        {/* Generated Prompt */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-foreground">Prompt</h3>
            {prompt && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                Copy Clipboard
              </Button>
            )}
          </div>
          <Textarea
            value={prompt || "Generated text will appear here"}
            readOnly
            className="min-h-[300px] resize-none bg-muted/50"
          />
        </div>
      </div>

      {/* Tips */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          <strong>Tips!</strong> describe your task more detailed → generate great prompt for your task.
        </p>
      </div>
    </div>
  );
};