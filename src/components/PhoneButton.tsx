import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PhoneButtonProps {
  variant?: "hero" | "sticky" | "inline";
  className?: string;
}

export const PhoneButton = ({ variant = "inline", className = "" }: PhoneButtonProps) => {
  const baseClasses = "font-semibold transition-all duration-300";
  
  const variantClasses = {
    hero: "bg-accent hover:bg-accent/90 text-accent-foreground shadow-cta text-lg px-8 py-4 h-auto",
    sticky: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-premium fixed bottom-4 right-4 z-50 rounded-full p-4 md:hidden",
    inline: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-premium"
  };

  const handleCall = () => {
    window.location.href = "tel:8507479994";
  };

  if (variant === "sticky") {
    return (
      <Button 
        onClick={handleCall}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        size="lg"
        aria-label="Call Emerald Coast Window Films"
      >
        <Phone className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Button 
      onClick={handleCall}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      size={variant === "hero" ? "lg" : "default"}
    >
      <Phone className="mr-2 h-5 w-5" />
      Call Now: (850) 747-9994
    </Button>
  );
};