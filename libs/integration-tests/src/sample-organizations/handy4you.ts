import { env } from 'process'

import { OrganizationProto } from '../common-operations'
import { Rate_Type_Enum } from '../generated'
import {
  Booking_Question_Scope_Enum,
  Booking_Question_Type_Enum,
  Unit_Management_Enum,
} from '@otiuming/domain-omnidata-types'

const IMG_PREFIX = "https://otiuming-admin.github.io/sample-data/handy4you/images/";

export const handy4you: OrganizationProto = {
  businessModel: {
    rate_type: Rate_Type_Enum.TimeSlots,
  },
  settings: {
    name: "Handy4you",
    headline: {
      en: "Unlocking Unforgettable Adventures: Your Journey, Our Expertise",
      es: "Desbloqueando Aventuras Inolvidables: Tu Viaje, Nuestra Experiencia",
      fr: "Débloquez des Aventures Inoubliables : Votre Voyage, Notre Expertise",
      de: "Unvergessliche Abenteuer Entfesseln: Deine Reise, Unsere Expertise",
    },
    phone: "+34 777 888 999",
    socials: {
      facebook: "https://www.facebook.com/handy4you",
      instagram: "https://www.instagram.com/handy4you",
      twitter: "https://www.twitter.com/handy4you",
      youtube: "https://www.youtube.com/handy4you",
    },
  },
  admin: {
    email: 'handy4you@grr.la',
    password: env.SAMPLE_DATA_PASSWORD,
  },
  
  bookingQuestions: [
    {
      text: {
        en: 'Does this person have specific accessibility requirements or disabilities?',
        es: '¿Esta persona tiene requisitos de accesibilidad específicos o discapacidades?',
        de: 'Hat diese Person spezifische Zugangsbedürfnisse oder Behinderungen?',
        fr: "Cette personne a-t-elle des besoins d'accessibilité spécifiques ou des handicaps?",
      },
      type: Booking_Question_Type_Enum.Select,
      scope: Booking_Question_Scope_Enum.PerPax,
      value: {
        options: [
          { en: 'No', es: 'No', de: 'Nein', fr: 'Non' },
          {
            en: 'Mobility Impairment',
            es: 'Discapacidad de movilidad',
            de: 'Beeinträchtigte Mobilität',
            fr: 'Handicap de mobilité',
          },
          {
            en: 'Visual Impairment',
            es: 'Discapacidad visual',
            de: 'Sehbehinderung',
            fr: 'Handicap visuel',
          },
          {
            en: 'Hearing Impairment',
            es: 'Discapacidad auditiva',
            de: 'Hörschädigung',
            fr: 'Handicap auditif',
          },
          {
            en: 'Cognitive or Learning Disabilities',
            es: 'Discapacidades cognitivas o de aprendizaje',
            de: 'Kognitive oder Lernbehinderungen',
            fr: "Handicaps cognitifs ou d'apprentissage",
          },
          { en: 'Other', es: 'Otro', de: 'Andere', fr: 'Autre' },
        ],
      },
    },
    {
      text: {
        en: 'Are there any dietary restrictions or preferences for this person?',
        es: '¿Esta persona tiene restricciones dietéticas o preferencias?',
        de: 'Gibt es diätetische Einschränkungen oder Vorlieben für diese Person?',
        fr: 'Cette personne a-t-elle des restrictions alimentaires ou des préférences?',
      },
      type: Booking_Question_Type_Enum.Select,
      scope: Booking_Question_Scope_Enum.PerPax,
      value: {
        options: [
          { en: 'No', es: 'No', de: 'Nein', fr: 'Non' },
          {
            en: 'Vegetarian',
            es: 'Vegetariano',
            de: 'Vegetarisch',
            fr: 'Végétarien',
          },
          { en: 'Vegan', es: 'Vegano', de: 'Vegan', fr: 'Végétalien' },
          {
            en: 'Gluten-Free',
            es: 'Sin gluten',
            de: 'Glutenfrei',
            fr: 'Sans gluten',
          },
          {
            en: 'Lactose-Free',
            es: 'Sin lactosa',
            de: 'Laktosefrei',
            fr: 'Sans lactose',
          },
          {
            en: 'Nut-Free',
            es: 'Sin frutos secos',
            de: 'Nussfrei',
            fr: 'Sans noix',
          },
          { en: 'Other', es: 'Otro', de: 'Andere', fr: 'Autre' },
        ],
      },
    },
    {
      text: {
        en: 'Any additional comments, questions, or special requests?',
        es: '¿Algún comentario adicional, pregunta o solicitud especial?',
        de: 'Irgendwelche zusätzlichen Kommentare, Fragen oder besonderen Anfragen?',
        fr: 'Des commentaires supplémentaires, des questions ou des demandes spéciales?',
      },
      type: Booking_Question_Type_Enum.FreeText,
      scope: Booking_Question_Scope_Enum.PerBooking,
      value: {},
    },
  ],
  theme: {
    metaTitle: {
      en: "Unlocking Unforgettable Adventures: Your Journey, Our Expertise",
      es: "Desbloqueando Aventuras Inolvidables: Tu Viaje, Nuestra Experiencia",
      fr: "Débloquez des Aventures Inoubliables : Votre Voyage, Notre Expertise",
      de: "Unvergessliche Abenteuer Entfesseln: Deine Reise, Unsere Expertise",
    },
    metaDescription: {
      en: "At AccessibleAdventures, we are dedicated to making your travel dreams come true. We believe that everyone, regardless of their abilities, deserves to explore the world and create lasting memories. With our unwavering commitment to inclusivity, we provide exceptional experiences that ensure access to adventure for all. From the pristine beaches to the charming mountain towns of Liguria, Italy, our specialized equipment and professional guides make the impossible possible. Whether it's navigating sandy shores with our accessible beach wheelchairs, exploring picturesque coastal and mountain towns, or savoring the flavors of local cuisine, we are your trusted companion in creating unforgettable moments. Join us on a journey where your abilities are celebrated, and adventure knows no bounds. Your adventure, your way, with AccessibleAdventures.",
      es: "En AccessibleAdventures, estamos dedicados a hacer realidad tus sueños de viaje. Creemos que todos, independientemente de sus habilidades, merecen explorar el mundo y crear recuerdos inolvidables. Con nuestro compromiso inquebrantable con la inclusión, ofrecemos experiencias excepcionales que garantizan el acceso a la aventura para todos. Desde las playas prístinas hasta los encantadores pueblos de montaña de Liguria, Italia, nuestro equipo especializado y guías profesionales hacen posible lo imposible. Ya sea navegando por las costas arenosas con nuestras sillas de ruedas de playa accesibles, explorando pintorescos pueblos costeros y de montaña o saboreando los sabores de la cocina local, somos tu compañero de confianza para crear momentos inolvidables. Únete a nosotros en un viaje donde tus habilidades son celebradas y la aventura no conoce límites. Tu aventura, a tu manera, con AccessibleAdventures.",
      fr: "Chez AccessibleAdventures, nous sommes déterminés à concrétiser vos rêves de voyage. Nous croyons que tout le monde, quelles que soient ses capacités, mérite d'explorer le monde et de créer des souvenirs durables. Grâce à notre engagement indéfectible envers l'inclusion, nous offrons des expériences exceptionnelles qui garantissent l'accès à l'aventure pour tous. Des plages immaculées aux charmantes villes côtières et de montagne de la Ligurie en Italie, notre équipement spécialisé et nos guides professionnels rendent l'impossible possible. Que ce soit en naviguant sur les rivages sablonneux avec nos fauteuils roulants de plage accessibles, en explorant des villes côtières et de montagne pittoresques ou en savourant les saveurs de la cuisine locale, nous sommes votre compagnon de confiance pour créer des moments inoubliables. Rejoignez-nous dans un voyage où vos capacités sont célébrées et où l'aventure ne connaît aucune limite. Votre aventure, à votre manière, avec AccessibleAdventures.",
      de: "Bei AccessibleAdventures sind wir bestrebt, Ihre Reiseträume wahr werden zu lassen. Wir sind der festen Überzeugung, dass jeder, unabhängig von seinen Fähigkeiten, die Welt erkunden und bleibende Erinnerungen schaffen sollte. Mit unserem unerschütterlichen Engagement für Inklusion bieten wir außergewöhnliche Erlebnisse, die den Zugang zur Abenteuerwelt für alle gewährleisten. Vom makellosen Strand bis zu den reizenden Bergdörfern Liguriens, Italien, ermöglichen unser spezialisiertes Equipment und unsere professionellen Guides das Unmögliche. Ob Sie mit unseren rollstuhlgerechten Strandrollstühlen die sandigen Ufer erkunden, malerische Küsten- und Bergdörfer besuchen oder die Aromen der lokalen Küche genießen – wir sind Ihr verlässlicher Begleiter, um unvergessliche Momente zu schaffen. Begleiten Sie uns auf einer Reise, auf der Ihre Fähigkeiten gefeiert werden und Abenteuer keine Grenzen kennen. Ihre Abenteuer, Ihre Art, mit AccessibleAdventures.",
    },
    favicon: "https://img.logoipsum.com/248.png",
    logo: "https://img.logoipsum.com/248.png",
    logoLight: "https://img.logoipsum.com/248.png",
  },
  pages: {
    home: {
      title: {
        en: "Handy4you",
        es: "Handy4you",
        fr: "Handy4you",
        de: "Handy4you",
      },
      subtitle: {
        en: "Unlocking Unforgettable Adventures: Your Journey, Our Expertise",
        es: "Desbloqueando Aventuras Inolvidables: Tu Viaje, Nuestra Experiencia",
        fr: "Débloquez des Aventures Inoubliables : Votre Voyage, Notre Expertise",
        de: "Unvergessliche Abenteuer Entfesseln: Deine Reise, Unsere Expertise",
      },
      heroImage: IMG_PREFIX + "hero.webp",
    },
  },
  products: [
    {
      id: "golf-excursion",
      priceFrom: 99,
      name: {
        en: "Golf Excursion",
        es: "Excursión de Golf",
        fr: "Excursion de Golf",
        de: "Golfausflug",
      },
      headline: {
        en: "Discover the Perfect Swing in Paradise",
        es: "Descubre el Swing Perfecto en el Paraíso",
        fr: "Découvrez le Swing Parfait au Paradis",
        de: "Entdecken Sie den Perfekten Schwung im Paradies",
      },
      description: {
        en: "Experience the thrill of a Golf Excursion in a lush and picturesque setting that's nothing short of a golfer's dream. Our guided course with rolling fairways and pristine greens offers stunning views at every turn.",
        es: "Experimenta la emoción de una Excursión de Golf en un entorno exuberante y pintoresco. Un campo guiado con fairways ondulados y greens impecables te ofrece vistas impresionantes.",
        fr: "Vivez l'excitation d'une Excursion de Golf dans un cadre luxuriant et pittoresque. Un parcours guidé avec fairways ondulants et greens immaculés vous offre des vues à couper le souffle.",
        de: "Erleben Sie das Golfabenteuer in einer üppigen und malerischen Umgebung. Ein geführter Platz mit sanften Fairways und makellosen Greens bietet beeindruckende Ausblicke.",
      },
      images: [
        IMG_PREFIX + "golf-06.webp",
        IMG_PREFIX + "golf-07.webp",
        IMG_PREFIX + "golf-01.webp",
        IMG_PREFIX + "golf-02.webp",
        IMG_PREFIX + "golf-03.webp",
        IMG_PREFIX + "golf-04.webp"
      ],
      rates: [
        {
          name: "standard",
          configuration: {
            type: "time-slots-per-pax",
            durationInHours: 3,
            pricePerPerson: 99,
            startingHours: [9, 15],
          },
        },
      ],
      features: [
        { id: "CAPACITY", value: 6 },
        { id: "ACCESSIBILITY" },
        { id: "TRANSPORT_INCLUDED" },
        { id: "EQUIPMENT_INCLUDED" },
        { id: "HEALTH_AND_SAFETY" },
        { id: "INSURANCE_INCLUDED" },
        { id: "ENTRANCE_INCLUDED" },
        { id: "MULTILANGUAGE_STAFF" },
      ],
    },
    {
      id: "blokarting-at-sunset",
      priceFrom: 79,
      name: {
        en: "Blokarting at Sunset",
        es: "Blokarting al Atardecer",
        fr: "Blokarting au Coucher du Soleil",
        de: "Blokarting bei Sonnenuntergang",
      },
      headline: {
        en: "Race the Wind at Sunset on the Beach",
        es: "¡Corre con el Viento al Atardecer en la Playa!",
        fr: "Défiez le Vent au Coucher du Soleil sur la Plage",
        de: "Rennen Sie mit dem Wind bei Sonnenuntergang am Strand",
      },
      description: {
        en: "Experience the exhilaration of Blokarting at Sunset, where coastal energy meets serene evening beauty. An unforgettable adventure awaits on the beach.",
        es: "Experimenta la emoción del Blokarting al Atardecer, donde la energía costera se une a la belleza de la tarde. Una aventura inolvidable en la playa te espera.",
        fr: "Vivez l'excitation du Blokarting au Coucher du Soleil, où l'énergie côtière rencontre la beauté apaisante du soir. Une aventure inoubliable vous attend sur la plage.",
        de: "Erleben Sie den Nervenkitzel des Blokarting bei Sonnenuntergang, wo Küstenenergie auf abendliche Ruhe trifft. Ein unvergessliches Abenteuer am Strand erwartet Sie.",
      },
      images: [
        IMG_PREFIX + "blowkart-01.webp",
        IMG_PREFIX + "blowkart-02.webp",
        IMG_PREFIX + "beach-01.webp",
        IMG_PREFIX + "beach-02.webp",
        IMG_PREFIX + "sunset-03.webp"
      ],
      rates: [
        {
          name: "standard",
          configuration: {
            type: "time-slots-per-pax",
            durationInHours: 2,
            pricePerPerson: 79,
            startingHours: [9, 11, 13, 15],
          },
        },
      ],
      features: [
        { id: "CAPACITY", value: 6 },
        { id: "ACCESSIBILITY" },
        { id: "TRANSPORT_INCLUDED" },
        { id: "EQUIPMENT_INCLUDED" },
        { id: "HEALTH_AND_SAFETY" },
        { id: "INSURANCE_INCLUDED" },
        { id: "ENTRANCE_INCLUDED" },
        { id: "MULTILANGUAGE_STAFF" },
      ],
    },
    {
      id: "swiming-with-stingrays",
      priceFrom: 49,
      name: {
        en: "Swimming with Stingrays",
        es: "Nadar con Mantarrayas",
        fr: "Nager avec les Raies",
        de: "Schwimmen mit Stachelrochen",
      },
      headline: {
        en: "Dive into Adventure: Swim with Graceful Stingrays",
        es: "Sumérgete en la Aventura: Nada con Elegantes Mantarrayas",
        fr: "Plongez dans l'Aventure : Nagez avec des Raies Gracieuses",
        de: "Tauchen Sie ein in das Abenteuer: Schwimmen Sie mit anmutigen Stachelrochen",
      },
      description: {
        en: "Embark on an unforgettable journey into crystal-clear waters. Encounter majestic stingrays up close, with all four rays images leading the visual experience followed by our scuba series.",
        es: "Embárcate en un viaje inolvidable en aguas cristalinas y disfruta de un encuentro cercano con majestuosas mantarrayas.",
        fr: "Partez pour une aventure inoubliable dans des eaux cristallines et rencontrez de près de majestueuses raies.",
        de: "Tauchen Sie ein in kristallklare Gewässer und erleben Sie majestätische Stachelrochen hautnah.",
      },
      images: [
        IMG_PREFIX + "rays-01.webp",
        IMG_PREFIX + "rays-02.webp",
        IMG_PREFIX + "rays-03.webp",
        IMG_PREFIX + "rays-04.webp",
        IMG_PREFIX + "scuba-01.webp",
        IMG_PREFIX + "scuba-02.webp",
        IMG_PREFIX + "scuba-03.webp"
      ],
      rates: [
        {
          name: "standard",
          configuration: {
            type: "time-slots-per-pax",
            durationInHours: 1,
            pricePerPerson: 49,
            startingHours: [10, 11, 13, 14, 15],
          },
        },
      ],
      features: [
        { id: "CAPACITY", value: 6 },
        { id: "ACCESSIBILITY" },
        { id: "TRANSPORT_INCLUDED" },
        { id: "EQUIPMENT_INCLUDED" },
        { id: "HEALTH_AND_SAFETY" },
        { id: "INSURANCE_INCLUDED" },
        { id: "ENTRANCE_INCLUDED" },
        { id: "MULTILANGUAGE_STAFF" },
      ],
    },
    {
      id: "golf-mobility-machine-rental",
      name: {
        en: "Renting a Golf Mobility Machine",
        es: "Alquiler de una Máquina de Movilidad para Golf",
        fr: "Location d'une Machine de Mobilité pour le Golf",
        de: "Golfmobilitätmaschine mieten",
      },
      headline: {
        en: "Experience Golf with Mobility Freedom",
        es: "Experimenta el Golf con Libertad de Movilidad",
        fr: "Vivez le Golf en Toute Liberté de Mobilité",
        de: "Erleben Sie Golf mit Mobilitätsfreiheit",
      },
      description: {
        en: "Rent our specialized golf mobility machines designed to provide accessibility and freedom on the golf course. These state-of-the-art machines are equipped with adaptive features to assist individuals with mobility impairments in playing golf comfortably and independently. Whether you're a seasoned golfer or a beginner, our golf mobility machines ensure a seamless and enjoyable golfing experience for everyone. Simply rent the machine, and tee off with confidence as you navigate the course with ease.",
        es: 'Alquile nuestras máquinas de movilidad para golf especializadas diseñadas para proporcionar accesibilidad y libertad en el campo de golf. Estas máquinas de última generación están equipadas con características adaptativas para ayudar a las personas con discapacidades de movilidad a jugar al golf de manera cómoda e independiente. Ya sea que sea un golfista experimentado o un principiante, nuestras máquinas de movilidad para golf garantizan una experiencia de golf fluida y agradable para todos. Simplemente alquile la máquina y tee con confianza mientras navega por el campo con facilidad.',
        fr: 'Louez nos machines de mobilité spécialisées pour le golf conçues pour offrir accessibilité et liberté sur le parcours de golf. Ces machines de pointe sont équipées de fonctionnalités adaptatives pour aider les personnes en situation de handicap à mobilité réduite à jouer au golf confortablement et de manière autonome. Que vous soyez un golfeur chevronné ou un débutant, nos machines de mobilité pour le golf garantissent une expérience de golf fluide et agréable pour tous. Louez simplement la machine et jouez en toute confiance en parcourant le terrain avec aisance.',
        de: 'Mieten Sie unsere spezialisierten Golfmobilitätsmaschinen, die entwickelt wurden, um auf dem Golfplatz Zugänglichkeit und Freiheit zu bieten. Diese modernen Maschinen sind mit anpassungsfähigen Funktionen ausgestattet, um Personen mit Mobilitätseinschränkungen beim Golfspielen komfortabel und unabhängig zu unterstützen. Ob Sie ein erfahrener Golfer oder Anfänger sind, unsere Golfmobilitätsmaschinen garantieren ein nahtloses und angenehmes Golferlebnis für alle. Mieten Sie einfach die Maschine und starten Sie mit Zuversicht, während Sie den Platz mühelos navigieren.',
      },
      priceFrom: 60,
      businessModel: {
        time_management: Rate_Type_Enum.Daily,
        unit_management: Unit_Management_Enum.PerResource,
      },
      images: [
        IMG_PREFIX + "instructor-01.webp",
        IMG_PREFIX + "instructor-02.webp",
        IMG_PREFIX + "instructor-03.webp",
        IMG_PREFIX + "accessibililty-01.webp",
        IMG_PREFIX + "handicap-01.webp",
        IMG_PREFIX + "handicap-02.webp",
        IMG_PREFIX + "handicap-05.webp",
        IMG_PREFIX + "golf-05.webp",
        IMG_PREFIX + "golf-06.webp",
        IMG_PREFIX + "accessibililty-02.webp"
      ],
      rates: [
        {
          name: "standard",
          configuration: {
            type: "daily-per-resource",
            pricePerResource: 60,
            maxResources: 3,
          },
        },
      ],
      features: [
        { id: "INSURANCE_INCLUDED" },
        { id: "MULTILANGUAGE_STAFF" },
      ],
    },
    {
      id: "blokarting-machine-rental",
      name: {
        en: "Blokarting Machine Rental",
        es: "Alquiler de Máquinas de Blokarting",
        fr: "Location de Machines de Blokarting",
        de: "Blokarting-Maschinenvermietung",
      },
      headline: {
        en: "Rent a Blokarting Machine for Beach Adventure",
        es: "Alquila una Máquina de Blokarting para una Aventura en la Playa",
        fr: "Louez une Machine de Blokarting pour une Aventure à la Plage",
        de: "Mieten Sie eine Blokarting-Maschine für ein Strandabenteuer",
      },
      description: {
        en: "Experience the thrill of blokarting on the beach with our convenient machine rental service. Blokarting combines the excitement of sailing with the simplicity of go-karting, offering an exhilarating experience for adventure enthusiasts of all ages. Our blokarting machines are easy to operate and suitable for beginners and experienced riders alike. Rent a blokarting machine from us and feel the wind in your hair as you race across the sand, enjoying the breathtaking views of the coastline. Whether you're planning a family outing, a team-building activity, or simply seeking some beachside fun, blokarting is the perfect choice for an unforgettable adventure.",
        es: 'Experimenta la emoción del blokarting en la playa con nuestro práctico servicio de alquiler de máquinas. El blokarting combina la emoción de la navegación con la simplicidad del karting, ofreciendo una experiencia emocionante para entusiastas de la aventura de todas las edades. Nuestras máquinas de blokarting son fáciles de operar y adecuadas para principiantes y pilotos experimentados por igual. Alquile una máquina de blokarting con nosotros y sienta el viento en su cabello mientras corre por la arena, disfrutando de las impresionantes vistas de la costa. Ya sea que estés planificando una salida en familia, una actividad de formación de equipos o simplemente buscando diversión en la playa, el blokarting es la elección perfecta para una aventura inolvidable.',
        de: 'Erleben Sie den Nervenkitzel des Blokarting am Strand mit unserem praktischen Maschinenvermietungsservice. Blokarting kombiniert die Aufregung des Segelns mit der Einfachheit des Kartfahrens und bietet ein aufregendes Erlebnis für Abenteuerbegeisterte jeden Alters. Unsere Blokarting-Maschinen sind einfach zu bedienen und eignen sich sowohl für Anfänger als auch für erfahrene Fahrer. Mieten Sie eine Blokarting-Maschine bei uns und spüren Sie den Wind in den Haaren, während Sie über den Sand rasen und die atemberaubende Aussicht auf die Küste genießen. Egal, ob Sie einen Familienausflug, eine Teamaktivität oder einfach nur etwas Strandspaß planen, Blokarting ist die perfekte Wahl für ein unvergessliches Abenteuer.',
        fr: "Découvrez les sensations fortes du blokarting sur la plage avec notre pratique service de location de machines. Le blokarting combine l'excitation de la navigation avec la simplicité du karting, offrant une expérience exaltante pour les amateurs d'aventure de tous âges. Nos machines de blokarting sont faciles à utiliser et conviennent aussi bien aux débutants qu'aux pilotes expérimentés. Louez une machine de blokarting auprès de nous et sentez le vent dans vos cheveux en traversant le sable, en profitant de la vue imprenable sur la côte. Que vous prévoyiez une sortie en famille, une activité de renforcement d'équipe ou que vous recherchiez simplement du plaisir en bord de mer, le blokarting est le choix idéal pour une aventure inoubliable.",
      },
      priceFrom: 50,
      businessModel: {
        time_management: Rate_Type_Enum.Daily,
        unit_management: Unit_Management_Enum.PerResource,
      },
      images: [
        IMG_PREFIX + "blowkart-01.webp",
        IMG_PREFIX + "blowkart-02.webp",
        IMG_PREFIX + "beach-03.webp",
        IMG_PREFIX + "beach-04.webp",
        IMG_PREFIX + "sunset-02.webp",
        IMG_PREFIX + "coastal-village-03.webp"
      ],
      rates: [
        {
          name: "standard",
          configuration: {
            type: "daily-per-resource",
            pricePerResource: 50,
            maxResources: 5,
          },
        },
      ],
      features: [
        { id: "INSURANCE_INCLUDED" },
        { id: "MULTILANGUAGE_STAFF" },
      ],
    },
    {
      id: "standard-accessible-room",
      name: {
        en: "Standard Accessible Room",
        es: "Habitación Estándar Accesible",
        fr: "Chambre Standard Accessible",
        de: "Standard barrierefreies Zimmer",
      },
      headline: {
        en: "Comfort and Accessibility Combined",
        es: "Comodidad y Accesibilidad Combinadas",
        fr: "Confort et Accessibilité Combinés",
        de: "Komfort und Barrierefreiheit kombiniert",
      },
      description: {
        en: "Our Standard Accessible Rooms are designed with your comfort and convenience in mind. These rooms feature accessible amenities and thoughtful touches to ensure a relaxing and hassle-free stay. From wider doorways and grab bars to accessible bathrooms and visual alarms, our Standard Accessible Rooms offer everything you need for a comfortable and enjoyable stay. Whether you're traveling for business or pleasure, our Standard Accessible Rooms provide the perfect blend of comfort and accessibility for a stress-free stay.",
        es: 'Nuestras Habitaciones Estándar Accesibles están diseñadas pensando en su comodidad y conveniencia. Estas habitaciones cuentan con comodidades accesibles y toques considerados para garantizar una estancia relajante y sin complicaciones. Desde puertas más anchas y barras de agarre hasta baños accesibles y alarmas visuales, nuestras Habitaciones Estándar Accesibles ofrecen todo lo que necesita para una estancia cómoda y placentera. Ya sea que viaje por negocios o por placer, nuestras Habitaciones Estándar Accesibles ofrecen la combinación perfecta de comodidad y accesibilidad para una estancia sin estrés.',
        fr: "Nos chambres standard accessibles sont conçues pour votre confort et votre commodité. Ces chambres sont équipées d'équipements accessibles et de touches réfléchies pour garantir un séjour relaxant et sans tracas. Des portes plus larges et des barres d'appui aux salles de bains accessibles et aux alarmes visuelles, nos chambres standard accessibles offrent tout ce dont vous avez besoin pour un séjour confortable et agréable. Que vous voyagiez pour affaires ou pour le plaisir, nos chambres standard accessibles offrent le parfait mélange de confort et d'accessibilité pour un séjour sans stress.",
        de: 'Unsere Standard barrierefreien Zimmer sind auf Ihren Komfort und Ihre Bequemlichkeit ausgelegt. Diese Zimmer verfügen über barrierefreie Annehmlichkeiten und durchdachte Details, um einen entspannten und stressfreien Aufenthalt zu gewährleisten. Von breiteren Türen und Haltegriffen bis hin zu barrierefreien Badezimmern',
      },
      priceFrom: 150,
      businessModel: {
        time_management: Rate_Type_Enum.Daily,
        unit_management: Unit_Management_Enum.PerPax,
      },
      images: [
        IMG_PREFIX + "accessible-room-04.webp",
        IMG_PREFIX + "accessible-room-01.webp",
        IMG_PREFIX + "accessible-room-02.webp",
        IMG_PREFIX + "accessible-room-03.webp",
        IMG_PREFIX + "handicap-03.webp",
        IMG_PREFIX + "handicap-06.webp"
      ],
      rates: [
        {
          name: "standard",
          configuration: {
            type: "daily-per-pax",
            pricePerPax: 75,
            pricePerChild: 50,
          },
        },
      ],
      features: [
        { id: "NUMBER_OF_BEDS", value: 2 },
        { id: "NUMBER_OF_SOFA_BEDS", value: 2 },
        { id: "ACCESSIBILITY" },
        { id: "PRIVATE_BATHROOM" },
        { id: "HEALTH_AND_SAFETY" },
        { id: "INSURANCE_INCLUDED" },
        { id: "MULTILANGUAGE_STAFF" },
        { id: "WIFI" },
        { id: "AIR_CONDITIONING" },
        { id: "FREE_PARKING" },
        { id: "AREA", value: 60 },
        { id: "NON_SMOKING" },
      ],
    },
    {
      id: "fully-accessible-suite",
      name: {
        en: "Fully Accessible Suite",
        es: "Suite Totalmente Accesible",
        fr: "Suite Entièrement Accessible",
        de: "Vollständig barrierefreie Suite",
      },
      headline: {
        en: "Luxury and Accessibility Combined",
        es: "Lujo y Accesibilidad Combinados",
        fr: "Lux et Accessibilité Combinés",
        de: "Luxus und Barrierefreiheit kombiniert",
      },
      description: {
        en: "Our Fully Accessible Suites offer the perfect blend of luxury and accessibility for an unforgettable stay. These spacious suites are designed with accessible features and thoughtful touches to ensure a comfortable and hassle-free experience. From roll-in showers and grab bars to visual alarms and accessible amenities, our Fully Accessible Suites provide everything you need for a relaxing and enjoyable stay. Whether you're traveling for business or pleasure, our Fully Accessible Suites offer the ultimate in comfort and convenience for a stress-free stay.",
        es: 'Nuestras Suites Totalmente Accesibles ofrecen la combinación perfecta de lujo y accesibilidad para una estancia inolvidable. Estas amplias suites están diseñadas con características accesibles y toques considerados para garantizar una experiencia cómoda y sin complicaciones. Desde duchas con acceso para sillas de ruedas y barras de agarre hasta alarmas visuales y comodidades accesibles, nuestras Suites Totalmente Accesibles ofrecen todo lo que necesita para una estancia relajante y placentera. Ya sea que viaje por negocios o por placer, nuestras Suites Totalmente Accesibles ofrecen lo último en comodidad y conveniencia para una estancia sin estrés.',
        fr: "Nos suites entièrement accessibles offrent le parfait mélange de luxe et d'accessibilité pour un séjour inoubliable. Ces suites spacieuses sont conçues avec des fonctionnalités accessibles et des touches réfléchies pour garantir une expérience confortable et sans tracas. Des douches à accès roulant et des barres d'appui aux alarmes visuelles et aux équipements accessibles, nos suites entièrement accessibles offrent tout ce dont vous avez besoin pour un séjour relaxant et agréable. Que vous voyagiez pour affaires ou pour le plaisir, nos suites entièrement accessibles offrent le summum du confort et de la commodité pour un séjour sans stress.",
        de: 'Unsere vollständig barrierefreien Suiten bieten die perfekte Kombination aus Luxus und Zugänglichkeit für einen unvergesslichen Aufenthalt. Diese geräumigen Suiten sind mit barrierefreien Funktionen und durchdachten Details ausgestattet, um ein komfortables und stressfreies Erle',
      },
      priceFrom: 250,
      businessModel: {
        time_management: Rate_Type_Enum.Daily,
        unit_management: Unit_Management_Enum.PerPax,
      },
      images: [
        IMG_PREFIX + "accessible-room-01.webp",
        IMG_PREFIX + "accessible-room-02.webp",
        IMG_PREFIX + "accessible-room-03.webp",
        IMG_PREFIX + "accessible-room-04.webp",
        IMG_PREFIX + "handicap-04.webp",
        IMG_PREFIX + "handicap-07.webp"
      ],
      rates: [
        {
          name: "standard",
          configuration: {
            type: "daily-per-pax",
            pricePerPax: 150,
            pricePerChild: 80,
          },
        },
      ],
      features: [
        { id: "NUMBER_OF_BEDS", value: 4 },
        { id: "ACCESSIBILITY" },
        { id: "PRIVATE_BATHROOM" },
        { id: "HEALTH_AND_SAFETY" },
        { id: "INSURANCE_INCLUDED" },
        { id: "MULTILANGUAGE_STAFF" },
        { id: "WIFI" },
        { id: "AIR_CONDITIONING" },
        { id: "FREE_PARKING" },
        { id: "AREA", value: 60 },
        { id: "NON_SMOKING" },
      ],
    },
  ],
  facilities: [
    {
      id: "accessible-beach-excursions",
      title: {
        en: "Accessible Beach Excursions",
        es: "Excursiones a la Playa Accesibles",
        fr: "Excursions Plage Accessibles",
        de: "Barrierefreie Strandausflüge",
      },
      headline: {
        en: "Enjoy the Beach with Ease",
        es: "Disfruta la Playa con Facilidad",
        fr: "Profitez de la Plage en Toute Simplicité",
        de: "Den Strand mühelos genießen",
      },
      image: IMG_PREFIX + "beach-01.webp",
    },
    {
      id: "coastal-village-tours",
      title: {
        en: "Coastal Village Tours",
        es: "Recorridos por Pueblos Costeros",
        fr: "Visites de Villages Côtiers",
        de: "Küstendorf-Touren",
      },
      headline: {
        en: "Discover Coastal Charm",
        es: "Descubre el Encanto Costero",
        fr: "Découvrez le Charme Côtier",
        de: "Entdecke den Küstenzauber",
      },
      image: IMG_PREFIX + "coastal-village-01.webp",
    },
    {
      id: "mountain-town-adventures",
      title: {
        en: "Mountain Town Adventures",
        es: "Aventuras en Pueblos de Montaña",
        fr: "Aventures en Villages de Montagne",
        de: "Abenteuer in Bergdörfern",
      },
      headline: {
        en: "Explore Picturesque Villages",
        es: "Explora Pueblos Pintorescos",
        fr: "Explorez des Villages Pittoresques",
        de: "Entdecke malerische Dörfer",
      },
      image: IMG_PREFIX + "mountain-01.webp",
    },
    {
      id: "water-sports-for-all",
      title: {
        en: "Water Sports for All",
        es: "Deportes Acuáticos para Todos",
        fr: "Sports Nautiques pour Tous",
        de: "Wassersport für Alle",
      },
      headline: {
        en: "Splash into Adventure",
        es: "Zambúllete en la Aventura",
        fr: "Plongez dans l'Aventure",
        de: "Eintauchen ins Abenteuer",
      },
      image: IMG_PREFIX + "water-sports-01.webp",
    },
    {
      id: "adaptive-scuba-diving",
      title: {
        en: "Adaptive Scuba Diving",
        es: "Buceo Adaptado",
        fr: "Plongée Adaptée",
        de: "Adaptives Tauchen",
      },
      headline: {
        en: "Dive with Confidence",
        es: "Bucea con Confianza",
        fr: "Plongez en Toute Confiance",
        de: "Tauchen mit Vertrauen",
      },
      image: IMG_PREFIX + "scuba-01.webp",
    },
    {
      id: "culinary-tours",
      title: {
        en: "Culinary Tours",
        es: "Recorridos Gastronómicos",
        fr: "Visites Gastronomiques",
        de: "Kulinarische Touren",
      },
      headline: {
        en: "Savor Local Flavors",
        es: "Disfruta los Sabores Locales",
        fr: "Savourez les Saveurs Locales",
        de: "Genieße lokale Geschmacksrichtungen",
      },
      image: IMG_PREFIX + "food-04.webp",
    },
    {
      id: "guided-hiking-and-nature-walks",
      title: {
        en: "Guided Hiking and Nature Walks",
        es: "Senderismo Guiado y Paseos por la Naturaleza",
        fr: "Randonnées Guidées et Promenades en Pleine Nature",
        de: "Geführtes Wandern und Naturwanderungen",
      },
      headline: {
        en: "Discover Natural Beauty",
        es: "Descubre la Belleza Natural",
        fr: "Découvrez la Beauté de la Nature",
        de: "Entdecke die natürliche Schönheit",
      },
      image: IMG_PREFIX + "mountain-02.webp",
    },
    {
      id: "sunset-blokarting",
      title: {
        en: "Sunset Blokarting",
        es: "Blokarting al Atardecer",
        fr: "Blokarting au Coucher du Soleil",
        de: "Blokarting bei Sonnenuntergang",
      },
      headline: {
        en: "Experience the Thrill at Dusk",
        es: "Experimenta la Emoción al Anochecer",
        fr: "Vivez l'Excitation au Crépuscule",
        de: "Erlebe den Nervenkitzel bei Sonnenuntergang",
      },
      image: IMG_PREFIX + "sunset-01.webp",
    },
    {
      id: "swim-with-stingrays",
      title: {
        en: "Swim with Stingrays",
        es: "Nadar con Rayas",
        fr: "Nager avec les Raies",
        de: "Schwimmen mit Stachelrochen",
      },
      headline: {
        en: "A Memorable Encounter",
        es: "Un Encuentro Inolvidable",
        fr: "Une Rencontre Mémorable",
        de: "Ein Unvergessliches Erlebnis",
      },
      image: IMG_PREFIX + "rays-02.webp",
    },
    {
      id: "adventure-photography-workshops",
      title: {
        en: "Adventure Photography Workshops",
        es: "Talleres de Fotografía de Aventura",
        fr: "Ateliers de Photographie d'Aventure",
        de: "Abenteuerfotografie-Workshops",
      },
      headline: {
        en: "Capture the Spirit of Adventure",
        es: "Captura el Espíritu de la Aventura",
        fr: "Capturez l'Esprit de l'Aventure",
        de: "Erfassen Sie den Abenteuergeist",
      },
      image: IMG_PREFIX + "photography-01.webp",
    },
  ],
  gallery: {
    images: [
      IMG_PREFIX + "beach-02.webp",
      IMG_PREFIX + "mountain-03.webp",
      IMG_PREFIX + "coastal-village-02.webp",
      IMG_PREFIX + "food-05.webp",
      IMG_PREFIX + "photography-02.webp",
      IMG_PREFIX + "accessibililty-03.webp",
      IMG_PREFIX + "accessibililty-04.webp",
      IMG_PREFIX + "mediterraneum-01.webp",
      IMG_PREFIX + "mediterraneum-05.webp",
      IMG_PREFIX + "photography-03.webp",
      IMG_PREFIX + "photography-04.webp",
      IMG_PREFIX + "photography-05.webp",
      IMG_PREFIX + "mountain-04.webp",
      IMG_PREFIX + "mountain-05.webp",
      IMG_PREFIX + "water-sports-03.webp",
      IMG_PREFIX + "water-sports-04.webp",
      IMG_PREFIX + "guide-01.webp",
      IMG_PREFIX + "coastal-village-04.webp"
    ],
  },
  highlights: {
    image: IMG_PREFIX + "mediterraneum-04.webp",
    points: [
      {
        title: {
          en: 'Unparalleled Inclusivity',
          es: 'Inclusión Inigualable',
          fr: 'Inclusion Inégalée',
          de: 'Unvergleichliche Inklusivität',
        },
        headline: {
          en: 'Breaking Barriers, Embracing All',
          es: 'Rompiendo Barreras, Aceptando a Todos',
          fr: 'Brisez les Barrières, Accueillez Tous',
          de: 'Barrieren durchbrechen, Alle Willkommen heißen',
        },
      },
      {
        title: {
          en: 'Tailored Experiences',
          es: 'Experiencias Personalizadas',
          fr: 'Expériences Sur Mesure',
          de: 'Maßgeschneiderte Erlebnisse',
        },
        headline: {
          en: 'Adventure Crafted Around You',
          es: 'Aventura Adaptada a Ti',
          fr: 'Aventure Faite Sur Mesure',
          de: 'Abenteuer, Das Sich an Dich Anpasst',
        },
      },
      {
        title: {
          en: 'Expert Guidance',
          es: 'Orientación Experta',
          fr: 'Guidance Experte',
          de: 'Expertenrat',
        },
        headline: {
          en: 'Your Adventure, Guided by Experts',
          es: 'Tu Aventura, Guiada por Expertos',
          fr: 'Votre Aventure, Guidée par des Experts',
          de: 'Ihr Abenteuer, Geleitet von Experten',
        },
      },
    ],
  },
  productGroups: [
    {
      id: "activities",
      name: {
        en: "Activities",
        es: "Actividades",
        de: "Aktivitäten",
        fr: "Activités",
      },
      headline: {
        en: "Exciting Adventures Await!",
        es: "¡Aventuras emocionantes te esperan!",
        de: "Spannende Abenteuer warten auf dich!",
        fr: "Des aventures excitantes vous attendent !",
      },
      description: {
        en: "Explore a wide range of thrilling activities suitable for all ages and interests. From outdoor adventures to cultural experiences, there's something for everyone.",
        es: "Explora una amplia variedad de actividades emocionantes para todas las edades.",
        de: "Erkunde eine Vielzahl aufregender Aktivitäten für alle Altersgruppen.",
        fr: "Explorez une vaste gamme d'activités passionnantes adaptées à tous les âges.",
      },
      image: IMG_PREFIX + "mediterraneum-02.webp",
      productsInGroup: [
        "golf-excursion",
        "blokarting-at-sunset",
        "swiming-with-stingrays"
      ],
    },
    {
      id: "rentals",
      name: {
        en: "Rentals",
        es: "Alquileres",
        de: "Verleih",
        fr: "Locations",
      },
      headline: {
        en: "Convenient Rentals for Your Adventure",
        es: "Alquileres convenientes para tu aventura",
        de: "Bequeme Vermietungen für dein Abenteuer",
        fr: "Locations pratiques pour votre aventure",
      },
      description: {
        en: "Make your adventure hassle-free with our convenient rental services. Whether you need equipment for a day or a week-long excursion, we have you covered.",
        es: "Disfruta de una aventura sin complicaciones con nuestros servicios de alquiler.",
        de: "Erleben Sie ein stressfreies Abenteuer mit unserem Mietservice.",
        fr: "Simplifiez votre aventure grâce à notre service de location.",
      },
      image: IMG_PREFIX + "mediterraneum-03.webp",
      productsInGroup: [
        "golf-mobility-machine-rental",
        "blokarting-machine-rental"
      ],
    },
    {
      id: "water-activities",
      name: {
        en: "Water Activities",
        es: "Actividades Acuáticas",
        de: "Wasseraktivitäten",
        fr: "Activités Nautiques",
      },
      headline: {
        en: "Dive into Aquatic Adventures!",
        es: "¡Sumérgete en aventuras acuáticas!",
        de: "Tauche ein in aquatische Abenteuer!",
        fr: "Plongez dans les aventures aquatiques !",
      },
      description: {
        en: "Experience the thrill of water-based adventures with our exciting range of activities. There's something for every water lover.",
        es: "Disfruta de la emoción de los deportes acuáticos para todos los amantes del agua.",
        de: "Erleben Sie den Nervenkitzel von Wassersportarten für jeden Wassersportfan.",
        fr: "Vivez l'excitation des activités nautiques pour tous les passionnés d'eau.",
      },
      image: IMG_PREFIX + "water-sports-02.webp",
      productsInGroup: ["blokarting-at-sunset", "swiming-with-stingrays"],
    },
    {
      id: "excursions",
      name: {
        en: "Excursions",
        es: "Excursiones",
        de: "Ausflüge",
        fr: "Excursions",
      },
      headline: {
        en: "Explore and Discover with Our Excursions",
        es: "Explora y Descubre con Nuestras Excursiones",
        de: "Erkunden und Entdecken Sie mit unseren Ausflügen",
        fr: "Explorez et Découvrez avec Nos Excursions",
      },
      description: {
        en: "Immerse yourself in unforgettable guided excursions. Discover hidden gems, cultural landmarks, and breathtaking landscapes.",
        es: "Sumérgete en excursiones inolvidables y descubre lugares únicos.",
        de: "Erleben Sie unvergessliche Ausflüge und entdecken Sie verborgene Schätze.",
        fr: "Plongez dans des excursions inoubliables et découvrez des trésors cachés.",
      },
      image: IMG_PREFIX + "mediterraneum-04.webp",
      productsInGroup: ["blokarting-at-sunset", "swiming-with-stingrays"],
    },
    {
      id: "adapted-accommodations",
      name: {
        en: "Adapted Accommodations",
        es: "Alojamientos Adaptados",
        de: "Barrierefreie Unterkünfte",
        fr: "Hébergements Adaptés",
      },
      headline: {
        en: "Accessible Stays for Everyone",
        es: "Estancias Accesibles para Todos",
        de: "Barrierefreie Aufenthalte für Jeden",
        fr: "Séjours Accessibles pour Tous",
      },
      description: {
        en: "Discover comfortable, accessible accommodations designed to meet every need. Enjoy a relaxing, stress-free stay with thoughtful features.",
        es: "Descubre alojamientos accesibles y cómodos para todas las necesidades.",
        de: "Erleben Sie barrierefreie Unterkünfte, die auf alle Bedürfnisse zugeschnitten sind.",
        fr: "Découvrez des hébergements accessibles et confortables pour un séjour sans souci.",
      },
      image: IMG_PREFIX + "accessible-room-01.webp",
      productsInGroup: ["standard-accessible-room", "fully-accessible-suite"],
    },
  ],
  venue: {
    place: {
      name: "Via Fontanella 5-1, 19025 Portovenere La Spezia, Italy",
      latitude: 44.064584,
      longitude: 9.830261,
    },
    description: {
      en: "Our venue is nestled in the heart of Liguria, Italy, offering a gateway to the stunning Ligurian coast and picturesque mountain towns. AccessibleAdventures welcomes you to a place where natural beauty meets inclusivity.",
      es: "Nuestro lugar está en el corazón de Liguria, Italia, ofreciendo acceso a la impresionante costa y pintorescos pueblos de montaña.",
      fr: "Notre lieu est niché au cœur de la Ligurie, en Italie, et offre un accès à une côte spectaculaire et à des villages pittoresques.",
      de: "Unser Veranstaltungsort liegt im Herzen Liguriens, Italien, und bietet Zugang zu einer atemberaubenden Küste und malerischen Bergdörfern.",
    },
    goodToKnow: {
      en: `
      **Booking and Check-In Instructions:**
      Please book in advance to ensure a smooth experience. This allows us to prepare the necessary equipment and accommodations. Arrive 20 minutes early for check-in.
      `,
      es: `
      **Instrucciones de Reserva y Registro:**
      Realice su reserva con antelación para asegurar una experiencia fluida. Llegue 20 minutos antes para el registro.
      `,
      fr: `
      **Instructions de Réservation et d'Enregistrement:**
      Réservez à l'avance pour une expérience sans accrocs. Veuillez arriver 20 minutes avant pour l'enregistrement.
      `,
      de: `
      **Buchungs- und Check-In-Anweisungen:**
      Bitte buchen Sie im Voraus, um einen reibungslosen Ablauf zu gewährleisten. Kommen Sie 20 Minuten vor Beginn zum Einchecken.
      `,
    },
  }
};
