import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import logoUrl from "@/assets/pes-logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Team" },
  { to: "/certificates", label: "Certificates" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img src={logoUrl} alt="PES" className="h-14 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-foreground/70 hover:text-foreground" }}
              className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Get a quote
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="rounded-md p-2 text-foreground lg:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[350px] border-l border-border bg-background/95 backdrop-blur-md p-6 flex flex-col justify-between"
          >
            <div>
              <SheetHeader className="flex flex-row items-center justify-between border-b border-border pb-4">
                <SheetTitle>
                  <img src={logoUrl} alt="PES" className="h-11 w-auto" />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1">
                {NAV.map((n) => (
                  <SheetClose asChild key={n.to}>
                    <Link
                      to={n.to}
                      activeOptions={{ exact: n.to === "/" }}
                      activeProps={{ className: "bg-secondary text-primary" }}
                      inactiveProps={{
                        className: "text-foreground/80 hover:text-foreground hover:bg-accent/50",
                      }}
                      className="rounded-xl px-4 py-3 text-base font-semibold transition-colors"
                    >
                      {n.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    Get a quote →
                  </Link>
                </SheetClose>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
