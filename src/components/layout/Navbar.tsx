"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { BrandMark } from "@/components/ui/BrandMark";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  // Track which section is currently in view
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActiveHash(href);
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top solid slate accent bar matching image_2dd496.png exactly */}
      <div className="fixed top-0 left-0 right-0 h-[5px] bg-[#426382] z-50" />

      <header className="fixed top-[5px] left-0 right-0 z-40 bg-[#EAEAEA] border-b border-black/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo BrandMark Container */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center hover:opacity-90 transition-opacity flex-shrink-0"
            >
              <BrandMark compact={false} />
            </a>

            {/* Desktop Navigation Link Cluster */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={cn(
                    "text-xs xl:text-sm font-normal transition-colors duration-200 whitespace-nowrap tracking-wide",
                    activeHash === link.href
                      ? "text-black font-semibold"
                      : "text-black/70 hover:text-black"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Solid Dark Pill CTA Button */}
            <div className="hidden sm:block flex-shrink-0">
              <Button
                size="md"
                className="bg-[#181E29] hover:bg-[#222A3A] text-white font-medium text-xs px-6 py-2.5 rounded-full border-none transition-colors duration-200"
                onClick={() =>
                  document
                    .getElementById("how-to-get")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Buy Lyra
              </Button>
            </div>

            {/* Mobile Hamburger Navigation Trigger */}
            <button
              className="lg:hidden p-2 text-black"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Flyout Menu Panel */}
        <div
          className={cn(
            "lg:hidden bg-[#EAEAEA] border-t border-black/10 overflow-hidden transition-all duration-300",
            menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  activeHash === link.href
                    ? "bg-[#181E29] text-white"
                    : "text-black/70 hover:bg-black/5 hover:text-black"
                )}
              >
                {link.label}
              </a>
            ))}
            <Button 
              className="mt-3 w-full bg-[#181E29] text-white rounded-full text-xs py-2.5" 
              size="md"
              onClick={() => {
                setMenuOpen(false);
                document.getElementById("how-to-get")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Buy Lyra
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
}