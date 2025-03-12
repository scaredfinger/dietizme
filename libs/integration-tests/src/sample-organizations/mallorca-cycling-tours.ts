import { env } from 'process'

import { OrganizationProto } from '../common-operations'
import { Booking_Question_Scope_Enum, Booking_Question_Type_Enum } from '@otiuming/domain-omnidata-types'

export const mallorcaCyclingTours: OrganizationProto = {
  settings: {
    name: 'Mallorca Cycling Tours',
    headline: {
      en: 'Turning cycling dreams into reality with unforgettable Mallorca bike tours.',
      es: 'Haciendo realidad sueños ciclistas con inolvidables tours en bicicleta por Mallorca.',
      fr: 'Réalisation de rêves de cyclisme avec des circuits à vélo inoubliables à Majorque.',
      de: 'Verwirklichung von Radträumen mit unvergesslichen Fahrradtouren auf Mallorca.',
    },
    phone: '+34 777 888 999',
    socials: {
      facebook: 'https://www.facebook.com/mallorca-cycling-tours',
      instagram: 'https://www.instagram.com/mallorca-cycling-tours',
      twitter: 'https://www.twitter.com/mallorca-cycling-tours',
      youtube: 'https://www.youtube.com/mallorca-cycling-tours',
    },
  },
  admin: {
    email: 'mallorca-cycling-trours@grr.la',
    password: env.SAMPLE_DATA_PASSWORD,
  },
  theme: {
    metaTitle: {
      en: 'Discover Unforgettable Mallorca Bike Tours',
      es: 'Descubre Inolvidables Tours en Bicicleta por Mallorca',
      fr: 'Découvrez des Circuits à Vélo Inoubliables à Majorque',
      de: 'Erleben Sie Unvergessliche Fahrradtouren auf Mallorca',
    },
    metaDescription: {
      en: 'Explore Mallorca Cycling Tours and embark on an adventure of a lifetime. Discover scenic routes, premium bikes, and personalized service for a unique cycling experience.',
      es: 'Explora Mallorca Cycling Tours y emprende una aventura única. Descubre rutas escénicas, bicicletas de alta gama y servicio personalizado para una experiencia ciclista inigualable.',
      fr: 'Découvrez Mallorca Cycling Tours et embarquez pour une aventure exceptionnelle. Parcourez des itinéraires pittoresques, des vélos haut de gamme et un service personnalisé pour une expérience de cyclisme unique.',
      de: 'Erkunden Sie Mallorca Cycling Tours und begeben Sie sich auf ein Abenteuer fürs Leben. Entdecken Sie malerische Strecken, hochwertige Fahrräder und persönlichen Service für ein einzigartiges Raderlebnis.',
    },
    favicon: 'https://img.logoipsum.com/226.png',
    logo: 'https://img.logoipsum.com/226.png',
    logoLight: 'https://img.logoipsum.com/226.png',
  },
  pages: {
    home: {
      title: {
        en: 'Unforgettable Cycling',
        es: 'Ciclismo Inolvidable',
        fr: 'Cyclisme Inoubliable',
        de: 'Unvergessliches Radfahren',
      },
      subtitle: {
        en: 'Explore Mallorca Tours (Test data)',
        es: 'Explora Tours Mallorca (Datos de prueba)',
        fr: 'Découvrez Excursions Majorque (Données de test',
        de: 'Erkunde Mallorca Touren (Testdaten)',
      },
      heroImage: 'https://source.unsplash.com/_k31aFqnmTM',
    },
  },
  products: [
    {
      id: 'tramuntanaTour',
      priceFrom: 28,
      name: {
        en: 'Tramuntana Mountains Tour',
        es: 'Tour por las Montañas de la Tramuntana',
        fr: 'Tour des Montagnes de la Tramuntana',
        de: 'Tour durch die Tramuntana-Berge',
      },
      headline: {
        en: "A challenging ride through Mallorca's Tramuntana Mountains with stunning coastal vistas.",
        es: 'Un recorrido desafiante por las Montañas de la Tramuntana en Mallorca con impresionantes vistas costeras.',
        fr: 'Une randonnée exigeante à travers les montagnes de la Tramuntana à Majorque offrant des vues spectaculaires sur la côte.',
        de: 'Eine anspruchsvolle Fahrt durch die Tramuntana-Berge von Mallorca mit atemberaubenden Küstenblicken.',
      },
      description: {
        en: "Embark on an exhilarating journey through Mallorca's iconic Tramuntana Mountains, a UNESCO World Heritage site renowned for its dramatic landscapes. This tour offers cyclists a thrilling challenge as they conquer steep ascents and thrilling descents, all while being treated to breathtaking views of the rugged coastline and charming villages.",
        es: 'Begib dich auf eine aufregende Reise durch die legendären Tramuntana-Berge von Mallorca, einem sitio de Patrimonio Mundial de la UNESCO conocido por sus paisajes dramáticos. Diese Gira ofrece a los ciclistas un emocionante desafío mientras conquistan ascensos empinados y emocionantes descensos, todo mientras disfrutan de impresionantes vistas de la costa accidentada y los encantadores pueblos.',
        fr: "Entamez un voyage palpitant à travers les emblématiques montagnes de la Tramuntana à Majorque, site classé au patrimoine mondial de l'UNESCO réputé pour ses paysages spectaculaires. Cette visite offre aux cyclistes un défi exaltant tandis qu'ils conquièrent des ascensions abruptes et des descentes palpitantes, tout en profitant de vues à couper le souffle sur la côte accidentée et les villages pittoresques.",
        de: 'Embarca en un emocionante viaje a través de la icónica Sierra de Tramuntana en Mallorca, un sitio de Patrimonio Mundial de la UNESCO conocido por sus paisajes dramáticos. Este recorrido ofrece a los ciclistas un emocionante desafío mientras conquistan ascensos empinados y emocionantes descensos, todo mientras disfrutan de impresionantes vistas de la costa accidentada y los encantadores pueblos.',
      },
      images: [
        'https://source.unsplash.com/0uVjYEwFyf0',
        'https://source.unsplash.com/Dnel83cn4dk',
        'https://source.unsplash.com/V0VFSmUdeLU',
        'https://source.unsplash.com/DrWNzeNuu5M',
        'https://source.unsplash.com/eQDjx1ZufpE',
        'https://source.unsplash.com/DxEEeHO-Ej8',
        'https://source.unsplash.com/f6FdIjVW5ow',
      ],
      rates: [
        {
          name: 'standard',
          calendar: [
            {
              from: new Date(2000, 1, 1),
              to: new Date(2999, 12, 31),
              daily: 99,
            }
          ]
        }
      ]
    },
    {
      id: 'palmaCoastalTour',
      priceFrom: 33,
      name: {
        en: 'Palma Coastal Tour',
        es: 'Tour Costero de Palma',
        fr: 'Tour Côtier de Palma',
        de: 'Küstentour von Palma',
      },
      headline: {
        en: "Explore Palma's coastal beauty and sandy beaches on this leisurely bike ride.",
        es: 'Explora la belleza costera y las playas de Palma en este relajante paseo en bicicleta.',
        fr: 'Explorez la beauté côtière de Palma et les plages de sable lors de cette promenade tranquille à vélo.',
        de: 'Erkunde die Schönheit der Küste und die Sandstrände von Palma bei dieser entspannten Fahrradtour.',
      },
      description: {
        en: "Immerse yourself in the idyllic charm of Palma's coastal wonders with this leisurely bike tour. Pedal along the picturesque coastline, enjoying the caress of the sea breeze and the mesmerizing views of the Mediterranean's azure waters. This tour is perfect for cyclists of all levels who seek a relaxing yet scenic adventure, where sandy beaches and charming coastal villages await your exploration.",
        es: 'Sumérgete en el encanto idílico de las maravillas costeras de Palma con este relajante recorrido en bicicleta. Pedalea a lo largo de la pintoresca costa, disfrutando de la caricia de la brisa marina y las vistas hipnóticas del azul Mediterráneo. Esta gira es perfecta para ciclistas de todos los niveles que buscan una aventura relajante y pintoresca, donde playas de arena y encantadores pueblos costeros esperan tu exploración.',
        fr: "Immergez-vous dans le charme idyllique des merveilles côtières de Palma lors de cette paisible balade à vélo. Pédalez le long du littoral pittoresque, profitant de la caresse de la brise marine et des vues envoûtantes sur les eaux azur de la Méditerranée. Cette visite est parfaite pour les cyclistes de tous niveaux à la recherche d'une aventure relaxante et pittoresque, où plages de sable et villages côtiers charmants vous attendent.",
        de: 'Tauche ein in den idyllischen Charme von Palmers Küstenwundern bei dieser entspannten Fahrradtour. Radel entlang der malerischen Küste, genieße die sanfte Brise des Meeres und die faszinierenden Ausblicke auf das azurblaue Mittelmeer. Diese Tour ist perfekt für Radfahrer aller Levels, die ein entspannendes und malerisches Abenteuer suchen, bei dem sandige Strände und charmante Küstendörfer warten.',
      },
      images: [
        'https://source.unsplash.com/PO4HEv2HAv4',
        'https://source.unsplash.com/1OP1kTrnQUI',
        'https://source.unsplash.com/1xK9jzmR-18',
        'https://source.unsplash.com/jECQTSI1vfg',
        'https://source.unsplash.com/qxxuXNFZjWI',
        'https://source.unsplash.com/BCRSoM6FB_U',
        'https://source.unsplash.com/LgxbeU9xGRg',
      ],
      rates: [
        {
          name: 'standard',
          calendar: [
            {
              from: new Date(2000, 1, 1),
              to: new Date(2999, 12, 31),
              daily: 99,
            }
          ]
        }
      ]
    },
    {
      id: 'interiorFlatlandsTour',
      priceFrom: 43,
      name: {
        en: 'Mallorca Interior Flatlands Tour',
        es: 'Tour por las Tierras Planas del Interior de Mallorca',
        fr: "Tour des Plaines de l'Intérieur de Majorque",
        de: 'Tour durch das Landesinnere von Mallorca',
      },
      headline: {
        en: "A serene bike journey through Mallorca's tranquil interior landscapes.",
        es: 'Un tranquilo viaje en bicicleta a través de los apacibles paisajes del interior de Mallorca.',
        fr: "Un voyage paisible à vélo à travers les paysages tranquilles de l'intérieur de Majorque.",
        de: 'Eine friedliche Fahrradfahrt durch die ruhigen Landschaften des mallorquinischen Inselinneren.',
      },
      description: {
        en: "Delve into the heart of Mallorca's tranquil interior on a leisurely bike tour that unveils the island's hidden treasures. Traverse through serene farmlands, quaint traditional villages, and verdant countryside, as you enjoy the gentle undulations of the landscape. This tour promises a peaceful retreat for cyclists who crave a serene escape into Mallorca's authentic rural life.",
        es: 'Sumérgete en el corazón del tranquilo interior de Mallorca en un relajante recorrido en bicicleta que revela los tesoros ocultos de la isla. Recorre apacibles tierras de cultivo, pintorescos pueblos tradicionales y verdes campos, mientras disfrutas de las suaves ondulaciones del paisaje. Esta gira promete un retiro tranquilo para los ciclistas que anhelan una escapada serena a la auténtica vida rural de Mallorca.',
        fr: "Plongez au cœur de l'intérieur paisible de Majorque lors d'une balade à vélo paisible qui dévoile les trésors cachés de l'île. Traversez des champs sereins, des villages traditionnels pittoresques et une campagne verdoyante, tout en profitant des douces ondulations du paysage. Cette visite promet une retraite paisible pour les cyclistes en quête d'une évasion sereine dans la vie rurale authentique de Majorque.",
        de: 'Tauche in das Herz des ruhigen Inselinneren von Mallorca auf einer entspannten Fahrradtour, die die verborgenen Schätze der Insel enthüllt. Durchquere friedliche Felder, malerische traditionelle Dörfer und grüne Landschaften, während du die sanften Erhebungen des Geländes genießt. Diese Tour verspricht einen friedlichen Rückzugsort für Radfahrer, die nach einer ruhigen Flucht in das authentische Landleben Mallorcas verlangen.',
      },
      images: [
        'https://source.unsplash.com/ZawEpGkz9Zc',
        'https://source.unsplash.com/hGWBjnWaO8U',
        'https://source.unsplash.com/bbEw5Aa0S2A',
        'https://source.unsplash.com/XC_XSqraRvM',
        'https://source.unsplash.com/CyD-_nN19bc',
        'https://source.unsplash.com/9DHCvqAM2oA',
        'https://source.unsplash.com/QP0topr6RYs',
      ],
      rates: [
        {
          name: 'standard',
          calendar: [
            {
              from: new Date(2000, 1, 1),
              to: new Date(2999, 12, 31),
              daily: 99,
            }
          ]
        }
      ]
    },
    {
      id: 'palmaArenalTour',
      priceFrom: 27,
      name: {
        en: 'Palma to Arenal Tour',
        es: 'Tour de Palma a Arenal',
        fr: 'Tour de Palma à Arenal',
        de: 'Tour von Palma nach Arenal',
      },
      headline: {
        en: "Experience the vibrant contrasts of Palma's urban charm and Arenal's coastal allure.",
        es: 'Experimenta los vibrantes contrastes del encanto urbano de Palma y la atracción costera de Arenal.',
        fr: "Découvrez les contrastes vibrants du charme urbain de Palma et de l'attrait côtier d'Arenal.",
        de: 'Erlebe die lebendigen Kontraste des städtischen Charmes von Palma und der Küstenattraktion von Arenal.',
      },
      description: {
        en: "This captivating journey invites you to revel in the dynamic contrasts of Mallorca's city and coast. Commence your adventure amidst the enchanting streets of Palma, where historic architecture and bustling markets create an irresistible charm. As the tour continues, the vibrant cityscape transitions seamlessly to Arenal's sun-soaked beaches, where you can bask in the glory of the Mediterranean and indulge in the lively coastal ambiance.",
        es: 'Este cautivador viaje te invita a disfrutar de los contrastes dinámicos entre la ciudad y la costa de Mallorca. Comienza tu aventura en las encantadoras calles de Palma, donde la arquitectura histórica y los animados mercados crean un encanto irresistible. A medida que el recorrido continúa, el vibrante paisaje urbano se transforma sin problemas en las soleadas playas de Arenal, donde podrás disfrutar del esplendor del Mediterráneo e indulgir en la animada atmósfera costera.',
        fr: "Cette aventure captivante vous invite à vous immerger dans les contrastes dynamiques de la ville et de la côte de Majorque. Commencez votre aventure au milieu des rues enchantées de Palma, où l'architecture historique et les marchés animés créent un charme irrésistible. À mesure que la visite se poursuit, le paysage urbain vibrant se transforme sans heurts en plages ensoleillées d'Arenal, où vous pourrez vous prélasser dans la splendeur de la Méditerranée et vous imprégner de l'atmosphère côtière animée.",
        de: 'Diese fesselnde Reise lädt dich ein, die dynamischen Kontraste zwischen Stadt und Küste von Mallorca zu genießen. Beginne dein Abenteuer in den bezaubernden Straßen von Palma, wo historische Architektur und lebhafte Märkte einen unwiderstehlichen Charme schaffen. Während die Tour fortschreitet, verwandelt sich die lebendige Stadtkulisse nahtlos in die sonnenverwöhnten Strände von Arenal, wo du im Glanz des Mittelmeers schwelgen und in der lebhaften Küstenatmosphäre eintauchen kannst.',
      },
      images: [
        'https://source.unsplash.com/Jw7XWNoYDM0',
        'https://source.unsplash.com/iywxir7Dh4M',
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/Mallorca_S%27Arenal_beach_%2830813844605%29.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/7/73/Mallorca_Arenal_%2830182000454%29.jpg',
      ],
      rates: [
        {
          name: 'standard',
          calendar: [
            {
              from: new Date(2000, 1, 1),
              to: new Date(2999, 12, 31),
              daily: 99,
            }
          ]
        }
      ]
    },
    {
      id: 'child',
      priceFrom: 16,
      name: {
        en: "Kid's Adventure Ride",
        es: 'Paseo de Aventura para Niños',
        fr: 'Balade Aventure pour Enfants',
        de: 'Abenteuerfahrt für Kinder',
      },
      headline: {
        en: 'An exciting cycling journey designed for young adventurers and their families.',
        es: 'Un emocionante paseo en bicicleta diseñado para jóvenes aventureros y sus familias.',
        fr: 'Une balade à vélo passionnante conçue pour les jeunes aventuriers et leurs familles.',
        de: 'Eine aufregende Fahrradtour für junge Abenteurer und ihre Familien.',
      },
      description: {
        en: "Join us on the Kid's Adventure Ride, a fun-filled cycling tour tailored for young riders and their families. This tour features safe and scenic routes, interactive stops, and opportunities for kids to learn about nature and cycling. Our friendly guides will ensure a memorable experience as you explore picturesque landscapes and enjoy quality time together. Let your kids pedal their way to excitement and discovery!",
        es: 'Únete a nosotros en el Paseo de Aventura para Niños, un tour en bicicleta lleno de diversión diseñado para jóvenes ciclistas y sus familias. Este tour ofrece rutas seguras y pintorescas, paradas interactivas y oportunidades para que los niños aprendan sobre la naturaleza y el ciclismo. Nuestros amigables guías garantizarán una experiencia memorable mientras exploran paisajes pintorescos y disfrutan de tiempo de calidad juntos. ¡Deja que tus hijos pedaleen hacia la emoción y el descubrimiento!',
        fr: "Rejoignez-nous pour la Balade Aventure pour Enfants, une excursion à vélo remplie de plaisir conçue pour les jeunes cyclistes et leurs familles. Cette excursion propose des itinéraires sécuritaires et pittoresques, des arrêts interactifs et des opportunités pour que les enfants apprennent la nature et le cyclisme. Nos guides sympathiques veilleront à une expérience mémorable pendant que vous explorez des paysages pittoresques et profitez d'un moment de qualité ensemble. Laissez vos enfants pédaler vers l'excitation et la découverte !",
        de: 'Begleiten Sie uns auf der Abenteuerfahrt für Kinder, einer spaßigen Fahrradtour, die speziell für junge Radfahrer und ihre Familien konzipiert wurde. Diese Tour bietet sichere und malerische Strecken, interaktive Stopps und Gelegenheiten für Kinder, mehr über die Natur und das Radfahren zu erfahren. Unsere freundlichen Guides sorgen für ein unvergessliches Erlebnis, während Sie malerische Landschaften erkunden und gemeinsam eine schöne Zeit verbringen. Lassen Sie Ihre Kinder auf dem Fahrrad die Aufregung und Entdeckung erleben!',
      },
      images: [
        'https://source.unsplash.com/AGIYSE6-WgE',
        'https://source.unsplash.com/42Z4wvISyKY',
        'https://source.unsplash.com/kwymB90JZTE',
        'https://source.unsplash.com/379kd7YDRWU',
        'https://source.unsplash.com/J79K2-exXYE',
      ],
      rates: [
        {
          name: 'standard',
          calendar: [
            {
              from: new Date(2000, 1, 1),
              to: new Date(2999, 12, 31),
              daily: 99,
            }
          ]
        }
      ]
    },
    {
      id: 'teen',
      priceFrom: 22,
      name: {
        en: 'Teen Adventure Trek',
        es: 'Expedición de Aventura para Adolescentes',
        fr: 'Randonnée Aventure pour Ados',
        de: 'Abenteuerliche Tour für Jugendliche',
      },
      headline: {
        en: 'An exciting and dynamic cycling expedition designed for teenagers and young adventurers.',
        es: 'Una emocionante y dinámica expedición en bicicleta diseñada para adolescentes y jóvenes aventureros.',
        fr: 'Une excitante et dynamique expédition à vélo conçue pour les adolescents et les jeunes aventuriers.',
        de: 'Eine aufregende und dynamische Fahrradexpedition für Teenager und junge Abenteurer.',
      },
      description: {
        en: 'Join the Teen Adventure Trek, an energetic cycling expedition created for teenagers seeking an action-packed outdoor experience. This tour combines thrilling trails, exciting challenges, and opportunities for young riders to push their limits. Our experienced guides will lead you through diverse terrains, from mountain paths to coastal roads, providing a sense of accomplishment and adventure. Get ready for an unforgettable journey that will leave teens inspired and invigorated!',
        es: 'Únete a la Expedición de Aventura para Adolescentes, una enérgica expedición en bicicleta creada para adolescentes que buscan una experiencia al aire libre llena de acción. Este tour combina senderos emocionantes, desafíos apasionantes y oportunidades para que los jóvenes ciclistas superen sus límites. Nuestros guías experimentados te llevarán a través de terrenos diversos, desde senderos de montaña hasta carreteras costeras, brindando un sentido de logro y aventura. ¡Prepárate para un viaje inolvidable que dejará a los adolescentes inspirados y revitalizados!',
        fr: "Participez à la Randonnée Aventure pour Ados, une expédition à vélo énergique conçue pour les adolescents à la recherche d'une expérience en plein air riche en action. Cette excursion combine des sentiers palpitants, des défis excitants et des opportunités pour les jeunes cyclistes de repousser leurs limites. Nos guides expérimentés vous guideront à travers des terrains divers, des sentiers de montagne aux routes côtières, offrant un sentiment d'accomplissement et d'aventure. Préparez-vous pour un voyage inoubliable qui laissera les adolescents inspirés et revigorés !",
        de: 'Begleiten Sie uns auf der abenteuerlichen Tour für Jugendliche, einer energiegeladenen Fahrradexpedition, die speziell für Teenager entwickelt wurde, die ein actiongeladenes Outdoor-Erlebnis suchen. Diese Tour kombiniert aufregende Trails, spannende Herausforderungen und Gelegenheiten für junge Radfahrer, an ihre Grenzen zu gehen. Unsere erfahrenen Guides führen Sie durch verschiedene Gelände, von Bergpfaden bis zu Küstenstraßen, und vermitteln ein Gefühl von Erfolg und Abenteuer. Machen Sie sich bereit für eine unvergessliche Reise, die Jugendliche inspiriert und belebt!',
      },
      images: [
        'https://source.unsplash.com/wWs8SQz8hP0',
        'https://source.unsplash.com/AsahNlC0VhQ',
        'https://source.unsplash.com/8YMYu9hwdCI',
        'https://source.unsplash.com/IRiBVHL5p_0',
        'https://source.unsplash.com/-aTQXiEK9uo',
      ],
      rates: [
        {
          name: 'standard',
          calendar: [
            {
              from: new Date(2000, 1, 1),
              to: new Date(2999, 12, 31),
              daily: 99,
            }
          ]
        }
      ]
    },
    {
      id: 'elder',
      priceFrom: 27,
      name: {
        en: 'Golden Years Ride',
        es: 'Paseo de los Años Dorados',
        fr: "Balade des Années d'Or",
        de: 'Tour der Goldenen Jahre',
      },
      headline: {
        en: 'A gentle and scenic cycling tour designed for seniors to enjoy the beauty of Mallorca.',
        es: 'Un suave y pintoresco paseo en bicicleta diseñado para que los adultos mayores disfruten de la belleza de Mallorca.',
        fr: 'Une douce et pittoresque balade à vélo conçue pour que les seniors profitent de la beauté de Majorque.',
        de: 'Eine sanfte und malerische Fahrradtour, die für Senioren entwickelt wurde, um die Schönheit von Mallorca zu genießen.',
      },
      description: {
        en: "Experience the Golden Years Ride, a leisurely cycling tour tailor-made for seniors who want to explore Mallorca's enchanting landscapes at a relaxed pace. This tour features gentle routes, comfortable breaks, and opportunities to appreciate the island's culture and history. Our caring guides will ensure a comfortable and enjoyable ride, allowing you to create cherished memories in the company of fellow adventurers. Embrace the tranquility and beauty of Mallorca as you pedal through its golden years.",
        es: 'Vive el Paseo de los Años Dorados, un suave paseo en bicicleta especialmente diseñado para adultos mayores que desean explorar los encantadores paisajes de Mallorca a un ritmo relajado. Este tour ofrece rutas suaves, descansos cómodos y oportunidades para apreciar la cultura e historia de la isla. Nuestros atentos guías garantizarán un paseo cómodo y placentero, permitiéndote crear recuerdos invaluables en compañía de otros aventureros. Abraza la tranquilidad y belleza de Mallorca mientras pedaleas en sus años dorados.',
        fr: "Découvrez la Balade des Années d'Or, une douce balade à vélo spécialement conçue pour les seniors qui souhaitent explorer les paysages enchanteurs de Majorque à un rythme détendu. Cette excursion propose des itinéraires doux, des pauses confortables et des opportunités pour apprécier la culture et l'histoire de l'île. Nos guides attentionnés veilleront à une balade confortable et agréable, vous permettant de créer des souvenirs précieux en compagnie d'autres aventuriers. Embrassez la tranquillité et la beauté de Majorque tout en pédalant à travers ses années dorées.",
        de: 'Erleben Sie die Tour der Goldenen Jahre, eine gemütliche Fahrradtour, die speziell für Senioren entwickelt wurde, um die bezaubernden Landschaften Mallorcas in einem entspannten Tempo zu erkunden. Diese Tour bietet sanfte Strecken, bequeme Pausen und Gelegenheiten, die Kultur und Geschichte der Insel zu schätzen. Unsere fürsorglichen Guides sorgen für eine angenehme und genussvolle Fahrt, die es Ihnen ermöglicht, kostbare Erinnerungen in Gesellschaft von Mitabenteurern zu schaffen. Umarmen Sie die Ruhe und Schönheit Mallorcas, während Sie durch seine goldenen Jahre radeln.',
      },
      images: [
        'https://source.unsplash.com/b-j3xVRBZF0',
        'https://source.unsplash.com/ahxMi_-w0jE',
        'https://source.unsplash.com/gGStaIejsq4',
        'https://source.unsplash.com/RcjeWcr_KZ4',
        'https://source.unsplash.com/bSVQzLryxtY',
        'https://source.unsplash.com/nJ2vb71-hb4',
      ],
      rates: [
        {
          name: 'standard',
          calendar: [
            {
              from: new Date(2000, 1, 1),
              to: new Date(2999, 12, 31),
              daily: 99,
            }
          ]
        }
      ]
    },
    {
      id: 'historical',
      priceFrom: 33,
      name: {
        en: 'Historical Palma Expedition',
        es: 'Expedición Histórica por Palma',
        fr: 'Expédition Historique à Palma',
        de: 'Historische Palma-Expedition',
      },
      headline: {
        en: 'Explore the rich history of Palma through its iconic historical landmarks and charming streets.',
        es: 'Explora la rica historia de Palma a través de sus icónicos lugares históricos y encantadoras calles.',
        fr: 'Explorez la riche histoire de Palma à travers ses monuments historiques emblématiques et ses rues charmantes.',
        de: 'Erkunden Sie die reiche Geschichte von Palma anhand seiner ikonischen historischen Wahrzeichen und charmanten Straßen.',
      },
      description: {
        en: "Embark on the Historical Palma Expedition, a captivating journey through the city's centuries-old history. Led by knowledgeable guides, this tour takes you to architectural marvels such as the impressive Palma Cathedral, a masterpiece of Gothic design. Wander through the narrow alleys of the Old Town, where every corner reveals stories of the past. Explore the Royal Palace of La Almudaina, a stunning palace with Moorish roots, and immerse yourself in the vibrant culture of Palma's local markets and plazas. Whether you're a history enthusiast or simply curious about the city's heritage, this tour offers a unique blend of education and exploration.",
        es: 'Embárcate en la Expedición Histórica por Palma, un cautivador viaje a través de la historia centenaria de la ciudad. Guiados por expertos, este tour te lleva a maravillas arquitectónicas como la impresionante Catedral de Palma, una obra maestra del diseño gótico. Deambula por las estrechas callejuelas del Casco Antiguo, donde cada rincón revela historias del pasado. Explora el Palacio Real de La Almudaina, un impresionante palacio de raíces moriscas, e sumérgete en la vibrante cultura de los mercados locales y plazas de Palma. Ya seas un entusiasta de la historia o simplemente tengas curiosidad por el patrimonio de la ciudad, este tour ofrece una combinación única de educación y exploración.',
        fr: "Partez à l'Expédition Historique à Palma, un voyage captivant à travers les siècles d'histoire de la ville. Guidé par des guides compétents, ce tour vous emmène vers des merveilles architecturales telles que l'impressionnante Cathédrale de Palma, un chef-d'œuvre du style gothique. Flânez dans les ruelles étroites de la Vieille Ville, où chaque coin révèle des histoires du passé. Explorez le Palais Royal de La Almudaina, un somptueux palais aux racines mauresques, et plongez dans la culture vibrante des marchés locaux et des places de Palma. Que vous soyez un passionné d'histoire ou simplement curieux de l'héritage de la ville, ce tour offre un mélange unique d'éducation et d'exploration.",
        de: 'Begib dich auf die Historische Palma-Expedition, eine fesselnde Reise durch die jahrhundertealte Geschichte der Stadt. Geführt von sachkundigen Guides führt dich diese Tour zu architektonischen Wundern wie der beeindruckenden Kathedrale von Palma, einem Meisterwerk gotischer Bauweise. Schlendere durch die engen Gassen der Altstadt, wo an jeder Ecke Geschichten aus der Vergangenheit auftauchen. Erkunde den Königspalast von La Almudaina, ein atemberaubender Palast mit maurischen Wurzeln, und tauche ein in die lebendige Kultur der lokalen Märkte und Plätze von Palma. Ob du ein Geschichtsbegeisteter bist oder einfach neugierig auf das Erbe der Stadt, diese Tour bietet eine einzigartige Mischung aus Bildung und Erkundung.',
      },
      images: [
        'https://source.unsplash.com/7706GF6y1OA',
        'https://source.unsplash.com/RoM8ocpgBkI',
        'https://source.unsplash.com/lO7shqH_ILg',
        'https://source.unsplash.com/QLUE43pDbHI',
        'https://source.unsplash.com/IuiQBi0xo50',
        'https://source.unsplash.com/MVn-X6nfltU',
      ],
      rates: [
        {
          name: 'standard',
          calendar: [
            {
              from: new Date(2000, 1, 1),
              to: new Date(2999, 12, 31),
              daily: 99,
            }
          ]
        }
      ]
    },
    {
      id: 'brewery',
      priceFrom: 43,
      name: {
        en: 'Palma Breweries Tour',
        es: 'Tour de Cervecerías en Palma',
        fr: 'Tour des Brasseries à Palma',
        de: 'Palma Brauereien Tour',
      },
      headline: {
        en: 'Embark on a flavorful journey discovering local craft breweries and their finest brews.',
        es: 'Embárcate en un sabroso viaje para descubrir cervecerías artesanales locales y sus mejores cervezas.',
        fr: 'Embarquez pour un voyage savoureux à la découverte des brasseries artisanales locales et de leurs meilleures bières.',
        de: 'Begib dich auf eine geschmackvolle Reise und entdecke lokale Craft-Brauereien und ihre besten Biere.',
      },
      description: {
        en: "Indulge in the Palma Breweries Tour, an exploration of the region's vibrant craft beer scene. Led by beer connoisseurs, this tour takes you to a selection of top-notch breweries where you'll learn about the brewing process, from hops to fermentation. Sample a diverse range of handcrafted beers, each with its own unique flavors and styles, while discovering the passion behind each brewmaster's creations. Immerse yourself in the lively atmosphere of these breweries, meet fellow beer enthusiasts, and savor the taste of Palma's finest brews. Whether you're a seasoned beer lover or new to the craft beer world, this tour offers a delightful and educational experience.",
        es: 'Sumérgete en el Tour de Cervecerías en Palma, una exploración de la vibrante escena de cerveza artesanal de la región. Guiado por conocedores de la cerveza, este tour te lleva a una selección de cervecerías de primera clase donde aprenderás sobre el proceso de elaboración, desde el lúpulo hasta la fermentación. Degusta una diversa gama de cervezas artesanales, cada una con sus propios sabores y estilos únicos, mientras descubres la pasión detrás de las creaciones de cada maestro cervecero. Sumérgete en la animada atmósfera de estas cervecerías, conoce a otros entusiastas de la cerveza y saborea el sabor de las mejores cervezas de Palma. Ya seas un amante experimentado de la cerveza o nuevo en el mundo de la cerveza artesanal, este tour ofrece una experiencia encantadora y educativa.',
        fr: "Laissez-vous tenter par le Tour des Brasseries à Palma, une exploration de la vibrante scène de la bière artisanale de la région. Menée par des connaisseurs de la bière, cette visite vous emmène dans une sélection de brasseries de premier ordre où vous apprendrez le processus de brassage, des houblons à la fermentation. Dégustez une gamme diversifiée de bières artisanales, chacune avec ses propres saveurs et styles uniques, tout en découvrant la passion derrière les créations de chaque maître brasseur. Plongez dans l'ambiance animée de ces brasseries, rencontrez d'autres passionnés de bière et savourez le goût des meilleures bières de Palma. Que vous soyez un amateur de bière chevronné ou nouveau dans le monde de la bière artisanale, cette visite offre une expérience délicieuse et éducative.",
        de: 'Tauche ein in den Palma Brauereien Tour, eine Erkundung der lebendigen Craft-Bier-Szene der Region. Geführt von Bierkennern führt dich diese Tour zu einer Auswahl erstklassiger Brauereien, in denen du den Brauprozess von Hopfen bis zur Fermentation kennenlernen wirst. Kosten eine vielfältige Palette von handgefertigten Bieren, jede mit ihren eigenen einzigartigen Aromen und Stilen, während du die Leidenschaft hinter den Kreationen jedes Braumeisters entdeckst. Tauche ein in die lebhafte Atmosphäre dieser Brauereien, triff gleichgesinnte Bierenthusiasten und genieße den Geschmack der besten Biere von Palma. Egal, ob du ein erfahrener Bierliebhaber oder neu in der Welt des Craft-Biers bist, dieser Tour bietet ein köstliches und lehrreiches Erlebnis.',
      },
      images: [
        'https://source.unsplash.com/IXjuoaUgMZg',
        'https://source.unsplash.com/Cdq3ziSoeGY',
        'https://source.unsplash.com/E9Vk2OiG23U',
        'https://source.unsplash.com/snnhGYNqm44',
        'https://source.unsplash.com/uxDQRHi4vfo',
      ],
      rates: [
        {
          name: 'standard',
          calendar: [
            {
              from: new Date(2000, 1, 1),
              to: new Date(2999, 12, 31),
              daily: 99,
            }
          ]
        }
      ]
    },
    {
      id: "nightRide",
      priceFrom: 43,
      name: {
        en: "Palma Nocturnal Adventure",
        es: "Aventura Nocturna en Palma",
        fr: "Aventure Nocturne à Palma",
        de: "Palma Nacht-Abenteuer"
      },
      headline: {
        en: "Embark on a magical night ride through illuminated streets and iconic landmarks.",
        es: "Embárcate en un mágico paseo nocturno por calles iluminadas y lugares icónicos.",
        fr: "Partez pour une aventure nocturne magique à travers les rues illuminées et les monuments emblématiques.",
        de: "Begib dich auf eine magische Nachtfahrt durch beleuchtete Straßen und ikonische Wahrzeichen."
      },
      description: {
        en: "Experience the enchantment of the Palma Nocturnal Adventure, a ride that showcases the city's beauty under the stars. Led by expert guides, this tour takes you through quiet streets and vibrant squares illuminated by the city's lights. Admire the mesmerizing Palma Cathedral and other landmarks as they glow against the night sky. Feel the cool breeze as you pedal along the waterfront and savor the tranquil ambiance of Palma at night. Whether you're looking for a romantic outing or a unique way to experience the city's charm, this night ride offers an unforgettable journey through Palma's illuminated treasures.",
        es: "Vive el encanto de la Aventura Nocturna en Palma, un paseo que muestra la belleza de la ciudad bajo las estrellas. Guiados por expertos, este tour te lleva por calles tranquilas y plazas vibrantes iluminadas por las luces de la ciudad. Admira la fascinante Catedral de Palma y otros lugares emblemáticos mientras brillan contra el cielo nocturno. Siente la brisa fresca mientras pedaleas junto al paseo marítimo y disfruta de la tranquila atmósfera de Palma por la noche. Ya busques una salida romántica o una forma única de experimentar el encanto de la ciudad, este paseo nocturno ofrece un viaje inolvidable a través de los tesoros iluminados de Palma.",
        fr: "Découvrez l'enchantement de l'Aventure Nocturne à Palma, une balade qui met en valeur la beauté de la ville sous les étoiles. Menée par des guides experts, cette visite vous emmène dans des rues tranquilles et des places animées illuminées par les lumières de la ville. Admirez la cathédrale de Palma et d'autres monuments qui scintillent dans le ciel nocturne. Ressentez la brise fraîche en pédalant le long du front de mer et savourez l'ambiance tranquille de Palma la nuit. Que vous cherchiez une sortie romantique ou un moyen unique de découvrir le charme de la ville, cette balade nocturne offre un voyage inoubliable à travers les trésors illuminés de Palma.",
        de: "Erlebe den Zauber des Palma Nacht-Abenteuers, einer Fahrt, die die Schönheit der Stadt unter den Sternen zeigt. Geführt von erfahrenen Guides führt dich diese Tour durch ruhige Straßen und lebendige Plätze, die von den Lichtern der Stadt erleuchtet werden. Bewundere die faszinierende Palma Kathedrale und andere Wahrzeichen, die am Nachthimmel erstrahlen. Spüre die kühle Brise, während du am Wasser entlang radelst, und genieße die ruhige Atmosphäre von Palma bei Nacht. Egal, ob du einen romantischen Ausflug oder eine einzigartige Möglichkeit suchst, den Charme der Stadt zu erleben, diese Nachtfahrt bietet eine unvergessliche Reise durch die illuminierten Schätze von Palma."
      },
      images: [
        'https://source.unsplash.com/FA8qvYgVQUo',
        'https://source.unsplash.com/yxfW17kZzJ8',
        'https://source.unsplash.com/ASFul4w-o58',
        'https://source.unsplash.com/rb3u5tfL4jQ',
        'https://source.unsplash.com/fKFjB98bXTc',
        'https://source.unsplash.com/56SxNSdtWdw',
      ],
      rates: [
        {
          name: 'standard',
          calendar: [
            {
              from: new Date(2000, 1, 1),
              to: new Date(2999, 12, 31),
              daily: 99,
            }
          ]
        }
      ]
    }
  ],
  facilities: [
    {
      id: 'expertGuides',
      title: {
        en: 'Expert Guides',
        es: 'Guías Expertos',
        fr: 'Guides Experts',
        de: 'Experten-Guides',
      },
      headline: {
        en: 'Explore with knowledgeable guides who enrich your journey with local insights.',
        es: 'Explora con guías conocedores que enriquecen tu viaje con conocimientos locales.',
        fr: 'Explorez avec des guides compétents qui enrichissent votre voyage avec des connaissances locales.',
        de: 'Erkunde mit sachkundigen Guides, die deine Reise mit lokalem Wissen bereichern.',
      },
      image: 'https://source.unsplash.com/Ogv2r_G6i2s',
    },
    {
      id: 'premiumBikes',
      title: {
        en: 'Premium Bikes',
        es: 'Bicicletas de Alta Gama',
        fr: 'Vélos Haut de Gamme',
        de: 'Hochwertige Fahrräder',
      },
      headline: {
        en: 'Ride in comfort and style with our top-notch selection of premium bicycles.',
        es: 'Viaja con comodidad y estilo con nuestra selección de bicicletas de alta gama.',
        fr: 'Pédalez dans le confort et le style avec notre sélection de vélos haut de gamme.',
        de: 'Fahre mit Komfort und Stil auf unserer Auswahl an hochwertigen Fahrrädern.',
      },
      image: 'https://source.unsplash.com/eOlteq98f-w',
    },
    {
      id: 'scenicRoutes',
      title: {
        en: 'Scenic Routes',
        es: 'Rutas Escénicas',
        fr: 'Itinéraires Pittoresques',
        de: 'Malersiche Strecken',
      },
      headline: {
        en: 'Experience the breathtaking beauty of Mallorca through carefully curated scenic routes.',
        es: 'Experimenta la impresionante belleza de Mallorca a través de rutas escénicas cuidadosamente seleccionadas.',
        fr: 'Découvrez la beauté à couper le souffle de Majorque à travers des itinéraires pittoresques soigneusement conçus.',
        de: 'Erlebe die atemberaubende Schönheit von Mallorca auf sorgfältig ausgewählten malerischen Strecken.',
      },
      image: 'https://source.unsplash.com/CJr_tPKpieA',
    },
    {
      id: 'culturalImmersion',
      title: {
        en: 'Cultural Immersion',
        es: 'Inmersión Cultural',
        fr: 'Immersion Culturelle',
        de: 'Kulturelles Eintauchen',
      },
      headline: {
        en: 'Engage in local culture and traditions as you explore charming villages and historical sites.',
        es: 'Sumérgete en la cultura y tradiciones locales mientras exploras encantadores pueblos y sitios históricos.',
        fr: 'Immergez-vous dans la culture et les traditions locales en explorant des villages charmants et des sites historiques.',
        de: 'Tauche ein in die lokale Kultur und Tradition, während du bezaubernde Dörfer und historische Stätten erkundest.',
      },
      image: 'https://source.unsplash.com/dyrehVIidQk',
    },
    {
      id: 'gourmetDelights',
      title: {
        en: 'Gourmet Delights',
        es: 'Delicias Gourmet',
        fr: 'Délices Gourmands',
        de: 'Gourmetgenüsse',
      },
      headline: {
        en: 'Savor the finest local cuisine and delicacies at carefully selected stops.',
        es: 'Saborea la mejor cocina local y delicias en paradas cuidadosamente seleccionadas.',
        fr: 'Dégustez les meilleurs plats locaux et délices dans des arrêts soigneusement sélectionnés.',
        de: 'Genieße die feinste lokale Küche und Delikatessen an sorgfältig ausgewählten Stopps.',
      },
      image: 'https://source.unsplash.com/4-2BfjnDyjY',
    },
    {
      id: 'flexibleSchedules',
      title: {
        en: 'Flexible Schedules',
        es: 'Horarios Flexibles',
        fr: 'Horaires Flexibles',
        de: 'Flexible Zeitpläne',
      },
      headline: {
        en: 'Tailor your cycling adventure with flexible schedules to suit your preferences.',
        es: 'Adapta tu aventura en bicicleta con horarios flexibles según tus preferencias.',
        fr: 'Adaptez votre aventure cycliste avec des horaires flexibles pour répondre à vos préférences.',
        de: 'Passe deine Radtour mit flexiblen Zeitplänen an deine Vorlieben an.',
      },
      image: 'https://source.unsplash.com/FoKO4DpXamQ',
    },
    {
      id: 'supportVehicles',
      title: {
        en: 'Support Vehicles',
        es: 'Vehículos de Apoyo',
        fr: 'Véhicules de Soutien',
        de: 'Unterstützungsfahrzeuge',
      },
      headline: {
        en: 'Enjoy peace of mind with readily available support vehicles for assistance and supplies.',
        es: 'Disfruta de tranquilidad con vehículos de apoyo disponibles para asistencia y suministros.',
        fr: "Profitez de la tranquillité d'esprit avec des véhicules de soutien disponibles pour l'aide et les fournitures.",
        de: 'Genieße die Gewissheit, dass Unterstützungsfahrzeuge für Hilfe und Versorgung bereitstehen.',
      },
      image: 'https://source.unsplash.com/mCYlU39UJSE',
    },
    {
      id: 'coastalExploration',
      title: {
        en: 'Coastal Exploration',
        es: 'Exploración Costera',
        fr: 'Exploration Côtière',
        de: 'Küstenerkundung',
      },
      headline: {
        en: "Discover Mallorca's stunning coastline as you cycle along picturesque seaside routes.",
        es: 'Descubre la impresionante costa de Mallorca mientras recorres rutas pintorescas junto al mar.',
        fr: "Découvrez le littoral magnifique de Majorque en pédalant le long d'itinéraires pittoresques en bord de mer.",
        de: 'Entdecke Mallorcas atemberaubende Küste, während du entlang malerischer Küstenrouten radelst.',
      },
      image: 'https://source.unsplash.com/PO4HEv2HAv4',
    },
    {
      id: 'privateTours',
      title: {
        en: 'Private Tours',
        es: 'Tours Privados',
        fr: 'Visites Privées',
        de: 'Private Touren',
      },
      headline: {
        en: "Indulge in a personalized experience with private tours tailored to your group's preferences.",
        es: 'Disfruta de una experiencia personalizada con tours privados adaptados a las preferencias de tu grupo.',
        fr: "Profitez d'une expérience personnalisée avec des visites privées adaptées aux préférences de votre groupe.",
        de: 'Gönnen Sie sich ein individuelles Erlebnis mit privaten Touren, die auf die Vorlieben Ihrer Gruppe zugeschnitten sind.',
      },
      image: 'https://source.unsplash.com/_fVFmwq5ROs',
    },
  ],
  highlights: {
    image: 'https://source.unsplash.com/cH2wJ2Bp1yM',
    points: [
      {
        id: 'scenicRoutes',
        title: {
          en: 'Unforgettable Scenic Routes',
          es: 'Rutas Escénicas Inolvidables',
          fr: 'Itinéraires Pittoresques Inoubliables',
          de: 'Unvergessliche Malerische Strecken',
        },
        headline: {
          en: 'Experience unforgettable scenic routes through diverse landscapes with expert guidance.',
          es: 'Experimenta rutas escénicas inolvidables a través de diversos paisajes con guías expertos.',
          fr: 'Découvrez des itinéraires pittoresques inoubliables à travers des paysages variés avec des guides experts.',
          de: 'Erlebe unvergessliche malerische Strecken durch vielfältige Landschaften mit Expertenführung.',
        },
      },
      {
        id: 'highQualityEquipment',
        title: {
          en: 'High-Quality Equipment & Personalized Service',
          es: 'Equipamiento de Alta Calidad y Servicio Personalizado',
          fr: 'Équipement Haut de Gamme et Service Personnalisé',
          de: 'Hochwertige Ausrüstung & Persönlicher Service',
        },
        headline: {
          en: 'Enjoy high-quality equipment and personalized service to cater to individual cycling needs.',
          es: 'Disfruta de equipamiento de alta calidad y servicio personalizado para satisfacer las necesidades individuales en el ciclismo.',
          fr: "Profitez d'un équipement haut de gamme et d'un service personnalisé pour répondre aux besoins individuels en cyclisme.",
          de: 'Genieße hochwertige Ausrüstung und persönlichen Service, um individuellen Radfahranforderungen gerecht zu werden.',
        },
      },
      {
        id: 'customizableTours',
        title: {
          en: 'Customizable Tours & Flexible Adventures',
          es: 'Tours Personalizables y Aventuras Flexibles',
          fr: 'Tours Personnalisables et Aventures Flexibles',
          de: 'Anpassbare Touren & Flexible Abenteuer',
        },
        headline: {
          en: 'Embark on customizable tours and experiences for a unique and flexible cycling adventure.',
          es: 'Embárcate en tours y experiencias personalizables para una aventura en bicicleta única y flexible.',
          fr: 'Partez pour des tours et expériences personnalisables pour une aventure à vélo unique et flexible.',
          de: 'Begib dich auf anpassbare Touren und Erlebnisse für ein einzigartiges und flexibles Raderlebnis.',
        },
      },
    ],
  },
  venue: {
    place: {
      name: `Av. Miramar, 3, 07600 S'Arenal, Illes Balears`,
      latitude: 39.5025314,
      longitude: 2.7516259,
    },
    description: {
      en: 'Welcome to Mallorca Cycling Tours, where we transform your cycling dreams into reality. Immerse yourself in the breathtaking landscapes of Mallorca as we curate unforgettable bike tours designed to cater to all levels of cyclists. Join us for a journey of exploration, culture, and adventure.',
      es: 'Bienvenido a Mallorca Cycling Tours, donde convertimos tus sueños ciclistas en realidad. Sumérgete en los impresionantes paisajes de Mallorca mientras creamos inolvidables tours en bicicleta diseñados para todos los niveles de ciclistas. Únete a nosotros en un viaje de exploración, cultura y aventura.',
      fr: "Bienvenue chez Mallorca Cycling Tours, où nous transformons vos rêves de cyclisme en réalité. Plongez dans les paysages à couper le souffle de Majorque alors que nous organisons des circuits à vélo inoubliables conçus pour tous les niveaux de cyclistes. Rejoignez-nous pour un voyage d'exploration, de culture et d'aventure.",
      de: 'Willkommen bei Mallorca Cycling Tours, wo wir Ihre Radsportträume in die Realität umsetzen. Tauchen Sie ein in die atemberaubende Landschaft von Mallorca, während wir unvergessliche Radtouren gestalten, die für alle Levels von Radfahrern geeignet sind. Begleiten Sie uns auf einer Reise voller Erkundungen, Kultur und Abenteuer.',
    },
    goodToKnow: {
      en: `Tour Information:
      Please arrive at the meeting point 15 minutes before the scheduled start time. This ensures a smooth departure for our tours that begin promptly as scheduled. In the event of any unexpected schedule changes, such as adverse weather conditions or other factors, we will notify you at least 2 hours before the tour. Your safety and comfort are our priority.
    
      Equipment Check:
      Before embarking on your exciting cycling adventure, it's essential to ensure that your bike and equipment are in excellent condition. Our dedicated team is available to assist you with any adjustments or replacements you might need. A quick and thorough equipment check will ensure a seamless and enjoyable ride.
    
      Enjoy Your Ride:
      Get ready to immerse yourself in the stunning landscapes of Mallorca. With our expert guides leading the way, you'll experience unforgettable scenic routes and cultural insights. Relax, pedal, and savor every moment of your unique cycling journey.
    
      Have a Great Tour!
      The Mallorca Cycling Tours Team`,

      es: `Información del Tour:
      Por favor, llega al punto de encuentro 15 minutos antes de la hora de inicio programada. Esto asegura una partida sin contratiempos para nuestros tours que comienzan puntualmente según lo programado. En caso de cambios inesperados en el horario, como condiciones climáticas adversas u otros factores, te notificaremos al menos 2 horas antes del tour. Tu seguridad y comodidad son nuestra prioridad.
    
      Revisión del Equipamiento:
      Antes de embarcarte en tu emocionante aventura en bicicleta, es esencial asegurarte de que tu bicicleta y equipo estén en excelente estado. Nuestro dedicado equipo está disponible para ayudarte con cualquier ajuste o reemplazo que puedas necesitar. Una rápida y completa revisión del equipo garantizará un paseo sin problemas y placentero.
    
      Disfruta tu Paseo:
      Prepárate para sumergirte en los impresionantes paisajes de Mallorca. Con nuestros guías expertos liderando el camino, experimentarás rutas escénicas inolvidables y conocimientos culturales. Relájate, pedalea y disfruta cada momento de tu única experiencia en bicicleta.
    
      ¡Que tengas un excelente tour!
      El equipo de Mallorca Cycling Tours`,

      fr: `Informations sur le Circuit :
      Veuillez arriver au point de rendez-vous 15 minutes avant l'heure de départ prévue. Cela garantit un départ en toute fluidité pour nos circuits qui commencent à l'heure. En cas de changements inattendus dans l'horaire, tels que des conditions météorologiques défavorables ou d'autres facteurs, nous vous en informerons au moins 2 heures avant le circuit. Votre sécurité et votre confort sont notre priorité.
    
      Vérification de l'Équipement :
      Avant de vous lancer dans votre passionnante aventure à vélo, il est essentiel de vous assurer que votre vélo et votre équipement sont en excellent état. Notre équipe dévouée est disponible pour vous aider avec tout ajustement ou remplacement dont vous pourriez avoir besoin. Une vérification rapide et complète de l'équipement garantira une expérience de vélo fluide et agréable.
    
      Profitez de Votre Balade :
      Préparez-vous à vous plonger dans les paysages magnifiques de Majorque. Avec nos guides experts à la tête du groupe, vous vivrez des itinéraires pittoresques inoubliables et découvrirez des aspects culturels. Détendez-vous, pédalez et savourez chaque moment de votre expérience de vélo unique.
    
      Bon Circuit à Tous !
      L'équipe de Mallorca Cycling Tours`,

      de: `Tourinformation:
      Bitte erscheinen Sie 15 Minuten vor der geplanten Startzeit am Treffpunkt. Dies gewährleistet einen reibungslosen Start für unsere Touren, die pünktlich beginnen. Im Falle unerwarteter Zeitplanänderungen, wie ungünstige Wetterbedingungen oder andere Faktoren, werden wir Sie mindestens 2 Stunden vor der Tour benachrichtigen. Ihre Sicherheit und Ihr Komfort haben für uns oberste Priorität.
    
      Ausrüstungsprüfung:
      Bevor Sie sich auf Ihr aufregendes Raderlebnis begeben, ist es wichtig sicherzustellen, dass Ihr Fahrrad und Ihre Ausrüstung sich in ausgezeichnetem Zustand befinden. Unser engagiertes Team steht Ihnen zur Verfügung, um Sie bei etwaigen Anpassungen oder Ersatzteilen zu unterstützen. Eine schnelle und gründliche Ausrüstungsprüfung gewährleistet eine reibungslose und angenehme Fahrt.
    
      Genießen Sie Ihre Fahrt:
      Machen Sie sich bereit, in die atemberaubenden Landschaften von Mallorca einzutauchen. Mit unseren Expertenführern an der Spitze werden Sie unvergessliche malerische Strecken und kulturelle Einblicke erleben. Entspannen Sie sich, treten Sie in die Pedale und genießen Sie jeden Moment Ihrer einzigartigen Radtour.
    
      Gute Fahrt!
      Das Team von Mallorca Cycling Tours`,
    },
  },
  gallery: {
    images: [
      'https://source.unsplash.com/ZawEpGkz9Zc',
      'https://source.unsplash.com/Dnel83cn4dk',
      'https://source.unsplash.com/Gi0OMNguFaw',
      'https://source.unsplash.com/0I6leHxwrio',
      'https://source.unsplash.com/1OP1kTrnQUI',
      'https://source.unsplash.com/jJT1cnE4SZ8',
      'https://source.unsplash.com/SaW5DBItJHI',
      'https://source.unsplash.com/fpiiJxQ1YVc',
      'https://source.unsplash.com/aue3vSw8DQQ',
      'https://source.unsplash.com/Apq3f8fQg0w',
    ],
  },
  bookingQuestions: [
    {
      text: {
        en: "What is your height (cm)?",
        es: "¿Cuál es tu altura (cm)?",
        de: "Wie groß bist du (cm)?",
        fr: "Quelle est votre taille (cm)?",
      },
      type: Booking_Question_Type_Enum.Numeric,
      scope: Booking_Question_Scope_Enum.PerPax,
      value: {
        min: 100,
        max: 230,
        step: 5
      }
    },
    {
      text: {
        en: "What is your level of biking experience?",
        es: "¿Cuál es tu nivel de experiencia en ciclismo?",
        de: "Wie ist dein Fahrraderfahrungsniveau?",
        fr: "Quel est votre niveau d'expérience en vélo?",
      },
      type: Booking_Question_Type_Enum.Select,
      scope: Booking_Question_Scope_Enum.PerPax,
      value: {
        options: [
          { en: "Beginner", es: "Principiante", de: "Anfänger", fr: "Débutant" },
          { en: "Intermediate", es: "Intermedio", de: "Fortgeschritten", fr: "Intermédiaire" },
          { en: "Advanced", es: "Avanzado", de: "Experte", fr: "Avancé" },
        ]
      }
    },
    {
      text: {
        en: "Can you provide an emergency contact person and their phone number?",
        es: "¿Puedes proporcionar una persona de contacto de emergencia y su número de teléfono?",
        de: "Kannst du eine Notfallkontaktperson und deren Telefonnummer angeben?",
        fr: "Pouvez-vous fournir une personne de contact en cas d'urgence et son numéro de téléphone?",
      },
      type: Booking_Question_Type_Enum.FreeText,
      scope: Booking_Question_Scope_Enum.PerPax,
      value: {}
    },
    {
      text: {
        en: "Any additional comments, questions, or special requests?",
        es: "¿Algún comentario adicional, pregunta o solicitud especial?",
        de: "Irgendwelche zusätzlichen Kommentare, Fragen oder besonderen Anfragen?",
        fr: "Des commentaires supplémentaires, des questions ou des demandes spéciales?"
      },
      type: Booking_Question_Type_Enum.FreeText,
      scope: Booking_Question_Scope_Enum.PerBooking,
      value: {}
    }
  ]
}
