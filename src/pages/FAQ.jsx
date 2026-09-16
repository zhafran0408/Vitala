import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { images } from "../data/images";

function FAQ() {
  const questions = [
    {
      question: "What is Vitala?",
      answer:
        "Vitala is an adventure platform for discovering destinations, outdoor activities, and inspiration for your next journey.",
    },
    {
      question: "Do I need to be an experienced adventurer?",
      answer:
        "Not at all. Adventure can be as simple as exploring a new trail, visiting a new place, or spending time outdoors.",
    },
    {
      question: "What activities can I discover?",
      answer:
        "Vitala focuses on activities such as hiking, camping, photography, backpacking, exploration, and other outdoor experiences.",
    },
    {
      question: "Can I use Vitala to plan a trip?",
      answer:
        "Yes. The goal of Vitala is to help you discover ideas and destinations that can inspire your next trip.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              FAQ
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
              Questions?
              <br />
              We've got you.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Everything you need to know before starting your next
              adventure.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={images.faq}
              alt="Mountain landscape"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion
            type="single"
            collapsible
          >
            {questions.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
              >
                <AccordionTrigger className="text-left text-base font-semibold">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="leading-7 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FAQ;