import { Play, CheckCircle, Thermometer, Shield, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import resultsImage from "@/assets/results-showcase.jpg";

export const ResultsSection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Feel the Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the dramatic transformation window film makes in Gulf Coast homes. 
            These results are typical of what you can expect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Video Placeholder */}
          <div className="relative">
            <div className="aspect-video rounded-lg shadow-premium overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/E6tOhbjdroY?start=1"
                title="Window Film Transformation Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4 italic">
              "Installed in Hours. Enjoyed for Years."
            </p>
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground">
              Immediate Benefits You'll Notice
            </h3>
            
            <div className="space-y-6">
              <Card className="bg-card shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-coastal rounded-full flex items-center justify-center flex-shrink-0">
                      <Thermometer className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-2">Temperature Drop</h4>
                      <p className="text-muted-foreground">
                        Feel rooms become 5-15°F cooler immediately after installation. 
                        No more hot spots by windows, even during peak Gulf Coast summer heat.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-coastal rounded-full flex items-center justify-center flex-shrink-0">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-2">Eliminated Glare</h4>
                      <p className="text-muted-foreground">
                        Watch TV, work on computers, and read comfortably without squinting. 
                        Perfect for Gulf-facing windows with intense afternoon sun.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-coastal rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-2">Protected Interiors</h4>
                      <p className="text-muted-foreground">
                        99% UV ray blockage means your furniture, flooring, and artwork 
                        stop fading. Preserve your investment for years to come.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-sand-warm p-6 rounded-lg">
              <h4 className="font-bold text-foreground mb-3">Typical Results:</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success-green" />
                  <span>20-30% Energy Savings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success-green" />
                  <span>99% UV Ray Reduction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success-green" />
                  <span>5-15°F Temperature Drop</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success-green" />
                  <span>85% Glare Reduction</span>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full bg-cta-green hover:bg-cta-green-hover text-white shadow-premium text-lg py-4 h-auto font-semibold"
              onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Experience These Results Yourself
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};