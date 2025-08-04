import Link from "next/link";
import { Sparkles, Instagram, Facebook, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-nowrap">Emily Nails</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-sm md:gap-6">
          <Link
            href="/about"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            O nás
          </Link>
          <Link
            href="/services"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Služby
          </Link>
          <Link
            href="/gallery"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Galéria
          </Link>
          <Link
            href="/contact"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Kontakt
          </Link>
          <Link
            href="/faq"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Časté otázky
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link
            href="https://www.instagram.com/emilyafamily220125/"
            className="text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61573571314613"
            className="text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Emily Nails. <br/> Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  );
}
