// ─────────────────────────────────────────────────────────────────────────────
// Para añadir una nueva festividad:
//   1. Copia el objeto de abajo y cámbia el slug + contenido.
//   2. Pon `active: true` en la nueva y `active: false` en la anterior.
//   3. El resto de la página se adapta sola.
// ─────────────────────────────────────────────────────────────────────────────

export interface OfertaItem {
  emoji: string;
  titulo: string;
  descripcion: string;
}

export interface BeneficioItem {
  emoji: string;
  titulo: string;
  texto: string;
}

export interface Festividad {
  slug: string;
  nombre: string;              // "Alterna Festival 2026"
  emoji: string;               // icono representativo
  colorHero: string;           // CSS gradient para el hero (fondo oscuro)
  colorAccent: string;         // color destacado (para badges, bordes)
  tagline: string;             // H1 principal — beneficio para el usuario
  subtitulo: string;           // fechas y lugar
  descripcionFestival: string; // texto SEO explicando el festival (párrafos separados por \n)
  pitchGolosea: string;        // por qué Golosea es la parada ideal
  oferta: OfertaItem[];        // productos/servicios especiales
  beneficios: BeneficioItem[]; // razones para ir a Golosea
  galeriaSlice: [number, number]; // qué fotos de la galería mostrar [desde, hasta]
  seoTitle: string;
  seoDescription: string;
  active: boolean;
}

export const festividades: Festividad[] = [
  {
    slug: "alterna-2026",
    nombre: "Alterna Festival 2026",
    emoji: "🎸",
    colorHero:
      "radial-gradient(ellipse 120% 90% at 60% 10%, #2a0a12 0%, #0F3B2A 55%, #080f0b 100%)",
    colorAccent: "#E8455A",
    tagline: "Tu parada antes del Alterna Festival",
    subtitulo: "🎸 XVII Edición · 3 y 4 de julio · El Bonillo, Albacete",
    descripcionFestival: `El Alterna Festival celebra su XVII edición los días 3 y 4 de julio en El Bonillo (Albacete). Dos días de punk, rock, metal, ska y mestizaje con nombres como Boikot, Kaotiko, Soziedad Alkoholika, Benito Kamelas, Narco, Biznaga, Dubioza Kolektiv y muchos más.\nEl abono de dos días sale por 40€ e incluye zona de acampada gratuita. Eso significa campamento, previo y noches largas. Y para todo eso hace falta aprovisionarse bien antes de entrar al recinto.`,
    pitchGolosea:
      "Golosea está en la misma Plaza Cementerio 9 de El Bonillo, a dos minutos del recinto. Pásate a por las cervezas, el hielo y todo lo del botellón antes de que empiece el primero. Sin colas, a precio de tienda.",
    oferta: [
      {
        emoji: "🍺",
        titulo: "Cervezas frías",
        descripcion:
          "Botes y litros bien fríos para el campamento y el pre-festival. Sin hacer cola en la barra del recinto.",
      },
      {
        emoji: "🍷",
        titulo: "Tinto de verano",
        descripcion:
          "El clásico manchego para días de calor. Tinto, gaseosa y hielo: el combo perfecto cuando aprieta julio.",
      },
      {
        emoji: "🧊",
        titulo: "Hielo",
        descripcion:
          "Sin hielo no hay botellón. Llévate una bolsa (o dos) para que todo llegue frío al campamento.",
      },
      {
        emoji: "🥤",
        titulo: "Refrescos y mezcladores",
        descripcion:
          "Coca-Cola, Fanta, agua... todo lo que necesitas para completar el botellón sin improvisar.",
      },
      {
        emoji: "🥨",
        titulo: "Snacks salados",
        descripcion:
          "Patatas, frutos secos, palomitas. El picoteo que te salva entre actuación y actuación (y de resaca).",
      },
      {
        emoji: "🍬",
        titulo: "Chuches y golosinas",
        descripcion:
          "Para los peques que vienen a los talleres y el Cyrcus Space, y para los que nunca dejaron de serlo.",
      },
    ],
    beneficios: [
      {
        emoji: "📍",
        titulo: "En el mismo pueblo",
        texto:
          "Plaza Cementerio 9, El Bonillo. A dos minutos del recinto, sin desvíos ni sorpresas.",
      },
      {
        emoji: "⚡",
        titulo: "Rápido y sin colas",
        texto:
          "Entra, coge lo que necesitas y en marcha. Aquí no pierdes ni cinco minutos antes de los conciertos.",
      },
      {
        emoji: "💰",
        titulo: "Precio de tienda, no de festival",
        texto:
          "Las cervezas y el hielo a lo que cuestan de verdad. El recargo de barra te lo ahorras.",
      },
      {
        emoji: "🎒",
        titulo: "Todo en un solo sitio",
        texto:
          "Bebidas, hielo, snacks y chuches. Cargues en un viaje y listo; el campamento ya está montado.",
      },
    ],
    galeriaSlice: [0, 4],
    seoTitle:
      "Alterna Festival El Bonillo 2026 | Bebidas, botellón y snacks — Golosea",
    seoDescription:
      "¿Vas al Alterna Festival 2026 en El Bonillo? Pásate por Golosea: cervezas frías, tinto de verano, hielo, refrescos y snacks para el botellón y el campamento. Estamos a dos pasos del recinto.",
    active: true,
  },
];
