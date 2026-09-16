import { ArrowUpRight, Compass, Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Compass className="size-5" />
              </div>

              <span className="text-xl font-bold">
                Vitala
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Discover new places, explore the outdoors, and find your
              next unforgettable adventure.
            </p>
          </div>

       
          <div>
            <h3 className="font-semibold">
              Explore
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <Link
                to="/about"
                className="transition-colors hover:text-primary"
              >
                About
              </Link>

              <Link
                to="/classes"
                className="transition-colors hover:text-primary"
              >
                Destinations
              </Link>

              <Link
                to="/benefits"
                className="transition-colors hover:text-primary"
              >
                Activities
              </Link>

              <Link
                to="/faq"
                className="transition-colors hover:text-primary"
              >
                FAQ
              </Link>
            </div>
          </div>

        
          <div>
            <h3 className="font-semibold">
              Stay Connected
            </h3>

            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              Follow the journey and discover new places with Vitala.
            </p>

            <div className="mt-5 flex gap-3">
              <button
                type="button"
                className="flex size-10 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:bg-muted"
                aria-label="Instagram"
              >
                <FaInstagram className="size-4" />
              </button>

              <button
                type="button"
                className="flex size-10 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:bg-muted"
                aria-label="Email"
              >
                <Mail className="size-4" />
              </button>

              <button
                type="button"
                className="flex size-10 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:bg-muted"
                aria-label="External link"
              >
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Vitala. All rights reserved.
          </p>

          <p>
            Explore more. Live more.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;