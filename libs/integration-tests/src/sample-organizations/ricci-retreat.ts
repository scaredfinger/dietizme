import { env } from 'process'

import { OrganizationProto } from '../common-operations'
import { Booking_Question_Scope_Enum, Booking_Question_Type_Enum } from '@otiuming/domain-omnidata-types'

export const ricciRetreat: OrganizationProto = {
  settings: {
    name: 'Ricci Retreat',
    headline: {
      en: "Discover Apeninos Retreat: Your Mountain Oasis in Italy",
      es: "Descubre Apeninos Retreat: Tu Oasis de Montaña en Italia",
      fr: "Découvrez Apeninos Retreat : Votre Oasis de Montagne en Italie",
      de: "Entdecken Sie Apeninos Retreat: Ihr Bergparadies in Italien",
    },
    phone: '+34 777 888 999',
    socials: {
      facebook: 'https://www.facebook.com/ricci-retreat',
      instagram: 'https://www.instagram.com/ricci-retreat',
      twitter: 'https://www.twitter.com/ricci-retreat',
      youtube: 'https://www.youtube.com/ricci-retreat',
    },
  },
  admin: {
    email: 'ricci-retreat@grr.la',
    password: env.SAMPLE_DATA_PASSWORD,
  },
  theme: {
    metaTitle: {
      en: "Apeninos Retreat: Your Serene Mountain Getaway in Italy",
      es: "Apeninos Retreat: Tu Tranquilo Refugio de Montaña en Italia",
      fr: "Apeninos Retreat : Votre Escapade Sereine en Montagne en Italie",
      de: "Apeninos Retreat: Dein Erholungsort in den Bergen Italiens",
    },
    metaDescription: {
      en: "Experience the ultimate mountain retreat at Apeninos Retreat in Italy's Apeninos Mountains. Discover serenity, luxury, and natural beauty in our cozy rooms, perfect for all seasons.",
      es: "Vive la última escapada de montaña en Apeninos Retreat, en las montañas de los Apeninos de Italia. Descubre la serenidad, el lujo y la belleza natural en nuestras acogedoras habitaciones, perfectas para todas las estaciones.",
      fr: "Découvrez l'escapade en montagne ultime à Apeninos Retreat, dans les montagnes des Apennins italiens. Découvrez la sérénité, le luxe et la beauté naturelle dans nos chambres confortables, parfaites pour toutes les saisons.",
      de: "Erleben Sie den ultimativen Bergurlaub im Apeninos Retreat in den Apeninos Bergen Italiens. Entdecken Sie die Ruhe, den Luxus und die natürliche Schönheit in unseren gemütlichen Zimmern, perfekt für alle Jahreszeiten.",
    },
    favicon: 'https://img.logoipsum.com/248.png',
    logo: 'https://img.logoipsum.com/248.png',
    logoLight: 'https://img.logoipsum.com/248.png',
  },
  pages: {
    home: {
      title: {
        en: "Apeninos Retreat",
        es: "Apeninos Retreat",
        fr: "Apeninos Retreat",
        de: "Apeninos Retreat",
      },
      subtitle: {
        en: "Your Gateway to Mountain Serenity in Italy",
        es: "Tu Puerta de Acceso a la Serenidad de la Montaña en Italia",
        fr: "Votre Porte d'Accès à la Sérénité en Montagne en Italie",
        de: "Dein Tor zur Bergserenität in Italien",
      },
      heroImage: 'https://source.unsplash.com/9UeHd6kH9hk',
    },
  },
  products: [
    {
      id: "budget-bliss",
      priceFrom: 99,
      name: {
        en: "Budget Bliss",
        es: "Presupuesto Feliz",
        fr: "Bonheur à Petit Prix",
        de: "Budgetfreude",
      },
      headline: {
        en: "Cozy and Economical",
        es: "Acogedor y Económico",
        fr: "Confortable et Économique",
        de: "Gemütlich und Preiswert",
      },
      description: {
        en: "Our Budget Bliss rooms provide an excellent value for those who appreciate a cozy and economical mountain retreat. These rooms may be budget-friendly, but they don't skimp on comfort or charm. Decorated in a rustic yet modern style, they offer a welcoming ambiance, perfect for travelers looking to immerse themselves in the beauty of the Apeninos without straining their wallets.",
        es: "Nuestras habitaciones Presupuesto Feliz ofrecen un valor excelente para aquellos que aprecian un refugio de montaña acogedor y económico. Estas habitaciones pueden ser asequibles, pero no escatiman en comodidad o encanto. Decoradas en un estilo rústico pero moderno, ofrecen un ambiente acogedor, perfecto para viajeros que desean sumergirse en la belleza de los Apeninos sin forzar su presupuesto.",
        fr: "Nos chambres Bonheur à Petit Prix offrent une excellente valeur pour ceux qui apprécient une retraite en montagne confortable et économique. Ces chambres sont peut-être économiques, mais elles ne lésinent pas sur le confort ni le charme. Décorées dans un style rustique mais moderne, elles offrent une ambiance accueillante, parfaite pour les voyageurs souhaitant se plonger dans la beauté des Apennins sans vider leur porte-monnaie.",
        de: "Unsere Budgetfreude-Zimmer bieten ein ausgezeichnetes Preis-Leistungs-Verhältnis für all jene, die einen gemütlichen und preiswerten Bergurlaub schätzen. Diese Zimmer sind zwar preisgünstig, sparen jedoch nicht an Komfort oder Charme. Sie sind in einem rustikalen, aber modernen Stil eingerichtet und bieten eine einladende Atmosphäre, perfekt für Reisende, die sich in die Schönheit der Apenninen vertiefen möchten, ohne ihr Budget zu überlasten.",
      },
      images: [
        'https://source.unsplash.com/RjIiyuR8MI0',
        'https://source.unsplash.com/m8IhUrDsd4Q',
        'https://source.unsplash.com/iANAdaNu7mg',
        'https://source.unsplash.com/ZUS1xCxoQCA',
        'https://source.unsplash.com/etkmWcqtZzg',
        'https://source.unsplash.com/NytRORotdfk',
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
      id: "cozy-comfort",
      priceFrom: 149,
      name: {
        en: "Cozy Comfort",
        es: "Comodidad Acogedora",
        fr: "Confort Douillet",
        de: "Gemütliche Behaglichkeit",
      },
      headline: {
        en: "Warm and Inviting",
        es: "Cálido y Acogedor",
        fr: "Chaleureux et Invitant",
        de: "Warm und Einladend",
      },
      description: {
        en: "If you seek a snug and inviting mountain escape, our Cozy Comfort rooms are an excellent choice. These rooms are thoughtfully decorated to create an inviting atmosphere, with natural materials and soothing colors that reflect the surrounding environment. Step out onto your private balcony to take in panoramic views of the mountains or cozy up by the fireplace on chilly evenings. These rooms are spacious enough for couples or solo travelers, offering a comfortable retreat where you can unwind after a day of exploring the hiking trails or enjoying winter sports.",
        es: "Si busca un refugio de montaña acogedor y atractivo, nuestras habitaciones Comodidad Acogedora son una excelente elección. Estas habitaciones están decoradas cuidadosamente para crear un ambiente acogedor, con materiales naturales y colores relajantes que reflejan el entorno circundante. Salga a su balcón privado para disfrutar de vistas panorámicas de las montañas o acurrúquese junto a la chimenea en las noches frías. Estas habitaciones son lo suficientemente espaciosas para parejas o viajeros solitarios, ofreciendo un refugio cómodo donde puede relajarse después de un día explorando los senderos para caminatas o disfrutando de deportes de invierno.",
        fr: "Si vous recherchez une évasion en montagne chaleureuse et accueillante, nos chambres Confort Douillet sont un excellent choix. Ces chambres sont soigneusement décorées pour créer une atmosphère accueillante, avec des matériaux naturels et des couleurs apaisantes qui reflètent l'environnement environnant. Sortez sur votre balcon privé pour admirer les vues panoramiques sur les montagnes ou réchauffez-vous près de la cheminée lors des soirées fraîches. Ces chambres sont suffisamment spacieuses pour les couples ou les voyageurs solitaires, offrant une retraite confortable où vous pouvez vous détendre après une journée à explorer les sentiers de randonnée ou à pratiquer des sports d'hiver.",
        de: "Wenn Sie eine gemütliche und einladende Bergflucht suchen, sind unsere Zimmer Gemütliche Behaglichkeit eine ausgezeichnete Wahl. Diese Zimmer sind sorgfältig gestaltet, um eine einladende Atmosphäre zu schaffen, mit natürlichen Materialien und beruhigenden Farben, die die umgebende Umgebung widerspiegeln. Treten Sie auf Ihren eigenen Balkon, um einen Panoramablick auf die Berge zu genießen, oder kuscheln Sie sich an kühlen Abenden am Kamin ein. Diese Zimmer sind geräumig genug für Paare oder Alleinreisende und bieten einen komfortablen Rückzugsort, an dem Sie sich nach einem Tag voller Erkundungstouren auf den Wanderwegen oder beim Wintersport entspannen können.",
      },
      images: [
        'https://source.unsplash.com/c4Ccpa8sMlI',
        'https://source.unsplash.com/m8IhUrDsd4Q',
        'https://source.unsplash.com/iANAdaNu7mg',
        'https://source.unsplash.com/ZUS1xCxoQCA',
        'https://source.unsplash.com/etkmWcqtZzg',
        'https://source.unsplash.com/NytRORotdfk',
      ],
      rates: [
        {
          name: 'standard',
          calendar: [
            {
              from: new Date(2000, 1, 1),
              to: new Date(2999, 12, 31),
              daily: 149,
            }
          ]
        }
      ]
    },
    {
      id: "mountain-view-haven",
      priceFrom: 199,
      name: {
        en: "Mountain View Haven",
        es: "Refugio con Vistas a la Montaña",
        fr: "Havre avec Vue sur la Montagne",
        de: "Bergblickoase",
      },
      headline: {
        en: "Breathtaking Scenery Awaits",
        es: "Esperando un Paisaje Impresionante",
        fr: "Des Paysages À Couper Le Souffle Vous Attendent",
        de: "Atemberaubende Landschaft erwartet Sie",
      },
      description: {
        en: "Wake up to breathtaking mountain vistas in our Mountain View Haven rooms, designed to immerse you in the natural beauty of the Apeninos while providing all the comforts you desire. These rooms offer a serene escape, where you can unwind and connect with nature while enjoying the stunning views from your private balcony.",
        es: "Despierte con vistas impresionantes de las montañas en nuestras habitaciones Refugio con Vistas a la Montaña, diseñadas para sumergirse en la belleza natural de los Apeninos y ofrecer todas las comodidades que desea. Estas habitaciones ofrecen una escapada serena, donde puede relajarse y conectarse con la naturaleza mientras disfruta de las impresionantes vistas desde su balcón privado.",
        fr: "Réveillez-vous avec une vue imprenable sur les montagnes dans nos chambres Havre avec Vue sur la Montagne, conçues pour vous immerger dans la beauté naturelle des Apennins tout en offrant tout le confort que vous désirez. Ces chambres offrent une évasion sereine, où vous pouvez vous détendre et vous connecter avec la nature tout en profitant des vues magnifiques depuis votre balcon privé.",
        de: "Wachen Sie mit atemberaubenden Bergausblicken in unseren Bergblickoase-Zimmern auf, die entwickelt wurden, um Sie in die natürliche Schönheit der Apenninen einzutauchen und gleichzeitig allen Komfort zu bieten, den Sie sich wünschen. Diese Zimmer bieten einen friedlichen Rückzugsort, an dem Sie sich entspannen und die Verbindung zur Natur genießen können, während Sie die beeindruckende Aussicht von Ihrem eigenen Balkon aus bewundern.",
      },
      images: [
        'https://source.unsplash.com/G9Hzg0IfBvg',
        'https://source.unsplash.com/sq0sr_bTFZA',
        'https://source.unsplash.com/R6267JL9XJ8',
        'https://source.unsplash.com/CSlha-gSA9g',
        'https://source.unsplash.com/zLIrNgNzPYs',
        'https://source.unsplash.com/fdlZBWIP0aM',
      ],
      rates: [
        {
          name: 'standard',
          calendar: [
            {
              from: new Date(2000, 1, 1),
              to: new Date(2999, 12, 31),
              daily: 199,
            }
          ]
        }
      ]
    },
    {
      id: "deluxe-serenity",
      priceFrom: 249,
      name: {
        en: "Deluxe Serenity",
        es: "Serenidad de Lujo",
        fr: "Sérénité de Luxe",
        de: "Deluxe-Erholung",
      },
      headline: {
        en: "Luxury in Nature's Embrace",
        es: "El Lujo Abrazado por la Naturaleza",
        fr: "Le Luxe au Cœur de la Nature",
        de: "Luxus inmitten der Natur",
      },
      description: {
        en: "Experience the lap of luxury in our Deluxe Serenity rooms, where opulent furnishings, a private balcony, and spa-like bathrooms promise a tranquil and indulgent escape amidst the mountains. These rooms are designed for those who seek the highest level of comfort and sophistication during their stay.",
        es: "Experimente el lujo en nuestras habitaciones Serenidad de Lujo, donde los muebles opulentos, un balcón privado y baños de estilo spa prometen una escapada tranquila e indulgente en medio de las montañas. Estas habitaciones están diseñadas para aquellos que buscan el más alto nivel de comodidad y sofisticación durante su estancia.",
        fr: "Découvrez le summum du luxe dans nos chambres Sérénité de Luxe, où un mobilier somptueux, un balcon privé et des salles de bains dignes d'un spa promettent une évasion tranquille et indulgente au milieu des montagnes. Ces chambres sont conçues pour ceux qui recherchent le plus haut niveau de confort et de sophistication pendant leur séjour.",
        de: "Gönnen Sie sich den Höhepunkt des Luxus in unseren Deluxe-Erholungszimmern, wo üppige Möbel, ein privater Balkon und Badezimmer wie in einem Spa eine ruhige und verwöhnende Flucht inmitten der Berge versprechen. Diese Zimmer sind für diejenigen konzipiert, die während ihres Aufenthalts den höchsten Grad an Komfort und Raffinesse suchen.",
      },
      images: [
        'https://source.unsplash.com/rt4vVJHmmu4',
        'https://source.unsplash.com/a-bed-room-with-two-beds-and-a-table-60S1280_2i8',
        'https://source.unsplash.com/Q2QhOxN5enk',
        'https://source.unsplash.com/SoNaNOFT974',
        'https://source.unsplash.com/qdyBKWSzpSI',
        'https://source.unsplash.com/fdlZBWIP0aM',
      ],
      rates: [
        {
          name: 'standard',
          calendar: [
            {
              from: new Date(2000, 1, 1),
              to: new Date(2999, 12, 31),
              daily: 249,
            }
          ]
        }
      ]
    },
    {
      id: "executive-elegance",
      priceFrom: 299,
      name: {
        en: "Executive Elegance",
        es: "Elegancia Ejecutiva",
        fr: "Élégance Exécutive",
        de: "Exklusiver Luxus",
      },
      headline: {
        en: "Sophistication in Nature's Embrace",
        es: "Sofisticación en el Abrazo de la Naturaleza",
        fr: "Sophistication au Cœur de la Nature",
        de: "Eleganz inmitten der Natur",
      },
      description: {
        en: "For a touch of sophistication, our Executive Elegance rooms offer spaciousness and style, making them ideal for business travelers or families seeking a higher level of comfort and convenience. These rooms provide an elegant mountain retreat, complete with modern amenities and a serene atmosphere.",
        es: "Para un toque de sofisticación, nuestras habitaciones Elegancia Ejecutiva ofrecen amplitud y estilo, lo que las hace ideales para viajeros de negocios o familias que buscan un mayor nivel de comodidad y conveniencia. Estas habitaciones brindan un elegante refugio en la montaña, completo con comodidades modernas y una atmósfera serena.",
        fr: "Pour une touche de sophistication, nos chambres Élégance Exécutive offrent espace et style, ce qui les rend idéales pour les voyageurs d'affaires ou les familles recherchant un plus grand confort et une plus grande commodité. Ces chambres offrent une élégante retraite en montagne, avec des équipements modernes et une atmosphère sereine.",
        de: "Für einen Hauch von Raffinesse bieten unsere Executive-Luxuszimmer Geräumigkeit und Stil und sind somit ideal für Geschäftsreisende oder Familien, die einen höheren Komfort- und Bequemlichkeitsgrad suchen. Diese Zimmer bieten einen eleganten Bergurlaub mit modernen Annehmlichkeiten und einer ruhigen Atmosphäre.",
      },
      images: [
        'https://source.unsplash.com/rt4vVJHmmu4',
        'https://source.unsplash.com/8yDJZ92_H9Y',
        'https://source.unsplash.com/a-bedroom-with-a-bed-and-a-tv-in-it-KF9IS77n1TQ',
        'https://source.unsplash.com/a-bedroom-with-a-bed-and-a-tv-in-it-KF9IS77n1TQ',
        'https://source.unsplash.com/SoNaNOFT974',
        'https://source.unsplash.com/qdyBKWSzpSI',
        'https://source.unsplash.com/fdlZBWIP0aM',
      ],
      rates: [
        {
          name: 'standard',
          calendar: [
            {
              from: new Date(2000, 1, 1),
              to: new Date(2999, 12, 31),
              daily: 299,
            }
          ]
        }
      ]
    },
    {
      id: "super-splendor-suite",
      priceFrom: 399,
      name: {
        en: "Super Duper Splendor Suite",
        es: "Suite Esplendor Super Extra",
        fr: "Suite Super Luxe Éclatant",
        de: "Super Duper Pracht-Suite",
      },
      headline: {
        en: "The Ultimate Luxury",
        es: "El Máximo Lujo",
        fr: "Le Luxe Ultime",
        de: "Der ultimative Luxus",
      },
      description: {
        en: "Indulge in the pinnacle of extravagance in our Super Duper Splendor Suites, where every detail exudes opulence and where you can savor the ultimate mountain retreat experience in Italy's Apeninos. These suites are designed to provide the utmost in comfort, elegance, and breathtaking views, making them perfect for a truly special getaway.",
        es: "Déjese llevar al pináculo de la extravagancia en nuestras Suites Esplendor Super Extra, donde cada detalle irradia opulencia y donde puede saborear la experiencia definitiva de retiro en la montaña en los Apeninos de Italia. Estas suites están diseñadas para brindar el máximo confort, elegancia y vistas impresionantes, lo que las convierte en la elección perfecta para una escapada realmente especial.",
        fr: "Indulgez-vous dans le summum de l'extravagance dans nos Suites Super Luxe Éclatant, où chaque détail respire l'opulence et où vous pouvez savourer l'expérience ultime de retraite en montagne dans les Apennins d'Italie. Ces suites sont conçues pour offrir le summum du confort, de l'élégance et des vues à couper le souffle, en faisant le choix idéal pour une escapade vraiment spéciale.",
        de: "Gönnen Sie sich den Höhepunkt des Luxus in unseren Super Duper Pracht-Suiten, wo jedes Detail Opulenz ausstrahlt und wo Sie das ultimative Bergurlaubserlebnis in den Apenninen Italiens genießen können. Diese Suiten sind darauf ausgerichtet, höchsten Komfort, Eleganz und atemberaubende Ausblicke zu bieten und eignen sich perfekt für einen wirklich besonderen Aufenthalt.",
      },
      images: [
        'https://source.unsplash.com/dmBzB_RF_nk',
        'https://source.unsplash.com/R4Kz9SNajR8',
        'https://source.unsplash.com/DI8Bf6K1134',
        'https://source.unsplash.com/YCW4BEhKluw',
        'https://source.unsplash.com/SoNaNOFT974',
        'https://source.unsplash.com/qdyBKWSzpSI',
        'https://source.unsplash.com/fdlZBWIP0aM',
      ],
      rates: [
        {
          name: 'standard',
          calendar: [
            {
              from: new Date(2000, 1, 1),
              to: new Date(2999, 12, 31),
              daily: 399,
            }
          ]
        }
      ]
    },
  ],
  facilities: [
    {
      id: 'jacuzzi',
      title: {
        en: "Jacuzzi",
        es: "Jacuzzi",
        fr: "Jacuzzi",
        de: "Whirlpool",
      },
      headline: {
        en: "Indulge in Ultimate Relaxation in Our Luxurious Jacuzzi",
        es: "Sumérgete en la Relajación Definitiva en Nuestro Lujoso Jacuzzi",
        fr: "Détendez-vous dans une Relaxation Ultime dans Notre Jacuzzi Luxueux",
        de: "Genießen Sie die ultimative Entspannung in unserem luxuriösen Whirlpool",
      },
      image: 'https://source.unsplash.com/a-hot-tub-sitting-on-top-of-a-wooden-deck-imsUNnea6HQ'
    }, {
      id: 'adventure-hub',
      title: {
        en: "Adventure Hub",
        es: "Centro de Aventuras",
        fr: "Centre d'Aventure",
        de: "Abenteuerzentrum",
      },
      headline: {
        en: "Embrace Adventure at Our Thrilling Adventure Hub",
        es: "Abraza la Aventura en Nuestro Emocionante Centro de Aventuras",
        fr: "Embrassez l'Aventure dans Notre Centre d'Aventure Palpitant",
        de: "Erleben Sie Abenteuer in unserem Aufregenden Abenteuerzentrum",
      },
      image: 'https://source.unsplash.com/LZEVpsbSI9k'
    },
    {
      id: 'restaurant',
      title: {
        en: "Restaurant",
        es: "Restaurante",
        fr: "Restaurant",
        de: "Restaurant",
      },
      headline: {
        en: "Savor Culinary Excellence in Our Restaurant",
        es: "Disfruta de la Excelencia Culinaria en Nuestro Restaurante",
        fr: "Dégustez l'Excellence Culinaire dans Notre Restaurant",
        de: "Genießen Sie Kulinarische Exzellenz in unserem Restaurant",
      },
      image: 'https://source.unsplash.com/-2UKHw7fAZI'
    },
    {
      id: 'photography-workshops',
      title: {
        en: "Photography Workshops",
        es: "Talleres de Fotografía",
        fr: "Ateliers de Photographie",
        de: "Fotografie-Workshops",
      },
      headline: {
        en: "Capture Moments with Photography Workshops",
        es: "Captura Momentos con Nuestros Talleres de Fotografía",
        fr: "Capturez des Moments avec Nos Ateliers de Photographie",
        de: "Momente Einfangen mit Fotografie-Workshops",
      },
      image: 'https://source.unsplash.com/ofX4sjVp3yY'
    },
    {
      id: 'indoor-activities',
      title: {
        en: "Indoor Activities",
        es: "Actividades en Interiores",
        fr: "Activités Intérieures",
        de: "Innenaktivitäten",
      },
      headline: {
        en: "Year-Round Entertainment: Enjoy a Variety of Indoor Activities",
        es: "Entretenimiento Todo el Año: Disfruta de una Variedad de Actividades en Interiores",
        fr: "Divertissement Toute l'Année : Profitez d'une Variété d'Activités en Intérieur",
        de: "Ganzjähriges Unterhaltungsprogramm: Genießen Sie eine Vielzahl von Indoor-Aktivitäten",
      },
      image: 'https://source.unsplash.com/RhYiBB-_FR8'
    },
    {
      id: 'outdoor-activities',
      title: {
        en: "Outdoor Activities",
        es: "Actividades al Aire Libre",
        fr: "Activités en Plein Air",
        de: "Outdoor-Aktivitäten",
      },
      headline: {
        en: "Adventure Awaits: Explore the Great Outdoors with Our Outdoor Activities",
        es: "La Aventura te Espera: Explora la Naturaleza con Nuestras Actividades al Aire Libre",
        fr: "L'Aventure Vous Attend : Explorez la Nature avec Nos Activités en Plein Air",
        de: "Abenteuer Warten: Erkunden Sie die Natur mit Unseren Outdoor-Aktivitäten",
      },
      image: 'https://source.unsplash.com/U19Q5vQ1NG8'
    },
    {
      id: 'scenic-trails',
      title: {
        en: "Scenic Trails",
        es: "Senderos Escénicos",
        fr: "Sentiers Pittoresques",
        de: "Malersiche Pfade",
      },
      headline: {
        en: "Get Lost in Nature's Beauty: Explore Scenic Trails for All Skill Levels",
        es: "Sumérgete en la Belleza de la Naturaleza: Explora Senderos Escénicos para Todos los Niveles",
        fr: "Perdez-vous dans la Beauté de la Nature : Explorez des Sentiers Pittoresques pour Tous les Niveaux",
        de: "Verlieren Sie sich in der Schönheit der Natur: Erkunden Sie Malerische Pfade für Alle Schwierigkeitsgrade",
      },
      image: 'https://source.unsplash.com/OASgtG0soBI'
    },
    {
      id: 'fitness-center',
      title: {
        en: "Fitness Center",
        es: "Centro de Fitness",
        fr: "Centre de Fitness",
        de: "Fitness-Center",
      },
      headline: {
        en: "Stay Active and Energized: Visit Our Fully Equipped Fitness Center",
        es: "Mantente Activo y Energizado: Visita Nuestro Centro de Fitness Totalmente Equipado",
        fr: "Restez Actif et Énergisé : Visitez Notre Centre de Fitness Entièrement Équipé",
        de: "Bleiben Sie Aktiv und Energiegeladen: Besuchen Sie Unser Voll Ausgestattetes Fitness-Center",
      },
      image: 'https://source.unsplash.com/gzeTjGu3b_k'
    },
    {
      id: 'conference-facilities',
      title: {
        en: "Conference Facilities",
        es: "Instalaciones para Conferencias",
        fr: "Installations de Conférence",
        de: "Konferenzeinrichtungen",
      },
      headline: {
        en: "Conduct Business with Scenic Views: Utilize Our Modern Conference Facilities",
        es: "Realiza Negocios con Vistas Escénicas: Utiliza Nuestras Modernas Instalaciones para Conferencias",
        fr: "Menez des Affaires avec des Vues Pittoresques : Utilisez Nos Installations de Conférence Modernes",
        de: "Führen Sie Geschäfte mit Panoramablick: Nutzen Sie Unsere Modernen Konferenzeinrichtungen",
      },
      image: 'https://source.unsplash.com/xGw6aeq8KxM'
    },
    {
      id: 'spa-and-wellness',
      title: {
        en: "Spa and Wellness",
        es: "Spa y Bienestar",
        fr: "Spa et Bien-être",
        de: "Spa und Wellness",
      },
      headline: {
        en: "Revitalize Mind and Body: Experience Bliss in Our Spa and Wellness Center",
        es: "Revitaliza Mente y Cuerpo: Experimenta la Felicidad en Nuestro Spa y Centro de Bienestar",
        fr: "Revitalisez l'Esprit et le Corps : Découvrez le Bonheur dans Notre Spa et Centre de Bien-être",
        de: "Beleben Sie Geist und Körper: Erleben Sie das Glück in Unserem Spa und Wellnesscenter",
      },
      image: 'https://source.unsplash.com/CsqHFS6ZXfM'
    },
    {
      id: 'mountain-view-terrace',
      title: {
        en: "Mountain View Terrace",
        es: "Terraza con Vistas a la Montaña",
        fr: "Terrasse avec Vue sur la Montagne",
        de: "Bergblick-Terrasse",
      },
      headline: {
        en: "Savor Breathtaking Views: Relax on Our Mountain View Terrace",
        es: "Disfruta de Vistas Impresionantes: Relájate en Nuestra Terraza con Vistas a la Montaña",
        fr: "Dégustez des Vues À Couper Le Souffle : Détendez-vous sur Notre Terrasse avec Vue sur la Montagne",
        de: "Genießen Sie Atemberaubende Aussichten: Entspannen Sie sich auf unserer Bergblick-Terrasse",
      },
      image: 'https://source.unsplash.com/GiZtJ4juG44'
    },
    {
      id: 'kids-playground',
      title: {
        en: "Kids Playground",
        es: "Parque Infantil",
        fr: "Aire de Jeux pour Enfants",
        de: "Spielplatz für Kinder",
      },
      headline: {
        en: "Fun and Adventure for Little Ones: Explore Our Kids Playground",
        es: "Diversión y Aventura para los Más Pequeños: Explora Nuestro Parque Infantil",
        fr: "Divertissement et Aventure pour les Petits : Explorez Notre Aire de Jeux pour Enfants",
        de: "Spaß und Abenteuer für die Kleinen: Erkunden Sie Unseren Spielplatz für Kinder",
      },
      image: 'https://source.unsplash.com/lKMuPgwSCbo'
    },
  ],
  highlights: {
    image: 'https://source.unsplash.com/ooI4bOT95Ow',
    points: [
      {
        id: 'peaceful-retreat',
        title: {
          en: "Peaceful Retreat",
          es: "Refugio de Paz",
          fr: "Retraite Paisible",
          de: "Friedlicher Rückzugsort",
        },
        headline: {
          en: "Escape to Tranquility and Serenity",
          es: "Escápate a la Tranquilidad y la Serenidad",
          fr: "Échappez à la Tranquillité et à la Sérénité",
          de: "Entfliehen Sie zur Ruhe und Gelassenheit",
        },
      },
      {
        id: 'scenic-wonders',
        title: {
          en: "Scenic Wonders",
          es: "Maravillas Escénicas",
          fr: "Merveilles Pittoresques",
          de: "Malersiche Wunder",
        },
        headline: {
          en: "Discover Nature's Breathtaking Beauty",
          es: "Descubre la Belleza Impresionante de la Naturaleza",
          fr: "Découvrez la Beauté à Couper le Souffle de la Nature",
          de: "Entdecken Sie die Atemberaubende Schönheit der Natur",
        },
      },
      {
        id: 'culinary-excellence',
        title: {
          en: "Culinary Excellence",
          es: "Excelencia Culinaria",
          fr: "Excellence Culinaire",
          de: "Kulinarische Exzellenz",
        },
        headline: {
          en: "Savor Exquisite Flavors and Dining",
          es: "Disfruta de Sabores y Comida Exquisitos",
          fr: "Dégustez des Saveurs et une Cuisine Exquises",
          de: "Genießen Sie Exquisite Aromen und Gastronomie",
        },
      },
    ],
  },
  venue: {
    place: {
      name: `61043, Cagli, Pesaro and Urbino, Italy`,
      latitude: 43.545737,
      longitude: 12.651788,
    },
    description: {
      en: "Nestled in the heart of the breathtaking Apennine Mountains in Italy, our cottage is a haven of serenity and adventure. With a range of beautifully appointed rooms, from cozy retreats to luxurious suites, we offer a year-round retreat for families and travelers alike. Explore the wonders of nature through outdoor activities, relax in our spa, and savor culinary excellence in our restaurant. Join our thrilling photography workshops and capture the stunning scenery that surrounds us. Experience the magic of the Apenninos Mountains at our idyllic getaway.",
      es: "Ubicada en el corazón de las impresionantes montañas Apeninos en Italia, nuestra cabaña es un refugio de serenidad y aventura. Con una variedad de habitaciones bellamente decoradas, desde retiros acogedores hasta suites de lujo, ofrecemos un refugio durante todo el año para familias y viajeros por igual. Explore las maravillas de la naturaleza a través de actividades al aire libre, relájese en nuestro spa y disfrute de la excelencia culinaria en nuestro restaurante. Únase a nuestros emocionantes talleres de fotografía y capture los impresionantes paisajes que nos rodean. Experimente la magia de las montañas Apeninos en nuestro refugio idílico.",
      fr: "Nichée au cœur des magnifiques montagnes des Apennins en Italie, notre chalet est un havre de sérénité et d'aventure. Avec une gamme de chambres magnifiquement aménagées, des retraites confortables aux suites luxueuses, nous offrons une retraite toute l'année pour les familles et les voyageurs. Explorez les merveilles de la nature grâce à des activités de plein air, détendez-vous dans notre spa et savourez l'excellence culinaire dans notre restaurant. Rejoignez nos passionnants ateliers de photographie et capturez les paysages époustouflants qui nous entourent. Vivez la magie des montagnes des Apennins dans notre refuge idyllique.",
      de: "Inmitten der atemberaubenden Apennin-Berge in Italien gelegen, ist unser Ferienhaus ein Ort der Ruhe und Abenteuer. Mit einer Auswahl wunderschön eingerichteter Zimmer, von gemütlichen Rückzugsorten bis hin zu luxuriösen Suiten, bieten wir das ganze Jahr über einen Rückzugsort für Familien und Reisende. Erkunden Sie die Wunder der Natur bei Outdoor-Aktivitäten, entspannen Sie im Spa und genießen Sie kulinarische Exzellenz in unserem Restaurant. Nehmen Sie an unseren aufregenden Fotografie-Workshops teil und halten Sie die atemberaubende Landschaft um uns herum fest. Erleben Sie die Magie der Apennin-Berge in unserem idyllischen Refugium."
    },
    goodToKnow: {
      en: "Good to Know:\n\n1. Check-in: Our check-in time is from 3:00 PM, and check-out is by 11:00 AM. Early check-ins and late check-outs are subject to availability.\n\n2. Dining: Join us at our restaurant for delectable meals. Make reservations in advance for special occasions or dietary preferences.\n\n3. Activities: Explore the great outdoors with our guided activities. Please inquire at the front desk for schedules and availability.\n\n4. Spa Reservations: Book spa treatments in advance to ensure availability and relaxation during your stay.",
      es: "Bueno Saber:\n\n1. Check-in: Nuestro horario de registro es a partir de las 3:00 PM y la salida es antes de las 11:00 AM. Los registros tempranos y las salidas tardías están sujetos a disponibilidad.\n\n2. Comedor: Únase a nosotros en nuestro restaurante para disfrutar de comidas deliciosas. Haga reservaciones con anticipación para ocasiones especiales o preferencias dietéticas.\n\n3. Actividades: Explore la naturaleza con nuestras actividades guiadas. Consulte en la recepción los horarios y la disponibilidad.\n\n4. Reservas de Spa: Reserve tratamientos de spa con anticipación para garantizar disponibilidad y relajación durante su estancia.",
      fr: "Bon à Savoir :\n\n1. Enregistrement : Notre heure d'enregistrement est à partir de 15h00, et le départ doit être effectué avant 11h00. Les enregistrements anticipés et les départs tardifs sont soumis à disponibilité.\n\n2. Restauration : Rejoignez-nous dans notre restaurant pour déguster des plats délicieux. Réservez à l'avance pour les occasions spéciales ou les préférences alimentaires.\n\n3. Activités : Explorez la nature avec nos activités guidées. Veuillez vous renseigner à la réception pour les horaires et la disponibilité.\n\n4. Réservations Spa : Réservez vos soins au spa à l'avance pour garantir leur disponibilité et votre relaxation pendant votre séjour.",
      de: "Gut zu wissen:\n\n1. Check-in: Unsere Check-in-Zeit ist ab 15:00 Uhr und der Check-out erfolgt bis 11:00 Uhr. Früher Check-in und spätere Check-out-Zeiten sind nach Verfügbarkeit möglich.\n\n2. Restaurant: Besuchen Sie unser Restaurant für köstliche Mahlzeiten. Reservieren Sie im Voraus für besondere Anlässe oder diätetische Vorlieben.\n\n3. Aktivitäten: Erkunden Sie die Natur bei unseren geführten Aktivitäten. Erkundigen Sie sich an der Rezeption nach den Zeiten und der Verfügbarkeit.\n\n4. Spa-Reservierungen: Buchen Sie Spa-Behandlungen im Voraus, um deren Verfügbarkeit und Entspannung während Ihres Aufenthalts sicherzustellen."
    },
  },
  gallery: {
    images: [
      'https://source.unsplash.com/4CKnbVZ4Tew',
      'https://source.unsplash.com/r7xZNCuVMUs',
      'https://source.unsplash.com/T7K4aEPoGGk',
      'https://source.unsplash.com/Q5dMq3cKqec',
      'https://source.unsplash.com/LIiWQ24lTZw',
      'https://source.unsplash.com/shT0C0XCc6k',
      'https://source.unsplash.com/OmelL9tVVno',
      'https://source.unsplash.com/O453M2Liufs',
      'https://source.unsplash.com/-2UKHw7fAZI',
      'https://source.unsplash.com/bgLKjjj_xkU',
    ],
  },
  bookingQuestions: [
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
