export const business = {
  name: "Golosea",
  sector: "Tienda de golosinas y chucherias",
  zona: "El Bonillo, Albacete",
  address: "Plaza Cementerio 9, El Bonillo, Albacete",
  phone: "662 595 342",
  whatsapp: "34662595342",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4476.481698437953!2d-2.5391421!3d38.9506644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd68a150a580ab63%3A0x88e0f2d1ab353cec!2sGolosea!5e1!3m2!1ses!2ses!4v1782271968647!5m2!1ses!2ses",
  rating: 4.9,
  ratingsCount: 87,
} as const;

export const content = {
  tagline: "Dulces que alegran el dia",
  hero_headline: "El rincon de chuches de El Bonillo donde todo apetece",
  hero_subtext:
    "Golosinas clasicas, chocolates, gominolas, snacks y bebidas frescas. Y para tus fiestas, cucuruchos personalizados que se llevan todas las miradas.",
  cta_text: "Pide tu cucurucho",

  about_title: "Más que una tienda de chuches",
  about_text:
    "En Golosea creemos que cada antojo merece su momento. Por eso reunimos las golosinas de siempre y los sabores nuevos en un solo sitio, con un trato cercano y una sonrisa. Y cuando hay algo que celebrar, montamos cucuruchos y detalles personalizados para que tu fiesta sepa todavia mejor.",

  services: [
    {
      title: "Cucuruchos personalizados",
      description:
        "Montamos cucuruchos tematicos para cumpleanos, comuniones y eventos. Tu eliges los colores y las chuches; nosotros la magia.",
      emoji: "🎉",
      image: "/images/cucuruchos.jpg",
    },
    {
      title: "Golosinas surtidas",
      description:
        "Dulces, acidos, gominolas de fruta, regaliz y caramelos. Un surtido enorme para cualquier antojo.",
      emoji: "🍬",
      image: "/images/golosinas-surtidas.jpg",
    },
    {
      title: "Chocolates",
      description:
        "Chocolate con leche, negro y rellenos. El capricho perfecto para los mas golosos.",
      emoji: "🍫",
      image: "/images/chocolates.webp",
    },
    {
      title: "Snacks salados",
      description:
        "Patatas, frutos secos y picoteo para cuando lo que apetece es algo crujiente.",
      emoji: "🥨",
      image: "/images/snacks.webp",
    },
    {
      title: "Bebidas refrescantes",
      description:
        "Refrescos, batidos y bebidas bien frias para acompanar tu visita.",
      emoji: "🥤",
      image: "/images/bebidas.jpeg",
    },
    {
      title: "Detalles para fiestas",
      description:
        "Paletas, chicles y bolsitas listas para repartir en cualquier celebracion.",
      emoji: "🍭",
      image: "/images/bolsitas.jpg",
    },
  ],

  why_choose: [
    {
      title: "Surtido enorme",
      text: "De lo clasico a lo ultimo en sabores, todo en un mismo sitio.",
      emoji: "✨",
    },
    {
      title: "Hecho a tu gusto",
      text: "Cucuruchos y detalles personalizados para tu evento.",
      emoji: "🎁",
    },
    {
      title: "Trato de pueblo",
      text: "Cercania, sonrisas y recomendaciones para no fallar nunca.",
      emoji: "💛",
    },
  ],

  testimonials: [
    {
      name: "Marta G.",
      text: "Pedi cucuruchos para el cumple de mi hija y fueron el exito de la fiesta. Repetiremos seguro.",
    },
    {
      name: "Javi R.",
      text: "Tienen de todo y siempre te atienden genial. Mi parada obligatoria los findes.",
    },
    {
      name: "Lucia M.",
      text: "Las gominolas estan siempre fresquisimas y el surtido es enorme. Un peligro de lo rico que esta todo.",
    },
  ],

  seo_title: "Golosea | Golosinas, chocolates y cucuruchos en El Bonillo",
  seo_description:
    "Tienda de chuches en El Bonillo (Albacete). Golosinas, chocolates, snacks y bebidas, y cucuruchos personalizados para tus fiestas y eventos.",
} as const;

export const palette = {
  // Paleta sandia: rosa/fresa + verdes
  primary:     "#E8455A", // rosa sandia (botones, acentos) — el del nav
  primaryDark: "#C8364A", // rosa hover/activo
  accent:      "#18B24C", // verde potente y fresco (CTAs verdes, detalles)
  accentDark:  "#0F8F3B", // verde hover/activo
  dark:        "#0F3B2A", // verde bosque profundo (secciones oscuras y texto)
  light:       "#FFF6F5", // crema rosada (fondos suaves)
} as const;

export const fonts = {
  heading:    "Erica One", // titular principal (solo peso 400)
  subheading: "Baloo 2",  // subtitulos y headings secundarios
  body:       "Nunito",   // texto
} as const;

export const images = {
  hero: {
    url: "https://images.pexels.com/photos/65547/pexels-photo-65547.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Grageas de chocolate de colores",
  },
  about: {
    url: "https://images.pexels.com/photos/7474230/pexels-photo-7474230.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Decorando dulces con virutas de colores",
  },
  gallery: [
    { url: "/images/galeria-1.webp", alt: "Surtido de chuches de Golosea" },
    { url: "/images/galeria-2.webp", alt: "Golosinas variadas de Golosea" },
    { url: "/images/galeria-3.webp", alt: "Chucherías de Golosea" },
    { url: "/images/galeria-4.webp", alt: "Dulces y golosinas de Golosea" },
    { url: "/images/galeria-5.webp", alt: "Snacks y chuches de Golosea" },
    { url: "/images/galeria-6.webp", alt: "Selección de golosinas de Golosea" },
    { url: "/images/galeria-7.webp", alt: "Chuches para fiestas de Golosea" },
    { url: "/images/galeria-8.webp", alt: "Productos de Golosea" },
    { url: "/images/galeria-9.webp", alt: "Tienda Golosea El Bonillo" },
  ],
} as const;

// Slides del hero animado: cada producto sobre su color, con sus 2 ingredientes.
export const heroSlides = [
  {
    key: "sandia",
    label: "Sandía",
    accent: "#ffd2d8",
    // rojo
    bg: "radial-gradient(120% 120% at 70% 15%, #f0566b 0%, #d62744 45%, #a4122e 100%)",
    product: { src: "/hero/sandia-chuche.webp", alt: "Gominola de sandía azucarada" },
    ingredients: [
      { src: "/hero/sandia-entera.webp", alt: "Sandía entera" },
      { src: "/hero/sandia-trozo.webp", alt: "Trozo de sandía" },
    ],
  },
  {
    key: "pistacho",
    label: "Pistacho",
    accent: "#dff3c9",
    // verde
    bg: "radial-gradient(120% 120% at 70% 15%, #5bbf6e 0%, #2f9c52 45%, #16723a 100%)",
    product: { src: "/hero/pistacho-tarrina.webp", alt: "Tarrina de helado de pistacho" },
    ingredients: [
      { src: "/hero/pistacho-frutos.webp", alt: "Pistachos" },
      { src: "/hero/pistacho-bola.webp", alt: "Bola de helado de pistacho" },
    ],
  },
  {
    key: "patata",
    label: "Patatas",
    accent: "#fff3c4",
    // amarillo
    bg: "radial-gradient(120% 120% at 70% 15%, #ffd54a 0%, #f6b821 45%, #d68f00 100%)",
    product: { src: "/hero/patata-bote.webp", alt: "Bote de patatas gourmet" },
    ingredients: [
      { src: "/hero/patata-cruda.webp", alt: "Patata cruda" },
      { src: "/hero/patata-cebolla.webp", alt: "Cebolla y cebollino" },
    ],
  },
  {
    key: "cola",
    label: "Refresco",
    accent: "#ead7c4",
    // oscurito marrón/blanco con blur
    bg: "radial-gradient(120% 120% at 70% 10%, #6b4a39 0%, #3a2820 50%, #1c130e 100%)",
    blur: true,
    product: { src: "/hero/cola-lata.webp", alt: "Lata de refresco con splash de cola" },
    ingredients: [
      { src: "/hero/cola-lima.webp", alt: "Lima" },
      { src: "/hero/cola-hielo.webp", alt: "Cubitos de hielo" },
    ],
  },
] as const;

// Used as the chatbot system-prompt knowledge base.
export const chatbotFacts = [
  "Golosea es una tienda de golosinas y chucherias en El Bonillo, Albacete (Plaza Cementerio 9).",
  "Telefono de contacto: 662 595 342.",
  "Especialidad: cucuruchos personalizados para cumpleanos, comuniones y eventos.",
  "Productos: golosinas surtidas, chocolates, gominolas, snacks salados, bebidas refrescantes, paletas y chicles.",
  "Horario tipico: martes a domingo, manana y tarde; lunes cerrado.",
  "Se preparan encargos para fiestas; conviene avisar con antelacion.",
] as const;
