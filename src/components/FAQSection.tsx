import { Plus, Minus, Phone } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const faqs = [
  {
    question: "Will window film make my windows too dark?",
    answer: "Not at all! Modern window films can block 99% of UV rays and significant heat while maintaining excellent visibility. We offer films ranging from virtually clear to various tint levels. During our free consultation, we'll show you samples directly on your windows so you can see exactly how each option will look."
  },
  {
    question: "Can I remove the film later if I change my mind?",
    answer: "Yes, professional window film can be removed without damaging your windows. However, with our lifetime residential warranty and the proven benefits our clients experience, removal requests are extremely rare. Most clients are so pleased with the results that they often add film to additional windows."
  },
  {
    question: "Does window film void my window warranty?",
    answer: "Our films are designed to work safely with modern windows and typically don't void warranties when professionally installed. We'll review your specific window manufacturer's guidelines during consultation and ensure compliance. Many window manufacturers actually approve quality films like the ones we install."
  },
  {
    question: "How long does installation take?",
    answer: "Most residential installations are completed in 4-8 hours, depending on the number and size of windows. Commercial projects vary by scope. We work efficiently to minimize disruption to your daily routine, and you can use your windows normally immediately after installation."
  },
  {
    question: "Will window film work on my double-pane or hurricane windows?",
    answer: "Absolutely! We specialize in all window types common to the Gulf Coast, including double-pane, triple-pane, hurricane-rated, and impact-resistant windows. Different window types may require specific films for optimal performance, which we'll determine during your free assessment."
  },
  {
    question: "How much can I expect to save on my energy bills?",
    answer: "Most clients see 20-30% reduction in cooling costs, with some experiencing even greater savings. The exact amount depends on your current windows, home size, and cooling system efficiency. We'll provide a customized energy savings estimate during your free consultation based on your specific situation."
  }
];

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Common Questions About Window Film
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get the answers you need to make an informed decision. Still have questions? 
            Give us a call — we're here to help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card shadow-card border-0">
                <Collapsible 
                  open={openItems.includes(index)}
                  onOpenChange={() => toggleItem(index)}
                >
                  <CollapsibleTrigger className="w-full">
                    <CardContent className="p-6 hover:bg-muted/30 transition-colors duration-200">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-foreground text-left pr-4">
                          {faq.question}
                        </h3>
                        {openItems.includes(index) ? (
                          <Minus className="h-6 w-6 text-coastal-blue flex-shrink-0" />
                        ) : (
                          <Plus className="h-6 w-6 text-coastal-blue flex-shrink-0" />
                        )}
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <div className="border-t border-border pt-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Card className="bg-gradient-coastal text-white border-0 shadow-premium inline-block">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-coastal-blue-light mb-6">
                  Our window film experts are standing by to answer any questions 
                  and provide personalized recommendations for your property.
                </p>
                <button 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-cta transition-all duration-300 inline-flex items-center space-x-2"
                  onClick={() => window.location.href = "tel:8507479994"}
                >
                  <Phone className="h-5 w-5" />
                  <span>Call (850) 747-9994 Now</span>
                </button>
                <p className="text-sm text-coastal-blue-light mt-4">
                  Available Monday-Saturday, 8 AM - 6 PM
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};