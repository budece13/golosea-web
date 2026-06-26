// ─────────────────────────────────────────────────────────────────────────────
// Para añadir una nueva festividad:
//   1. Copia el objeto de abajo y cambia el slug + contenido.
//   2. Pon `active: true` en la nueva y `active: false` en la anterior.
//   3. Elige un `theme` (ahora mismo "manchego"; añade skins nuevos en festivos.astro).
//   4. El resto de la página se adapta sola.
// ─────────────────────────────────────────────────────────────────────────────

export type FestTheme = "manchego" | "default";

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
  theme: FestTheme;            // skin visual de la sección
  emoji: string;               // icono representativo
  colorAccent: string;         // color destacado (badges, bordes)
  tagline: string;             // H1 principal — beneficio para el usuario
  subtitulo: string;           // fechas y lugar
  descripcionFestival: string; // texto SEO sobre el festival (párrafos separados por \n)
  pitchGolosea: string;        // por qué Golosea es la parada ideal
  precioClaim: string;         // titular del banner de precio
  precioSub: string;           // subtítulo del banner de precio
  cartel: string[];            // nombres del cartel (ticker). Vacío = se oculta
  precios?: string[];          // lista de precios para el chatbot (no se muestra en la web)
  oferta: OfertaItem[];        // productos/servicios especiales
  beneficios: BeneficioItem[]; // razones para venir a Golosea
  imagenIntro?: { url: string; alt: string }; // foto destacada del intro (si no, usa la galería)
  galeriaSlice: [number, number]; // qué fotos de la galería mostrar [desde, hasta]
  seoTitle: string;
  seoDescription: string;
  active: boolean;
}

export const festividades: Festividad[] = [
  {
    slug: "alterna-2026",
    nombre: "Alterna Festival 2026",
    theme: "manchego",
    emoji: "🎸",
    colorAccent: "#E8455A",
    tagline: "Tu avituallamiento para el Alterna Festival",
    subtitulo: "XVII Edición · 3 y 4 de julio · La Nación, El Bonillo",
    descripcionFestival: `El Alterna Festival celebra su XVII edición los días 3 y 4 de julio en El Bonillo (Albacete). Dos días de punk, rock, metal, ska y mestizaje con Boikot, Kaotiko, Soziedad Alkoholika, Dubioza Kolektiv, Narco, Benito Kamelas, Biznaga y muchos más, con acampada gratuita incluida en el abono.\nCampamento, la previa y noches largas en La Nación. Y pa' aguantar dos días de conciertos hace falta avituallarse bien: bebida fría, hielo de sobra y algo de picar. Eso lo tienes resuelto en Golosea antes de cruzar la puerta del recinto.`,
    pitchGolosea:
      "Golosea está en plena Plaza de El Bonillo, a un par de minutos del recinto. Pásate a por las cervezas, el alcohol, la mezcla y el hielo antes de que arranque el primer bolo. Sin colas y a precios de toa' la vida. ¡Quítate el azogue con nosotros!",
    precioClaim: "Precio de pueblo, no de festival",
    precioSub:
      "Cervezas, alcohol, mezcla y hielo a lo que valen de verdad. El recargo de la barra te lo ahorras entero.",
    cartel: [
      "Boikot",
      "Kaotiko",
      "Soziedad Alkoholika",
      "Dubioza Kolektiv",
      "Narco",
      "Benito Kamelas",
      "Biznaga",
      "La Élite",
      "Sons of Aguirre",
      "Sanguijuelas del Guadiana",
      "Trashtucada",
      "Amygdala",
      "Parkineos",
      "Nerve Agent",
      "Awakate",
    ],
    precios: [
      "Kit Botellón (botella de Barceló, Larios 12 o Johnnie Walker + 1 mezcla + hielo + 6 vasos): 25 €. Es la opción más a cuenta para el grupo.",
      "Kit Botellón con botella de Larios litro o Negrita: 22 €.",
      "Kit Kalimotxo (cartón de vino + 2 L de mezcla + hielo + vasos): 6 €. Ideal y baratísimo para el grupo.",
      "Cartón de vino Gran Duque 1 L: 1,60 €.",
      "Litrona Embrau: 1,60 €.",
      "Litrona Amstel: 2,00 €.",
      "Lata Embrau: 0,80 €.",
      "Lata Amstel: 1,00 €.",
      "Lata Heineken: 1,10 €.",
      "Lata Mahou clásica: 1,10 €.",
      "Tinto de verano clásico o con limón: 1,90 €.",
      "Bolsa de hielo: 1,50 €.",
      "Refrescos en lata (Coca-Cola normal y Zero, Aquarius de limón, Fanta de naranja y de limón): 1,00 € cada una.",
      "Botella de Sprite de 2 L: 2,00 €.",
    ],
    oferta: [
      {
        emoji: "🍺",
        titulo: "Cervezas bien frías",
        descripcion:
          "Botes, litronas y packs fríos pa' el campamento y la previa. Sin colas y a precio de tienda de pueblo.",
      },
      {
        emoji: "🥃",
        titulo: "Alcohol para combinados",
        descripcion:
          "Ron, ginebra, vodka, whisky... lo que haga falta pa' los cubatas, mucho más barato que en la barra del recinto.",
      },
      {
        emoji: "🥤",
        titulo: "Mezcla y refrescos",
        descripcion:
          "Coca-Cola, tónica, limón, naranja y agua bien fría. Todo para el combinado y para no deshidratarte en julio.",
      },
      {
        emoji: "🍷",
        titulo: "Tinto de verano",
        descripcion:
          "El clásico manchego para el calor: vino, gaseosa y limón. Listo para la sombra y el campamento.",
      },
      {
        emoji: "🧊",
        titulo: "Hielo a sacos",
        descripcion:
          "Bolsas de hielo para que la cerveza y los cubatas aguanten fríos toda la jornada. Imprescindible.",
      },
      {
        emoji: "🥨",
        titulo: "Snacks y picoteo",
        descripcion:
          "Patatas, frutos secos, chuches y algo de picar entre concierto y concierto (y para la resaca del día siguiente).",
      },
    ],
    beneficios: [
      {
        emoji: "🏷️",
        titulo: "Precio de pueblo",
        texto:
          "Cervezas, alcohol y hielo a precio de tienda de barrio, no de barra de festival. El ahorro se nota de verdad.",
      },
      {
        emoji: "📍",
        titulo: "A dos pasos del recinto",
        texto:
          "Plaza Cementerio 9, El Bonillo. En pleno pueblo, a un par de minutos de La Nación.",
      },
      {
        emoji: "⚡",
        titulo: "Rápido y sin colas",
        texto:
          "Entras, coges la bebida y el hielo, y para el campamento. Cero esperas antes del primer concierto.",
      },
      {
        emoji: "🎒",
        titulo: "Todo en un viaje",
        texto:
          "Bebida fría, mezcla, alcohol, hielo y picoteo en una sola parada. Cargas y a montar la previa.",
      },
    ],
    imagenIntro: {
      url: "/festivos/alterna-publico.webp",
      alt: "Público en el Alterna Festival de El Bonillo",
    },
    galeriaSlice: [0, 4],
    seoTitle:
      "Alterna Festival El Bonillo 2026 | Bebidas, hielo y botellón — Golosea",
    seoDescription:
      "¿Vas al Alterna Festival 2026 en El Bonillo? Golosea tiene cervezas frías, alcohol, mezcla, tinto de verano, hielo y snacks a precio de pueblo. A dos pasos del recinto de La Nación.",
    active: true,
  },
];
