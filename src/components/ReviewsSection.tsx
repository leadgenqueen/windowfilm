import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Sarah Mitchell",
    location: "Panama City Beach",
    rating: 5,
    text: "Emerald Coast Window Films transformed our beachfront condo! The heat reduction is incredible, and we can still enjoy our gorgeous Gulf views. Professional installation and excellent customer service.",
    avatar: "SM"
  },
  {
    name: "Mike Rodriguez",
    location: "Destin",
    rating: 5,
    text: "After 30+ years in business, these guys know what they're doing. Our energy bills dropped significantly, and the glare in our home office is completely gone. Highly recommend!",
    avatar: "MR"
  },
  {
    name: "Jennifer Walsh",
    location: "Santa Rosa Beach",
    rating: 5,
    text: "The free consultation was thorough and informative. They showed us samples right on our windows so we knew exactly what to expect. Installation was quick and the results exceeded our expectations.",
    avatar: "JW"
  },
  {
    name: "David Thompson",
    location: "Port St. Joe",
    rating: 5,
    text: "We were worried about the film making our windows too dark, but the team at Emerald Coast helped us choose the perfect tint. Our furniture isn't fading anymore and the house stays so much cooler.",
    avatar: "DT"
  },
  {
    name: "Lisa Chen",
    location: "Panama City",
    rating: 5,
    text: "Commercial property manager here - we've used Emerald Coast for multiple buildings. Always professional, always on time, and the results speak for themselves. Our tenants love the improved comfort.",
    avatar: "LC"
  }
];

export const ReviewsSection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Gulf Coast Neighbors Say
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-trust-gold text-trust-gold" />
            ))}
            <span className="text-2xl font-bold text-foreground ml-2">5.0</span>
            <span className="text-muted-foreground">• 200+ Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.slice(0, 3).map((review, index) => (
            <Card key={index} className="bg-card shadow-card border-0 hover:shadow-premium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-coastal-blue text-white rounded-full flex items-center justify-center font-semibold mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>
                <div className="flex space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-trust-gold text-trust-gold" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-coastal-blue mb-2" />
                <p className="text-card-foreground leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reviews.slice(3, 5).map((review, index) => (
            <Card key={index + 3} className="bg-card shadow-card border-0 hover:shadow-premium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-coastal-blue text-white rounded-full flex items-center justify-center font-semibold mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>
                <div className="flex space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-trust-gold text-trust-gold" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-coastal-blue mb-2" />
                <p className="text-card-foreground leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};