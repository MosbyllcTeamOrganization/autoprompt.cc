import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Call to Action Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Crafting Superior Prompts Today with Our AutoPrompt Prompt Generator
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            Elevate your AI interactions and unlock better results with the AutoPrompt intelligent AI service. 
            Discover the difference expertly crafted prompts can make with our prompt generator.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white px-8">
              Try Our Automatic Prompt Generator Tool Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark px-8">
              Explore AI Tool Features
            </Button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold text-brand-red">AutoPrompt</span>
              </div>
              <p className="text-white/60 text-sm">
                Your ultimate AI prompt generator for crafting perfect prompts automatically.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Prompt Generator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Multi-Model Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Automatic Optimization</a></li>
                <li><a href="#" className="hover:text-white transition-colors">One-Click Copy</a></li>
              </ul>
            </div>

            {/* AI Models */}
            <div>
              <h4 className="font-semibold mb-4">Supported Models</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">ChatGPT</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Claude</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Midjourney</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Stable Diffusion</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Examples</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 AutoPrompt. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};