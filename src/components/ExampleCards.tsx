import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Eye } from "lucide-react";
import { toast } from "sonner";

const examples = [
  {
    id: 1,
    title: "Midjourney Prompt Generator",
    description: "Generate detailed, optimized prompts for Midjourney AI image creation",
    tags: ["AI Art", "Midjourney", "Image Generation"],
    image: "/imgs/examples/midjourney.jpg",
    prompt: `# Midjourney Prompt Generator

Create detailed prompts for Midjourney AI image generation with the following structure:

## Core Elements:
- Subject description
- Art style and medium
- Lighting and mood
- Camera angle and composition
- Technical parameters

## Example Output:
"A majestic dragon soaring through cloudy skies, digital art, cinematic lighting, low angle shot, highly detailed, 8k resolution --ar 16:9 --stylize 100"`
  },
  {
    id: 2,
    title: "Studio Ghibli Style Image Generator",
    description: "Create prompts for OpenAI DALL-E to generate Studio Ghibli style images",
    tags: ["OpenAI", "DALL-E", "Ghibli"],
    image: "/imgs/examples/ghibli.jpg",
    prompt: `# Studio Ghibli Style Image Generator for OpenAI

## Role
I am a prompt engineering specialist focused on creating OpenAI DALL-E prompts that accurately capture the distinctive Studio Ghibli aesthetic and storytelling elements.

## Ghibli Style Elements
- Lush, detailed natural environments
- Whimsical characters with expressive eyes
- Soft, warm color palettes
- Magical realism elements
- Environmental storytelling

## Prompt Structure
Create prompts that include:
1. Character description
2. Setting details
3. Ghibli-specific style markers
4. Emotional atmosphere
5. Technical specifications`
  },
  {
    id: 3,
    title: "Claude Website Generator",
    description: "Generate prompts for Claude AI to create complete, responsive website designs",
    tags: ["Claude", "Web Design", "AI"],
    image: "/imgs/examples/website.jpg",
    prompt: `# Claude Website Generator

Create comprehensive prompts for generating complete website designs using Claude AI.

## Website Components to Include:
- Header with navigation
- Hero section
- Feature sections
- Call-to-action areas
- Footer

## Technical Specifications:
- Responsive design principles
- Modern CSS frameworks
- Accessibility considerations
- SEO optimization
- Performance best practices

## Output Format:
Provide HTML, CSS, and JavaScript code with detailed comments and implementation instructions.`
  }
];

export const ExampleCards = () => {
  const handleCopyPrompt = (prompt: string, title: string) => {
    navigator.clipboard.writeText(prompt);
    toast.success(`${title} prompt copied to clipboard!`);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          See Our Free Prompt Generator Tool in Action
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          Explore examples of how AutoPrompt, as a leading AI solution, intelligently transforms basic inputs into powerful prompts for various AI models.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {examples.map((example) => (
          <Card key={example.id} className="overflow-hidden hover:shadow-card transition-shadow duration-300">
            <CardHeader className="p-0">
              <div className="h-48 bg-gradient-card rounded-t-lg flex items-center justify-center">
                <div className="text-6xl text-muted-foreground/20">
                  {example.id === 1 ? "🎨" : example.id === 2 ? "🌸" : "💻"}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {example.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {example.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {example.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                onClick={() => handleCopyPrompt(example.prompt, example.title)}
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Prompt
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};