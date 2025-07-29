import { Gift, CheckCircle, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const OfferSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-coastal text-white border-0 shadow-premium overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <Gift className="w-full h-full" />
            </div>
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                  <Gift className="h-8 w-8 text-accent" />
                  <span className="text-xl font-bold">Limited Time Offer</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Free $500 Window Film Consultation Package
                </h2>
                <p className="text-xl text-coastal-blue-light mb-8">
                  Get everything you need to make the perfect decision — completely free
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-success-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Custom Film Recommendation</h4>
                    <p className="text-sm text-coastal-blue-light">
                      We'll analyze your specific needs and recommend the perfect film for your home or business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-success-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Glass Energy Efficiency Assessment</h4>
                    <p className="text-sm text-coastal-blue-light">
                      Professional evaluation of your current windows and potential energy savings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-success-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">On-Glass Sample Test</h4>
                    <p className="text-sm text-coastal-blue-light">
                      See exactly how the film will look on your windows before you buy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2 text-accent font-semibold">
                  <DollarSign className="h-5 w-5" />
                  <span>No Cost, No Obligation</span>
                </div>
                <div className="flex items-center space-x-2 text-accent font-semibold">
                  <Clock className="h-5 w-5" />
                  <span>Same-Day Quotes Available</span>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button 
                  size="lg" 
                  className="bg-cta-green hover:bg-cta-green-hover text-white shadow-cta text-lg px-8 py-4 h-auto font-semibold"
                  onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book My Free $500 Consultation Now
                </Button>
                <p className="text-sm text-coastal-blue-light mt-4">
                  ⏰ Limited slots available this week
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};