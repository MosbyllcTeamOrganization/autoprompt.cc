import { Button } from "@/components/ui/button";
import { Globe, Sun } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-background border-b border-border">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">A</span>
        </div>
        <span className="text-xl font-bold text-brand-red">AutoPrompt</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-foreground hover:text-brand-red transition-colors">
          Features
        </a>
        <div className="flex items-center gap-1">
          <span className="text-foreground hover:text-brand-red transition-colors cursor-pointer">
            Models
          </span>
          <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-foreground hover:text-brand-red transition-colors cursor-pointer">
            Prompt Generator Tools
          </span>
          <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <a href="#blog" className="text-foreground hover:text-brand-red transition-colors">
          Blog
        </a>
      </nav>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-foreground">English</span>
          <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <Sun className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
        <Button variant="default" className="bg-brand-red hover:bg-brand-red/90 text-white">
          Sign In
        </Button>
      </div>
    </header>
  );
};