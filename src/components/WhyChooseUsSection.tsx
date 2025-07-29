import { Users, Calendar, Shield, Award, MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: Users,
    number: "1000+",
    label: "Satisfied Clients",
    description: "Gulf Coast families and businesses trust us"
  },
  {
    icon: Calendar,
    number: "30+",
    label: "Years Experience",
    description: "Three decades of window film expertise"
  },
  {
    icon: Shield,
    number: "Lifetime",
    label: "Warranty",
    description: "Residential installations backed for life"
  },
  {
    icon: Award,
    number: "A+",
    label: "BBB Rating",
    description: "Better Business Bureau accredited"
  }
];

const trustFactors = [
  "Licensed and insured in Florida",
  "Manufacturer-certified installers",
  "Same-day quotes available",
  "Transparent pricing, no hidden fees",
  "Local family-owned business",
  "Emergency service available"
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why <span className="text-coastal-blue">Emerald Coast Window Films</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 30 years, we've been the Gulf Coast's trusted choice for premium window film solutions. 
            Here's why your neighbors choose us again and again.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card shadow-card border-0 text-center group hover:shadow-premium transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-coastal rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-coastal-blue mb-2">{stat.number}</h3>
                <p className="font-semibold text-foreground mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Trust Factors */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Trusted by Local Hospitals, Condo Boards, and Business Owners
            </h3>
            <div className="space-y-4 mb-8">
              {trustFactors.map((factor, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success-green rounded-full flex-shrink-0"></div>
                  <p className="text-foreground">{factor}</p>
                </div>
              ))}
            </div>
            <div className="bg-sand-warm p-6 rounded-lg">
              <h4 className="font-bold text-foreground mb-3">What Makes Us Different:</h4>
              <p className="text-foreground italic">
                "We don't just install window film — we solve problems. Every job gets our personal attention, 
                from the initial consultation to the final walkthrough. That's why 90% of our business comes 
                from referrals and repeat customers."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                — Mark Johnson, Owner & Founder
              </p>
            </div>
          </div>

          {/* Right Column - Notable Clients */}
          <div>
            <Card className="bg-gradient-coastal text-white border-0 shadow-premium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Trusted by Leading Organizations</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Gulf Coast Regional Medical Center</p>
                      <p className="text-sm text-coastal-blue-light">Complete facility window film installation</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold">The Shores at Panama City Beach</p>
                      <p className="text-sm text-coastal-blue-light">150+ condo units, ongoing maintenance</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Destin Commons Shopping Center</p>
                      <p className="text-sm text-coastal-blue-light">Commercial storefront window film</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Santa Rosa Beach City Hall</p>
                      <p className="text-sm text-coastal-blue-light">Energy efficiency government contract</p>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-trust-gold text-trust-gold" />
                    ))}
                  </div>
                  <p className="text-coastal-blue-light text-sm">
                    Join 1000+ satisfied customers across the Gulf Coast
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Experience the Emerald Coast Difference?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Get your free consultation and see why we're the Gulf Coast's #1 choice for window film.
          </p>
          <Button 
            size="lg" 
            className="bg-coastal-blue hover:bg-ocean-deep text-white shadow-premium text-lg px-8 py-4 h-auto font-semibold"
            onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get My Free Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
};