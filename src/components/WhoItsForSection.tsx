import { Home, Building2, Waves } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhoItsForSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            If You're Tired of Heat, Glare, and Fading Interiors —{" "}
            <span className="text-coastal-blue">This is For You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're protecting your family home, beachfront investment, or commercial property, 
            our premium window films deliver results you can feel immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Homeowners */}
          <Card className="bg-card shadow-card border-0 hover:shadow-premium transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-coastal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Home className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Gulf Coast Homeowners</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coastal-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">Cut cooling costs by up to 30%</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coastal-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">Eliminate hot spots and glare</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coastal-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">Protect furniture from UV damage</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coastal-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">Gain privacy without losing natural light</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coastal-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">Lifetime residential warranty included</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Beachfront Condo Owners */}
          <Card className="bg-card shadow-card border-0 hover:shadow-premium transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-coastal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Waves className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Beachfront Condo Owners</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coastal-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">Keep your million-dollar Gulf views crystal clear</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coastal-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">Block 99% of UV rays without darkening</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coastal-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">Reduce salt air corrosion on interiors</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coastal-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">Maintain rental property value</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coastal-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">HOA-approved, hurricane-resistant options</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Commercial Spaces */}
          <Card className="bg-card shadow-card border-0 hover:shadow-premium transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-coastal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Commercial Property Managers</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coastal-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">Immediate ROI through energy savings</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coastal-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">Increase tenant satisfaction and retention</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coastal-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">Professional appearance and curb appeal</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coastal-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">Security and privacy benefits</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-coastal-blue rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">Flexible payment and maintenance plans</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <p className="text-xl text-muted-foreground mb-6">
            Ready to experience the difference professional window film makes?
          </p>
          <button 
            className="bg-cta-green hover:bg-cta-green-hover text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-premium transition-all duration-300"
            onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get My Free Quote Today
          </button>
        </div>
      </div>
    </section>
  );
};