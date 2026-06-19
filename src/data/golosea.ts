export const business = {
  name: "Golosea",
  sector: "Tienda de golosinas y chucherias",
  zona: "El Bonillo, Albacete",
  address: "Plaza Cementerio 9, El Bonillo, Albacete",
  phone: "662 595 342",
  whatsapp: "34662595342",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.0!2d-2.5153!3d38.9575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGolosea!5e0!3m2!1ses!2ses!4v1700000000000",
  rating: 4.9,
  ratingsCount: 87,
} as const;

export const content = {
  tagline: "Dulces que alegran el dia",
  hero_headline: "El rincon de chuches de El Bonillo donde todo apetece",
  hero_subtext:
    "Golosinas clasicas, chocolates, gominolas, snacks y bebidas frescas. Y para tus fiestas, cucuruchos personalizados que se llevan todas las miradas.",
  cta_text: "Pide tu cucurucho",

  about_title: "Mas que una tienda de chuches",
  about_text:
    "En Golosea creemos que cada antojo merece su momento. Por eso reunimos las golosinas de siempre y los sabores nuevos en un solo sitio, con un trato cercano y una sonrisa. Y cuando hay algo que celebrar, montamos cucuruchos y detalles personalizados para que tu fiesta sepa todavia mejor.",

  services: [
    {
      title: "Cucuruchos personalizados",
      description:
        "Montamos cucuruchos tematicos para cumpleanos, comuniones y eventos. Tu eliges los colores y las chuches; nosotros la magia.",
      emoji: "🎉",
    },
    {
      title: "Golosinas surtidas",
      description:
        "Dulces, acidos, gominolas de fruta, regaliz y caramelos. Un surtido enorme para cualquier antojo.",
      emoji: "🍬",
    },
    {
      title: "Chocolates",
      description:
        "Chocolate con leche, negro y rellenos. El capricho perfecto para los mas golosos.",
      emoji: "🍫",
    },
    {
      title: "Snacks salados",
      description:
        "Patatas, frutos secos y picoteo para cuando lo que apetece es algo crujiente.",
      emoji: "🥨",
    },
    {
      title: "Bebidas refrescantes",
      description:
        "Refrescos, batidos y bebidas bien frias para acompanar tu visita.",
      emoji: "🥤",
    },
    {
      title: "Detalles para fiestas",
      description:
        "Paletas, chicles y bolsitas listas para repartir en cualquier celebracion.",
      emoji: "🍭",
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
  primary: "#E8336D",
  accent:  "#FFB703",
  dark:    "#3A1E3E",
  light:   "#FFF5F8",
} as const;

export const fonts = {
  heading: "Baloo 2",
  body:    "Nunito",
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
    { url: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Brownies de chocolate" },
    { url: "https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Batido rosa de fresa" },
    { url: "https://images.pexels.com/photos/7474270/pexels-photo-7474270.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Merengues artesanos" },
  ],
} as const;

// Used as the chatbot system-prompt knowledge base.
export const chatbotFacts = [
  "Golosea es una tienda de golosinas y chucherias en El Bonillo, Albacete (Plaza Cementerio 9).",
  "Telefono de contacto: 662 595 342.",
  "Especialidad: cucuruchos personalizados para cumpleanos, comuniones y eventos.",
  "Productos: golosinas surtidas, chocolates, gominolas, snacks salados, bebidas refrescantes, paletas y chicles.",
  "Horario tipico: martes a domingo, manana y tarde; lunes cerrado.",
  "Se preparan encargos para fiestas; conviene avisar con antelacion.",
] as const;
