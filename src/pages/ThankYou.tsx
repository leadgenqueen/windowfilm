import { CheckCircle, Phone, Calendar, Star, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneButton } from "@/components/PhoneButton";
import { Footer } from "@/components/Footer";
import logoImage from "@/assets/emerald-coast-logo-updated.png";
import verifiedReviewsImage from "@/assets/verified-google-reviews.png";

export const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <div className="bg-gradient-coastal text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <img src={logoImage} alt="Emerald Coast Window Films" className="h-12 md:h-16" />
            <PhoneButton variant="inline" className="bg-accent hover:bg-accent/90 text-accent-foreground" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Main Thank You Message */}
          <Card className="bg-card shadow-premium border-0 mb-12">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-success-green rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Thank You!
              </h1>
              
              <p className="text-xl text-coastal-blue font-semibold mb-4">
                Your Free $500 Consultation Has Been Scheduled
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We've received your request and one of our window film experts will contact you within 
                the next 2 hours to schedule your personalized consultation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                  <Phone className="h-8 w-8 text-coastal-blue mb-2" />
                  <h3 className="font-semibold text-foreground">Quick Contact</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    We'll call within 2 hours to schedule
                  </p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                  <Calendar className="h-8 w-8 text-coastal-blue mb-2" />
                  <h3 className="font-semibold text-foreground">Free Assessment</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Professional evaluation at your property
                  </p>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                  <Shield className="h-8 w-8 text-coastal-blue mb-2" />
                  <h3 className="font-semibold text-foreground">Custom Quote</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Personalized pricing, no hidden fees
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What Happens Next */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card shadow-card border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">What Happens Next?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-coastal-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Confirmation Call</h4>
                      <p className="text-muted-foreground text-sm">
                        Within 2 hours, we'll call to confirm your information and schedule your consultation at a convenient time.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-coastal-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">On-Site Visit</h4>
                      <p className="text-muted-foreground text-sm">
                        Our expert will visit your property to assess your windows and show you film samples directly on your glass.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-coastal-blue text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Custom Proposal</h4>
                      <p className="text-muted-foreground text-sm">
                        Receive a detailed quote with film recommendations, energy savings projections, and installation timeline.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-coastal text-white border-0 shadow-premium">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Need Immediate Assistance?</h2>
                <p className="text-coastal-blue-light mb-6">
                  Have urgent questions or need to speak with us right away? 
                  Don't wait for our call – reach out now!
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span className="font-semibold">(850) 747-9994</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <span>Monday-Saturday, 8 AM - 6 PM</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-cta-green hover:bg-cta-green-hover text-white shadow-cta font-semibold"
                  onClick={() => window.location.href = "tel:8507479994"}
                >
                  Call Now for Immediate Service
                </Button>
                
                <p className="text-sm text-coastal-blue-light mt-4 text-center">
                  After hours? Leave a voicemail and we'll call you first thing in the morning.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Social Proof */}
          <Card className="bg-card shadow-card border-0 mb-8">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Join 1000+ Satisfied Gulf Coast Customers
              </h2>
              
              <div className="flex items-center justify-center mb-6">
                <img src={verifiedReviewsImage} alt="Verified Google Reviews" className="max-h-20 object-contain" />
              </div>

              <div className="flex items-center justify-center space-x-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-trust-gold text-trust-gold" />
                ))}
                <span className="text-2xl font-bold text-foreground ml-2">5.0</span>
                <span className="text-muted-foreground">Google Rating</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-coastal-blue mb-2">1000+</div>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coastal-blue mb-2">30+</div>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-coastal-blue mb-2">A+</div>
                  <p className="text-muted-foreground">BBB Rating</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ThankYouPage;