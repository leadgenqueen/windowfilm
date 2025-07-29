import { Star, Shield, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneButton } from "./PhoneButton";
import heroImage from "@/assets/hero-coastal-home.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Phone Number Header */}
        <div className="mb-6">
          <p className="text-lg md:text-xl font-semibold bg-accent/90 text-accent-foreground inline-block px-6 py-2 rounded-full shadow-cta">
            📞 Call Now for Same-Day Quote – (850) 747-9994
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Window Film That Beats the Heat —{" "}
          <span className="text-sand-warm">Without Blocking Your View</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-8 text-coastal-blue-light font-medium">
          Serving Panama City, Santa Rosa Beach, and the Gulf Coast for Over 30 Years
        </p>

        {/* Google Rating */}
        <div className="flex items-center justify-center mb-6 space-x-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-trust-gold text-trust-gold" />
          ))}
          <span className="text-lg font-semibold ml-2">5.0 Google Rating</span>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8 text-sm md:text-base">
          <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Shield className="h-5 w-5 text-success-green" />
            <span>Fully Insured</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <DollarSign className="h-5 w-5 text-success-green" />
            <span>No Hidden Fees</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Users className="h-5 w-5 text-success-green" />
            <span>1000+ Happy Clients</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-cta-green hover:bg-cta-green-hover text-white shadow-cta text-lg px-8 py-4 h-auto font-semibold"
            onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get My Free Consultation ($500 Value)
          </Button>
          <PhoneButton variant="hero" />
        </div>
      </div>
    </section>
  );
};