import imgMargarita from "@/assets/menu/margarita.png";
import imgVesuvio from "@/assets/menu/vesuvio.png";
import imgFunghi from "@/assets/menu/funghi.png";
import imgCapricciosa from "@/assets/menu/capricciosa.png";
import imgCinqueFormaggi from "@/assets/menu/cinque-formaggi.png";
import imgQuattroStagioni from "@/assets/menu/quattro-stagioni.png";
import imgQuattroCarni from "@/assets/menu/quattro-carni.png";
import imgDiavola from "@/assets/menu/diavola.png";
import imgSrbijana from "@/assets/menu/srbijana.png";
import imgCapone from "@/assets/menu/capone.png";
import imgPeperoni from "@/assets/menu/peperoni.png";
import imgKontadita from "@/assets/menu/kontadita.png";
import imgBaconDoubleCheese from "@/assets/menu/bacon-double-cheese.png";
import imgVegetariana from "@/assets/menu/vegetariana.png";
import imgArabiata from "@/assets/menu/arabiata.png";
import imgMesnata from "@/assets/menu/mesnata.png";
import imgProsciuttoCrudo from "@/assets/menu/prosciutto-crudo.png";

import imgSendvicCezar from "@/assets/menu/sendvic-cezar.png";
import imgSendvicBeef from "@/assets/menu/sendvic-beef.png";
import imgSendvicVege from "@/assets/menu/sendvic-vege.png";
import imgSendvicClassic from "@/assets/menu/sendvic-classic.png";
import imgSendvicKulen from "@/assets/menu/sendvic-kulen.png";
import imgSendvicPrsuta from "@/assets/menu/sendvic-prsuta.png";

import imgPastaVege from "@/assets/menu/pasta-vege.png";
import imgPastaCarbonara from "@/assets/menu/pasta-carbonara.png";
import imgPastaArabiata from "@/assets/menu/pasta-arabiata.png";
import imgPastaTikiPil from "@/assets/menu/pasta-tiki-pil.png";
import imgPastaSpicyBeef from "@/assets/menu/pasta-spicy-beef.png";

import imgObrokSalataCezar from "@/assets/menu/obrok-salata-cezar.png";
import imgObrokSalataBeef from "@/assets/menu/obrok-salata-beef.png";

import imgTortiljaPileca from "@/assets/menu/tortilja-pileca.png";
import imgTortiljaBeef from "@/assets/menu/tortilja-beef.png";
import imgTortiljaVege from "@/assets/menu/tortilja-vege.png";

import imgPomfrit from "@/assets/menu/pomfrit.png";

import imgPalacinkaNutella from "@/assets/menu/palacinka-nutella.png";
import imgPalacinkaEurokrem from "@/assets/menu/palacinka-eurokrem.png";

import imgCoca033 from "@/assets/menu/coca-cola-0-33l.png";
import imgCocaZero033 from "@/assets/menu/coca-cola-zero-0-33l.png";
import imgCoca05 from "@/assets/menu/coca-cola-0-5l.png";
import imgCoca15 from "@/assets/menu/coca-cola-1-5l.png";
import imgCocaZero15 from "@/assets/menu/coca-cola-zero-1-5l.png";
import imgHeineken from "@/assets/menu/heineken-0-5l.png";

export type SimpleItem = {
  name: string;
  desc: string;
  price: number;
  img: string;
};

export type PizzaItem = {
  name: string;
  desc: string;
  prices: { "24cm"?: number; "32cm"?: number; "42cm"?: number };
  img: string;
};

export type BestsellerItem = SimpleItem & { tag?: string };

export const bestsellers: BestsellerItem[] = [
  { name: "Diavola 32cm", desc: "Pelat, kačkavalj, kulen, crvena slatka paprika, feferone, pavlaka, origano, masline", price: 1090, img: imgDiavola, tag: "Ljuto" },
  { name: "Tortilja Beef", desc: "Biftek, čedar, ajzberg, burger dresing, paradajz", price: 850, img: imgTortiljaBeef, tag: "Hit" },
  { name: "Sendvič Beef", desc: "Biftek, ajzberg, čeri, čedar, burger dresing, parmezan", price: 690, img: imgSendvicBeef, tag: "Beef" },
  { name: "Obrok salata Beef", desc: "Biftek, rukola, ajzberg, čeri, čedar dresing", price: 950, img: imgObrokSalataBeef, tag: "Lagano" },
  { name: "Palačinka Nutella", desc: "Klasika koja nikad ne razočara", price: 350, img: imgPalacinkaNutella, tag: "Slatko" },
  { name: "Vegetariana 32cm", desc: "Pelat, kačkavalj, tikvice, pečurke, rukola, crveni luk, čeri, masline, origano", price: 990, img: imgVegetariana, tag: "Vege" },
  { name: "Capricciosa 42cm", desc: "Pelat, kačkavalj, šunka, pečurke, masline, origano", price: 1350, img: imgCapricciosa, tag: "Klasika" },
  { name: "Capricciosa 32cm", desc: "Pelat, kačkavalj, šunka, pečurke, masline, origano", price: 1090, img: imgCapricciosa, tag: "Klasika" },
  { name: "Quattro Carni 42cm", desc: "Pelat, kačkavalj, šunka, kulen, slanina, pršuta, masline, origano", price: 1590, img: imgQuattroCarni, tag: "Mesnato" },
  { name: "Pasta Spicy Beef", desc: "Pelat, biftek, peperončino, parmezan", price: 950, img: imgPastaSpicyBeef, tag: "Ljuto" },
  { name: "Sendvič Classic", desc: "Šunka, pavlaka, kačkavalj, paradajz, parmezan, ajzberg", price: 520, img: imgSendvicClassic, tag: "Klasika" },
];

export const pizzas: PizzaItem[] = [
  { name: "Margarita", desc: "Pelat, kačkavalj, bosiljak, masline", prices: { "24cm": 550, "32cm": 990, "42cm": 1190 }, img: imgMargarita },
  { name: "Vesuvio", desc: "Pelat, kačkavalj, šunka, origano, masline", prices: { "24cm": 590, "32cm": 1050, "42cm": 1250 }, img: imgVesuvio },
  { name: "Funghi", desc: "Pelat, kačkavalj, pečurke, masline, origano", prices: { "24cm": 590, "32cm": 1050, "42cm": 1250 }, img: imgFunghi },
  { name: "Capricciosa", desc: "Pelat, kačkavalj, šunka, pečurke, masline, origano", prices: { "24cm": 650, "32cm": 1090, "42cm": 1350 }, img: imgCapricciosa },
  { name: "Cinque Formaggi", desc: "Krema, kačkavalj, gorgonzola, dimljeni sir, čedar sir, masline, origano", prices: { "24cm": 670, "32cm": 1190, "42cm": 1490 }, img: imgCinqueFormaggi },
  { name: "Quattro Stagioni", desc: "Pelat, kačkavalj, kulen, šunka, pečurke, jaje, parmezan, masline, origano", prices: { "24cm": 670, "32cm": 1390, "42cm": 1490 }, img: imgQuattroStagioni },
  { name: "Quattro Carni", desc: "Pelat, kačkavalj, šunka, kulen, slanina, pršuta, masline, origano", prices: { "24cm": 590, "32cm": 1290, "42cm": 1590 }, img: imgQuattroCarni },
  { name: "Diavola", desc: "Pelat, kačkavalj, kulen, crvena slatka paprika, feferone, pavlaka, origano, masline", prices: { "24cm": 650, "32cm": 1090, "42cm": 1350 }, img: imgDiavola },
  { name: "Srbijana", desc: "Pelat, kačkavalj, šunka, slanina, pršuta, kajmak, feferone, origano, masline", prices: { "24cm": 690, "32cm": 1350, "42cm": 1650 }, img: imgSrbijana },
  { name: "Capone", desc: "Krema, kačkavalj, pršuta, kulen, crveni luk, parmezan, čeri, masline, origano", prices: { "24cm": 680, "32cm": 1250, "42cm": 1550 }, img: imgCapone },
  { name: "Peperoni", desc: "Pelat, kačkavalj, kulen, feferone, masline, origano", prices: { "24cm": 650, "32cm": 1090, "42cm": 1350 }, img: imgPeperoni },
  { name: "Kontadita", desc: "Pelat, kačkavalj, pečurke, slanina, čeri, rukola, kajmak, masline, origano", prices: { "24cm": 690, "32cm": 1290, "42cm": 1590 }, img: imgKontadita },
  { name: "Bacon Double Cheese", desc: "Pelat, kačkavalj, slanina, čedar, crvena slatka paprika, parmezan, masline, origano", prices: { "24cm": 590, "32cm": 1050, "42cm": 1250 }, img: imgBaconDoubleCheese },
  { name: "Vegetariana", desc: "Pelat, kačkavalj, tikvice, pečurke, rukola, crveni luk, čeri, masline, origano", prices: { "24cm": 550, "32cm": 990, "42cm": 1190 }, img: imgVegetariana },
  { name: "Arabiata", desc: "Pelat, crvena slatka paprika, kačkavalj, rukola, parmezan, masline, origano", prices: { "24cm": 650, "32cm": 1090, "42cm": 1690 }, img: imgArabiata },
  { name: "Mesnata", desc: "Kačkavalj, slanina, suvi vrat, kulen, šunka, pavlaka, masline, origano, pelat", prices: { "24cm": 790, "32cm": 1090, "42cm": 1690 }, img: imgMesnata },
  { name: "Prosciutto crudo", desc: "Pršuta, kačkavalj i italijanska klasika", prices: { "24cm": 790, "32cm": 1490, "42cm": 1790 }, img: imgProsciuttoCrudo },
];

export const sendvici: SimpleItem[] = [
  { name: "Sendvič Cezar", desc: "Grill piletina, hrskava slanina, čeri, ajzberg, cezar dresing, kačkavalj, parmezan", price: 550, img: imgSendvicCezar },
  { name: "Sendvič Beef", desc: "Biftek, ajzberg, čeri, čedar, burger dresing, parmezan", price: 690, img: imgSendvicBeef },
  { name: "Sendvič Vege", desc: "Crvena slatka paprika, pečurke, tikvice, soja sos, susam, ajzberg, masline", price: 490, img: imgSendvicVege },
  { name: "Sendvič Classic", desc: "Šunka, pavlaka, kačkavalj, paradajz, parmezan, ajzberg", price: 520, img: imgSendvicClassic },
  { name: "Sendvič Kulen", desc: "Kulen, pavlaka, kačkavalj, paradajz, parmezan, ajzberg", price: 550, img: imgSendvicKulen },
  { name: "Sendvič Pršuta", desc: "Pršuta, pavlaka, kačkavalj, paradajz, parmezan, ajzberg", price: 590, img: imgSendvicPrsuta },
];

export const paste: SimpleItem[] = [
  { name: "Pasta Vege", desc: "Pelat, crvena slatka paprika, pečurke, crveni luk, tikvice, masline, parmezan", price: 690, img: imgPastaVege },
  { name: "Pasta Carbonara", desc: "Neutralna pavlaka, panceta, jaje, pekorino, parmezan", price: 790, img: imgPastaCarbonara },
  { name: "Pasta Arabiata", desc: "Pelat, crvena slatka paprika, parmezan", price: 650, img: imgPastaArabiata },
  { name: "Pasta Tiki Pil", desc: "Neutralna pavlaka, grill piletina, pečurke, tikvice, parmezan", price: 750, img: imgPastaTikiPil },
  { name: "Pasta Spicy Beef", desc: "Pelat, biftek, peperončino, parmezan", price: 950, img: imgPastaSpicyBeef },
];

export const obrokSalate: SimpleItem[] = [
  { name: "Obrok salata Cezar", desc: "Grill piletina, hrskava slanina, čeri, ajzberg, parmezan, krutoni, cezar dresing", price: 790, img: imgObrokSalataCezar },
  { name: "Obrok salata Beef", desc: "Biftek, rukola, ajzberg, čeri, čedar dresing", price: 950, img: imgObrokSalataBeef },
];

export const tortilje: SimpleItem[] = [
  { name: "Tortilja Pileća", desc: "Piletina, dimljeni sir, ajzberg, paradajz, cezar dresing", price: 690, img: imgTortiljaPileca },
  { name: "Tortilja Beef", desc: "Biftek, čedar, ajzberg, burger dresing, paradajz", price: 850, img: imgTortiljaBeef },
  { name: "Tortilja Vege", desc: "Paradajz, rukola, pečurke, crveni luk, masline, maslinovo ulje, kukuruz, soja sos, susam", price: 590, img: imgTortiljaVege },
];

export const prilozi: SimpleItem[] = [
  { name: "Pomfrit", desc: "Hrskavi pomfrit uz kečap", price: 200, img: imgPomfrit },
];

export const palacinke: SimpleItem[] = [
  { name: "Palačinka Nutella", desc: "Tanka palačinka punjena Nutellom", price: 350, img: imgPalacinkaNutella },
  { name: "Palačinka Eurokrem", desc: "Tanka palačinka punjena Eurokremom", price: 300, img: imgPalacinkaEurokrem },
];

export const pice: SimpleItem[] = [
  { name: "Coca-Cola 0.33l", desc: "Limenka 0.33l", price: 170, img: imgCoca033 },
  { name: "Coca-Cola Zero 0.33l", desc: "Limenka 0.33l", price: 170, img: imgCocaZero033 },
  { name: "Coca-Cola 0.5l", desc: "Flaša 0.5l", price: 190, img: imgCoca05 },
  { name: "Coca-Cola 1.5l", desc: "Flaša 1.5l", price: 250, img: imgCoca15 },
  { name: "Coca-Cola Zero 1.5l", desc: "Flaša 1.5l", price: 250, img: imgCocaZero15 },
  { name: "Heineken 0.5l", desc: "Limenka piva 0.5l", price: 270, img: imgHeineken },
];

export type CategoryKey =
  | "pizza"
  | "sendvici"
  | "paste"
  | "obrok-salate"
  | "tortilje"
  | "prilozi"
  | "palacinke"
  | "pice";

export type Category =
  | { key: "pizza"; label: string; type: "pizza"; items: PizzaItem[] }
  | { key: Exclude<CategoryKey, "pizza">; label: string; type: "simple"; items: SimpleItem[] };

export const categories: Category[] = [
  { key: "pizza", label: "Pizza", type: "pizza", items: pizzas },
  { key: "sendvici", label: "Sendviči", type: "simple", items: sendvici },
  { key: "paste", label: "Paste", type: "simple", items: paste },
  { key: "obrok-salate", label: "Obrok salate", type: "simple", items: obrokSalate },
  { key: "tortilje", label: "Tortilje", type: "simple", items: tortilje },
  { key: "palacinke", label: "Palačinke", type: "simple", items: palacinke },
  { key: "prilozi", label: "Prilozi", type: "simple", items: prilozi },
  { key: "pice", label: "Piće", type: "simple", items: pice },
];

export const formatPrice = (rsd: number) => `${rsd.toLocaleString("sr-RS")} RSD`;
