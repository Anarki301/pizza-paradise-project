import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Clock, Star, Instagram, Pizza, Flame, Send, ChevronDown, ChevronUp } from "lucide-react";
import heroPizza from "@/assets/hero-pizza.jpg";
import imgCapricciosa from "@/assets/menu-capricciosa.jpg";
import imgPeperoni from "@/assets/menu-peperoni.jpg";
import imgVesuvio from "@/assets/menu-vesuvio.jpg";
import imgMargherita from "@/assets/menu-margherita.jpg";
import imgQuattro from "@/assets/menu-quattro.jpg";
import imgFunghi from "@/assets/menu-funghi.jpg";
import imgStagioni from "@/assets/menu-stagioni.jpg";
import imgPalSlane from "@/assets/menu-palacinke-slane.jpg";
import imgPalSlatke from "@/assets/menu-palacinke-slatke.jpg";

type MenuItem = { name: string; desc: string; price: string; tag: string; img: string; bestseller?: boolean };

const menuItems: MenuItem[] = [
  { name: "Capricciosa", desc: "Pelat, mocarela, šunka, šampinjoni, masline", price: "950 RSD", tag: "Klasika", img: imgCapricciosa, bestseller: true },
  { name: "Peperoni", desc: "Pelat, mocarela, ljuta peperoni salama", price: "980 RSD", tag: "Ljuto", img: imgPeperoni, bestseller: true },
  { name: "Vesuvio", desc: "Pelat, mocarela, šunka, origano", price: "900 RSD", tag: "Omiljeno", img: imgVesuvio, bestseller: true },
  { name: "Margherita", desc: "Pelat, mocarela, svež bosiljak", price: "780 RSD", tag: "Vege", img: imgMargherita },
  { name: "Quattro Formaggi", desc: "Četiri vrste sira — gorgonzola, parmezan, mocarela, edamer", price: "1100 RSD", tag: "Sir", img: imgQuattro },
  { name: "Funghi", desc: "Pelat, mocarela, sveži šampinjoni, origano", price: "850 RSD", tag: "Vege", img: imgFunghi },
  { name: "Quattro Stagioni", desc: "Šunka, šampinjoni, artičoke, masline", price: "1050 RSD", tag: "Bogato", img: imgStagioni },
  { name: "Slane palačinke", desc: "Šunka, sir, pavlaka — bogat izbor", price: "550 RSD", tag: "Lagano", img: imgPalSlane },
  { name: "Slatke palačinke", desc: "Nutella, lešnik, banana, džem", price: "500 RSD", tag: "Slatko", img: imgPalSlatke },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showFullMenu, setShowFullMenu] = useState(false);
  const visibleMenu = showFullMenu ? menuItems : menuItems.filter((m) => m.bestseller);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error("Molimo popunite ime i poruku.");
      return;
    }
    toast.success("Hvala! Javićemo vam se uskoro.");
    setForm({ name: "", email: "", message: "" });
  };

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=20.366%2C44.797%2C20.376%2C44.804&layer=mapnik&marker=44.8005721%2C20.3710031`;

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
            <a href="#location" className="hover:text-primary transition-colors">Lokacija</a>
          </div>
          <Button asChild size="sm" className="bg-gradient-warm shadow-warm">
            <a href="tel:+381693345455"><Phone className="h-4 w-4" />Poruči</a>
          </Button>
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
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">Naš Meni</div>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">Pažljivo odabrana jela</h2>
            <p className="text-muted-foreground text-lg">Od klasične pice u italijanskom stilu do laganih palačinki — svako jelo pripremamo sa svežim sastojcima.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <article key={item.name} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-2xl font-bold">{item.name}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-accent/15 text-accent-foreground border border-accent/30 font-medium">{item.tag}</span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{item.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-display text-2xl font-bold text-gradient-warm">{item.price}</span>
                  <Pizza className="h-5 w-5 text-primary opacity-50 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
                </div>
              </article>
            ))}
          </div>
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
              href="https://www.openstreetmap.org/?mlat=44.8005721&mlon=20.3710031#map=18/44.8005721/20.3710031"
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
