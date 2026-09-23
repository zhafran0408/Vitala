import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

function FAQ() {
  const generalQuestions = [
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
  ];

  const destinationQuestions = [
    {
      question: "Can I use Vitala to plan a trip?",
      answer:
        "Yes. The goal of Vitala is to help you discover ideas and destinations that can inspire your next trip.",
    },
    {
      question: "How do I choose a destination?",
      answer:
        "Start with the kind of experience you want. Explore mountains, forests, coastlines, and other destinations to find something that fits your journey.",
    },
    {
      question: "Are the destinations suitable for beginners?",
      answer:
        "Each destination can offer a different level of adventure. Always consider the conditions, difficulty, and preparation needed before starting a journey.",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* HERO */}
      <section className="px-6 pb-16 pt-20 sm:px-10 sm:pb-20 sm:pt-24 lg:px-16 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                FAQ
              </p>

              <h1 className="mt-5 text-6xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                Questions?
                <br />
                <span className="text-muted-foreground">
                  We've got answers.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                Everything you need to know before starting your next
                adventure with Vitala.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
            

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="border-y">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28">
          {/* SEARCH */}
          <div className="mb-16">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

              <input
                type="text"
                placeholder="Search a question..."
                className="h-14 w-full rounded-full border bg-background pl-13 pr-6 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
              />
            </div>
          </div>

          {/* GENERAL */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                General
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              className="border-t"
            >
              {generalQuestions.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`general-${index}`}
                >
                  <AccordionTrigger className="py-6 text-left text-base font-semibold hover:no-underline sm:text-lg">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent className="max-w-3xl pb-7 text-sm leading-7 text-muted-foreground sm:text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* DESTINATIONS */}
          <div className="mt-20">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Destinations
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              className="border-t"
            >
              {destinationQuestions.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`destination-${index}`}
                >
                  <AccordionTrigger className="py-6 text-left text-base font-semibold hover:no-underline sm:text-lg">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent className="max-w-3xl pb-7 text-sm leading-7 text-muted-foreground sm:text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Still curious?
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Your next adventure is out there.
            </h2>
          </div>

          <Link
            to="/classes"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-1"
          >
            Explore destinations
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FAQ;