import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { MapPin, Phone, Clock, Star, Instagram, Pizza, Flame, Send, Menu } from "lucide-react";
import heroPizza from "@/assets/hero-pizza.jpg";
import { bestsellers, categories, formatPrice } from "@/data/menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error("Molimo popunite ime i poruku.");
      return;
    }
    toast.success("Hvala! Javićemo vam se uskoro.");
    setForm({ name: "", email: "", message: "" });
  };

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.0303102450414!2d20.36842817666249!3d44.80057587107147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6fc93ff53f13%3A0x5409c7b4df8fe070!2sPremium%20Pizza%20i%20Ne%C5%A1to%20Lagano!5e0!3m2!1sen!2srs!4v1715856488331!5m2!1sen!2srs`;

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-display text-xl font-bold">
            <Pizza className="h-6 w-6 text-primary" />
            <span>Premium Pizza</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="hover:text-primary transition-colors">Meni</a>
            <a href="#about" className="hover:text-primary transition-colors">O nama</a>
            <a href="#contact" className="hover:text-primary transition-colors">Kontakt</a>
            <a href="#contact" className="hover:text-primary transition-colors">Lokacija</a>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild size="sm" className="bg-gradient-warm shadow-warm">
              <a href="tel:+381693345455"><Phone className="h-4 w-4" />Poruči</a>
            </Button>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-12">
                  <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium hover:text-primary transition-colors">Meni</a>
                  <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium hover:text-primary transition-colors">O nama</a>
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium hover:text-primary transition-colors">Kontakt</a>
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium hover:text-primary transition-colors">Lokacija</a>
                  <Button asChild className="bg-gradient-warm mt-4">
                    <a href="tel:+381693345455" onClick={() => setIsMobileMenuOpen(false)}><Phone className="h-4 w-4" /> Pozovite nas</a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroPizza} alt="Autentična italijanska pica" width={1536} height={1536} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center py-20">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="font-medium">4.9 ocena · 141 recenzija</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
              Premium Pizza
              <span className="block italic text-3xl md:text-5xl mt-2 text-gradient-gold">i Nešto Lagano</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-lg leading-relaxed">
              Autentična pica i lagani obroci u srcu Novog Beograda. Dostava i preuzimanje na licu mesta.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-warm shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105">
                <a href="#menu"><Flame className="h-5 w-5" /> Pogledaj meni</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/5 backdrop-blur-sm border-white/30 text-white hover:bg-white/15">
                <a href="tel:+381693345455"><Phone className="h-5 w-5" /> +381 69 3345455</a>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              {[
                { icon: Clock, label: "Radno vreme", value: "Uto–Ned 13:00–23:00" },
                { icon: MapPin, label: "Lokacija", value: "Jurija Gagarina 208" },
                { icon: Pizza, label: "Cene", value: "500 – 1800 RSD" },
                { icon: Star, label: "Rejting", value: "4.9 / 5.0" },
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <item.icon className="h-5 w-5 text-accent mb-2" />
                  <div className="text-xs uppercase tracking-wider text-white/60 mb-1">{item.label}</div>
                  <div className="text-sm font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container grid md:grid-cols-3 gap-8 text-center">
          {[
            { num: "10+", label: "Godina iskustva" },
            { num: "4.9★", label: "Ocena gostiju" },
            { num: "100%", label: "Domaće testo" },
          ].map((s) => (
            <div key={s.label} className="space-y-2">
              <div className="font-display text-6xl font-bold text-gradient-warm">{s.num}</div>
              <div className="text-muted-foreground uppercase text-sm tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Naš Meni</div>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">Najtraženije</h2>
            <p className="text-muted-foreground text-lg">
              Bestseleri koje gosti najčešće naručuju. Skrolujte horizontalno i izaberite favorita.
            </p>
          </div>

          {/* Horizontal scroll bestsellers with Carousel */}
          <div className="relative mb-20">
            <Carousel
              opts={{
                align: "start",
                loop: false,
                breakpoints: {
                  "(min-width: 1024px)": { slidesToScroll: 3 },
                  "(min-width: 640px)": { slidesToScroll: 2 },
                },
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {bestsellers.map((item) => (
                  <CarouselItem key={item.name} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <article
                      className="group h-full overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-warm transition-all duration-300 hover:-translate-y-1 flex flex-col"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        <img
                          src={item.img}
                          alt={`${item.name} — ${item.desc}`}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg">
                          ★ Bestseller
                        </span>
                        {item.tag && (
                          <span className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-foreground border border-border font-medium">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-display text-xl font-bold mb-2 leading-tight">{item.name}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-1 line-clamp-3">{item.desc}</p>
                        <div className="flex items-center justify-between pt-3 border-t border-border">
                          <span className="font-display text-xl font-bold text-gradient-warm">{formatPrice(item.price)}</span>
                          <Pizza className="h-4 w-4 text-primary opacity-50 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
                        </div>
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation Arrows - Now centered below for all screen sizes */}
              <div className="flex justify-center gap-4 mt-10">
                <CarouselPrevious className="static translate-y-0 h-12 w-12 border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300" />
                <CarouselNext className="static translate-y-0 h-12 w-12 border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300" />
              </div>
            </Carousel>
          </div>

          {/* Full menu by category */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">Kompletan meni</h3>
            <p className="text-muted-foreground">Kliknite na kategoriju da otkrijete sva jela sa sastojcima i cenama.</p>
          </div>

          <Accordion type="multiple" className="max-w-5xl mx-auto space-y-4">
            {categories.map((cat) => (
              <AccordionItem
                key={cat.key}
                value={cat.key}
                className="border border-border rounded-2xl bg-card px-5 md:px-6 overflow-hidden"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl md:text-3xl font-bold">{cat.label}</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-medium">
                      {cat.items.length}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  {cat.type === "pizza" ? (
                    <>
                      <div className="hidden md:flex justify-end gap-6 px-4 mb-3 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                        <span className="w-20 text-right">24cm</span>
                        <span className="w-20 text-right">32cm</span>
                        <span className="w-20 text-right">42cm</span>
                      </div>
                      <ul className="divide-y divide-border">
                        {cat.items.map((item) => (
                          <li key={item.name} className="py-4 flex flex-col md:flex-row md:items-center gap-4">
                            <img
                              src={item.img}
                              alt={item.name}
                              loading="lazy"
                              className="w-full md:w-20 md:h-20 h-44 object-cover rounded-xl bg-muted shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-display text-lg font-bold">{item.name}</h4>
                              <p className="text-sm text-muted-foreground leading-snug mt-0.5">{item.desc}</p>
                            </div>
                            <div className="flex md:justify-end gap-6 text-sm font-semibold">
                              {(["24cm", "32cm", "42cm"] as const).map((size) => (
                                <div key={size} className="md:w-20 text-right">
                                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground md:hidden">{size}</div>
                                  <div className="text-foreground">
                                    {item.prices[size] ? `${item.prices[size]?.toLocaleString("sr-RS")}` : "—"}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-muted-foreground text-right mt-3">Cene su izražene u RSD.</p>
                    </>
                  ) : (
                    <ul className="divide-y divide-border">
                      {cat.items.map((item) => (
                        <li key={item.name} className="py-4 flex flex-col md:flex-row md:items-center gap-4">
                          <img
                            src={item.img}
                            alt={item.name}
                            loading="lazy"
                            className="w-full md:w-20 md:h-20 h-44 object-cover rounded-xl bg-muted shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-display text-lg font-bold">{item.name}</h4>
                            <p className="text-sm text-muted-foreground leading-snug mt-0.5">{item.desc}</p>
                          </div>
                          <div className="md:text-right">
                            <span className="font-display text-lg font-bold text-gradient-warm">{formatPrice(item.price)}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACT + MAP */}
      <section id="contact" className="py-24 bg-secondary">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Kontakt</div>
            <h2 className="font-display text-5xl font-bold mb-6">Javite nam se</h2>
            <p className="text-muted-foreground mb-8 text-lg">Imate pitanje, rezervaciju ili specijalnu narudžbinu? Pišite nam.</p>

            <form onSubmit={handleSubmit} className="space-y-4 mb-10">
              <Input placeholder="Vaše ime" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-12 bg-card" />
              <Input type="email" placeholder="Email (opciono)" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-12 bg-card" />
              <Textarea placeholder="Vaša poruka..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="bg-card resize-none" />
              <Button type="submit" size="lg" className="w-full bg-gradient-warm shadow-warm hover:shadow-glow transition-all">
                <Send className="h-4 w-4" /> Pošalji poruku
              </Button>
            </form>

            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Jurija Gagarina 208, Novi Beograd, 11070" },
                { icon: Phone, label: "+381 69 3345455" },
                { icon: Clock, label: "Utorak – Nedelja: 13:00 – 23:00 (Pon. zatvoreno)" },
                { icon: Instagram, label: "Pratite nas na Instagramu" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="h-10 w-10 rounded-full bg-gradient-warm flex items-center justify-center shrink-0">
                    <c.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="location" className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-warm border border-border h-[500px] lg:h-full min-h-[500px]">
              <iframe
                title="Lokacija Premium Pizza"
                src={mapUrl}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Premium+Pizza+i+Nešto+Lagano+Jurija+Gagarina+208+Beograd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
            >
              <MapPin className="h-4 w-4" /> Otvori veću mapu
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <Pizza className="h-6 w-6 text-accent" />
            <span>Premium Pizza i Nešto Lagano</span>
          </div>
          <p className="text-sm text-background/60">© {new Date().getFullYear()} · Novi Beograd · Sva prava zadržana</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
