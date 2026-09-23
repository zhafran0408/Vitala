import { Compass } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-xl">
      <div className="flex h-16 items-center px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Compass className="size-5" />
          </div>

          <span className="text-lg font-bold tracking-tight">
            Vitala
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;