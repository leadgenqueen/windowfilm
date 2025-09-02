import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    transactionalConsent: false,
    promotionalConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.transactionalConsent) {
      toast({
        title: "Consent Required",
        description: "Please agree to receive quote information to proceed.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://n8n.powerupstrategy.com/webhook/7f68eefb-6ac6-4a74-8ec8-f4e7a9a0403e", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Handle CORS
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "emerald-coast-window-films",
          page: "consultation-form"
        }),
      });

      // Since we're using no-cors, we won't get a proper response status
      // Show success message and redirect
      toast({
        title: "Success!",
        description: "Your consultation request has been submitted. We'll contact you within 2 hours.",
      });

      // Redirect to thank you page after successful submission
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 1500);

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your request. Please try again or call us directly.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation-form" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Form */}
          <Card className="bg-card shadow-premium border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground">
                Book Your Free Consultation
              </CardTitle>
              <p className="text-lg text-coastal-blue font-semibold">$500 Value — Completely Free</p>
              <p className="text-muted-foreground">
                Get personalized recommendations and see samples on your actual windows
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="border-border"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="(850) 123-4567"
                    className="border-border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your project (optional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Number of windows, type of property, specific concerns..."
                    rows={4}
                    className="border-border"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="transactionalConsent"
                      name="transactionalConsent"
                      checked={formData.transactionalConsent}
                      onChange={handleInputChange}
                      required
                      className="mt-1 h-4 w-4 text-coastal-blue border-border rounded focus:ring-coastal-blue"
                    />
                    <label htmlFor="transactionalConsent" className="text-sm text-foreground">
                      I agree to receive quote information and consultation scheduling details via phone, email, and/or text. *
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="promotionalConsent"
                      name="promotionalConsent"
                      checked={formData.promotionalConsent}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-coastal-blue border-border rounded focus:ring-coastal-blue"
                    />
                    <label htmlFor="promotionalConsent" className="text-sm text-foreground">
                      I would like to receive updates about special offers and window film tips (optional).
                    </label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-cta-green hover:bg-cta-green-hover text-white shadow-cta text-lg py-6 h-auto font-semibold"
                >
                  {isSubmitting ? "Scheduling Your Consultation..." : "Schedule My Free Estimate"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. We will never share your information.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Right Column - Contact Info & Benefits */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-gradient-coastal text-white border-0 shadow-premium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get In Touch Today</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Call for Immediate Service</p>
                      <p className="text-coastal-blue-light">(850) 747-9994</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-coastal-blue-light">info@emeraldcoastwindowfilms.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Service Area</p>
                      <p className="text-coastal-blue-light">Panama City • Destin • Santa Rosa Beach • Port St. Joe</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-coastal-blue-light">Mon-Sat: 8 AM - 6 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="bg-card shadow-card border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-success-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Quick Response</p>
                      <p className="text-muted-foreground text-sm">We'll contact you within 2 hours to schedule</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-success-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">On-Site Assessment</p>
                      <p className="text-muted-foreground text-sm">Professional evaluation of your windows and needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-success-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Sample Testing</p>
                      <p className="text-muted-foreground text-sm">See exactly how each film option looks on your glass</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-success-green flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Custom Quote</p>
                      <p className="text-muted-foreground text-sm">Detailed pricing with no hidden fees</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};