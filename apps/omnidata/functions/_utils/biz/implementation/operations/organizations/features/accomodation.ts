import {
  Feature_Symbol_Enum,
  Feature_Type_Enum,
} from '@otiuming/domain-omnidata-types'

export const ACCOMMODATION_FEATURES = [
  {
    id: 'WIFI',
    name: { en: 'Wi-Fi', es: 'Wi-Fi', fr: 'Wi-Fi', de: 'WLAN' },
    headline: {
      en: 'Wireless internet access',
      es: 'Acceso a internet inalámbrico',
      fr: 'Accès internet sans fil',
      de: 'Drahtloser Internetzugang',
    },
    symbol: Feature_Symbol_Enum.Wifi,
    type: Feature_Type_Enum.Boolean,
    categories: ['ACCOMMODATIONS', 'AMENITIES'],
  },
  {
    id: 'AIR_CONDITIONING',
    name: {
      en: 'Air Conditioning',
      es: 'Aire Acondicionado',
      fr: 'Climatisation',
      de: 'Klimaanlage',
    },
    headline: {
      en: 'Air conditioning available in all rooms',
      es: 'Aire acondicionado disponible en todas las habitaciones',
      fr: 'Climatisation disponible dans toutes les chambres',
      de: 'Klimaanlage in allen Zimmern verfügbar',
    },
    symbol: Feature_Symbol_Enum.Snowflake,
    type: Feature_Type_Enum.Boolean,
    categories: ['ACCOMMODATIONS', 'AMENITIES'],
  },
  {
    id: 'BREAKFAST_INCLUDED',
    name: {
      en: 'Breakfast Included',
      es: 'Desayuno incluido',
      fr: 'Petit déjeuner inclus',
      de: 'Frühstück inbegriffen',
    },
    headline: {
      en: 'Breakfast is included with your stay',
      es: 'El desayuno está incluido con su estancia',
      fr: 'Le petit déjeuner est inclus dans votre séjour',
      de: 'Frühstück ist im Aufenthalt inbegriffen',
    },
    symbol: Feature_Symbol_Enum.Utensils,
    type: Feature_Type_Enum.Boolean,
    categories: ['ACCOMMODATIONS', 'AMENITIES'],
  },
  {
    id: 'PARKING_AVAILABLE',
    name: {
      en: 'Parking Available',
      es: 'Estacionamiento Disponible',
      fr: 'Parking Disponible',
      de: 'Parkplatz verfügbar',
    },
    headline: {
      en: 'Free parking available for guests',
      es: 'Estacionamiento gratuito disponible para los huéspedes',
      fr: 'Parking gratuit disponible pour les clients',
      de: 'Kostenlose Parkplätze für Gäste verfügbar',
    },
    symbol: Feature_Symbol_Enum.Parking,
    type: Feature_Type_Enum.Boolean,
    categories: ['ACCOMMODATIONS', 'AMENITIES'],
  },
  {
    id: 'FREE_PARKING',
    name: {
      en: 'Free Parking',
      es: 'Estacionamiento Gratuito',
      fr: 'Parking Gratuit',
      de: 'Kostenfreies Parken',
    },
    headline: {
      en: 'Complimentary on-site parking available',
      es: 'Estacionamiento gratuito en el sitio disponible',
      fr: 'Parking gratuit disponible sur place',
      de: 'Kostenfreie Parkplätze vor Ort verfügbar',
    },
    symbol: Feature_Symbol_Enum.Parking,
    type: Feature_Type_Enum.Boolean,
    categories: ['ACCOMMODATIONS'],
  },
  {
    id: 'POOL_ACCESS',
    name: {
      en: 'Pool Access',
      es: 'Acceso a la Piscina',
      fr: 'Accès à la piscine',
      de: 'Zugang zum Pool',
    },
    headline: {
      en: 'Access to the pool included',
      es: 'Acceso a la piscina incluido',
      fr: 'Accès à la piscine inclus',
      de: 'Zugang zum Pool inbegriffen',
    },
    symbol: Feature_Symbol_Enum.Swimmer,
    type: Feature_Type_Enum.Boolean,
    categories: ['ACCOMMODATIONS', 'AMENITIES'],
  },
  {
    id: 'FITNESS_CENTER',
    name: {
      en: 'Fitness Center',
      es: 'Centro de Fitness',
      fr: 'Centre de Fitness',
      de: 'Fitnesscenter',
    },
    headline: {
      en: 'Fitness center available to all guests',
      es: 'Centro de fitness disponible para todos los huéspedes',
      fr: 'Centre de fitness disponible pour tous les clients',
      de: 'Fitnesscenter für alle Gäste verfügbar',
    },
    symbol: Feature_Symbol_Enum.Dumbbell,
    type: Feature_Type_Enum.Boolean,
    categories: ['ACCOMMODATIONS', 'AMENITIES'],
  },
  {
    id: 'SMOKING_ALLOWED',
    name: {
      en: 'Smoking Allowed',
      es: 'Se permite fumar',
      fr: 'Fumer autorisé',
      de: 'Rauchen erlaubt',
    },
    headline: {
      en: 'Designated smoking areas available',
      es: 'Zonas designadas para fumar disponibles',
      fr: 'Zones fumeurs désignées disponibles',
      de: 'Ausgewiesene Raucherbereiche verfügbar',
    },
    symbol: Feature_Symbol_Enum.Smoking,
    type: Feature_Type_Enum.Boolean,
    categories: ['ACCOMMODATIONS', 'POLICIES'],
  },
  {
    id: 'NON_SMOKING',
    name: {
      en: 'Non-Smoking',
      es: 'No Fumadores',
      fr: 'Non-Fumeur',
      de: 'Nichtraucher',
    },
    headline: {
      en: 'Non-smoking rooms available',
      es: 'Habitaciones para no fumadores disponibles',
      fr: 'Chambres non-fumeurs disponibles',
      de: 'Nichtraucherzimmer verfügbar',
    },
    symbol: Feature_Symbol_Enum.Ban,
    type: Feature_Type_Enum.Boolean,
    categories: ['ACCOMMODATIONS', 'POLICIES'],
  },
  {
    id: 'ELEVATOR_ACCESS',
    name: {
      en: 'Elevator Access',
      es: 'Acceso por Ascensor',
      fr: 'Accès par Ascenseur',
      de: 'Aufzugzugang',
    },
    headline: {
      en: 'Elevator access to all floors',
      es: 'Acceso por ascensor a todos los pisos',
      fr: 'Accès par ascenseur à tous les étages',
      de: 'Aufzugzugang zu allen Stockwerken',
    },
    symbol: Feature_Symbol_Enum.Elevator,
    type: Feature_Type_Enum.Boolean,
    categories: ['ACCOMMODATIONS', 'AMENITIES'],
  },
  {
    id: 'NUMBER_OF_BEDS',
    name: {
      en: 'Number of Beds',
      es: 'Número de Camas',
      fr: 'Nombre de Lits',
      de: 'Anzahl der Betten',
    },
    headline: {
      en: 'Choose the number of beds in the room',
      es: 'Elija el número de camas en la habitación',
      fr: 'Choisissez le nombre de lits dans la chambre',
      de: 'Wählen Sie die Anzahl der Betten im Zimmer',
    },
    symbol: Feature_Symbol_Enum.Bed,
    type: Feature_Type_Enum.Integer,
    categories: ['ACCOMMODATIONS', 'AMENITIES'],
  },
  {
    id: 'NUMBER_OF_SOFA_BEDS',
    name: {
      en: 'Number of Sofa Beds',
      es: 'Número de Sofás Cama',
      fr: 'Nombre de Canapés-Lits',
      de: 'Anzahl der Schlafsofas',
    },
    headline: {
      en: 'Number of sofa beds available',
      es: 'Número de sofás cama disponibles',
      fr: 'Nombre de canapés-lits disponibles',
      de: 'Anzahl der verfügbaren Schlafsofas',
    },
    symbol: Feature_Symbol_Enum.Couch,
    type: Feature_Type_Enum.Integer,
    categories: ['ACCOMMODATIONS', 'AMENITIES'],
  },
  {
    id: 'BALCONY',
    name: { en: 'Balcony', es: 'Balcón', fr: 'Balcon', de: 'Balkon' },
    headline: {
      en: 'Room includes a balcony',
      es: 'La habitación incluye un balcón',
      fr: 'La chambre comprend un balcon',
      de: 'Das Zimmer verfügt über einen Balkon',
    },
    symbol: Feature_Symbol_Enum.DoorOpen,
    type: Feature_Type_Enum.Boolean,
    categories: ['ACCOMMODATIONS', 'AMENITIES'],
  },
  {
    id: 'PRIVATE_BATHROOM',
    name: {
      en: 'Private Bathroom',
      es: 'Baño Privado',
      fr: 'Salle de Bain Privée',
      de: 'Privatbad',
    },
    headline: {
      en: 'Includes a private bathroom',
      es: 'Incluye un baño privado',
      fr: 'Comprend une salle de bain privée',
      de: 'Beinhaltet ein privates Badezimmer',
    },
    symbol: Feature_Symbol_Enum.Shower, // Keeps the bath symbol as it specifically represents bathrooms.
    type: Feature_Type_Enum.Boolean,
    categories: ['ACCOMMODATIONS', 'AMENITIES'],
  },
  {
    id: 'NICE_VIEW',
    name: {
      en: 'Nice View',
      es: 'Buena Vista',
      fr: 'Belle Vue',
      de: 'Schöne Aussicht',
    },
    headline: {
      en: 'Room with a stunning view',
      es: 'Habitación con una vista impresionante',
      fr: 'Chambre avec une vue imprenable',
      de: 'Zimmer mit atemberaubender Aussicht',
    },
    symbol: Feature_Symbol_Enum.Binoculars, // Changed to a more significant symbol, binoculars, indicating exploration or an extensive view.
    type: Feature_Type_Enum.Boolean,
    categories: ['ACCOMMODATIONS', 'AMENITIES'],
  },
  {
    id: 'HEATING',
    name: { en: 'Heating', es: 'Calefacción', fr: 'Chauffage', de: 'Heizung' },
    headline: {
      en: 'Heating available in all rooms',
      es: 'Calefacción disponible en todas las habitaciones',
      fr: 'Chauffage disponible dans toutes les chambres',
      de: 'Heizung in allen Zimmern verfügbar',
    },
    symbol: Feature_Symbol_Enum.Heating,
    type: Feature_Type_Enum.Boolean,
    categories: ['ACCOMMODATIONS'],
  },
  {
    id: 'KITCHEN',
    name: { en: 'Kitchen', es: 'Cocina', fr: 'Cuisine', de: 'Küche' },
    headline: {
      en: 'Fully equipped kitchen available',
      es: 'Cocina totalmente equipada disponible',
      fr: 'Cuisine entièrement équipée disponible',
      de: 'Voll ausgestattete Küche verfügbar',
    },
    symbol: Feature_Symbol_Enum.Utensils, // Using utensils to represent kitchen equipment
    type: Feature_Type_Enum.Boolean,
    categories: ['ACCOMMODATIONS'],
  },
  {
    id: 'ENTIRE_PLACE',
    name: {
      en: 'Entire Place',
      es: 'Lugar Entero',
      fr: 'Logement Entier',
      de: 'Ganze Unterkunft',
    },
    headline: {
      en: 'Guests have the whole place to themselves',
      es: 'Los huéspedes tienen todo el lugar para ellos',
      fr: 'Les invités ont tout le logement pour eux',
      de: 'Gäste haben die ganze Unterkunft für sich',
    },
    symbol: Feature_Symbol_Enum.Home, // Using 'Home' to represent the entire place
    type: Feature_Type_Enum.Boolean,
    categories: ['ACCOMMODATIONS'],
  },
  {
    id: 'LIVING_ROOM',
    name: {
      en: 'Living Room',
      es: 'Sala de Estar',
      fr: 'Salon',
      de: 'Wohnzimmer',
    },
    headline: {
      en: 'Includes a dedicated living room area',
      es: 'Incluye un área de sala de estar dedicada',
      fr: 'Comprend un espace salon dédié',
      de: 'Enthält einen dedizierten Wohnbereich',
    },
    symbol: Feature_Symbol_Enum.Couch, // Using 'Couch' to represent the living room
    type: Feature_Type_Enum.Boolean,
    categories: ['ACCOMMODATIONS'],
  },
  {
    id: 'AREA',
    name: { en: 'Area', es: 'Área', fr: 'Surface', de: 'Fläche' },
    headline: {
      en: 'Total area in square meters',
      es: 'Área total en metros cuadrados',
      fr: 'Surface totale en mètres carrés',
      de: 'Gesamtfläche in Quadratmetern',
    },
    symbol: Feature_Symbol_Enum.ExpandArrows, // Using 'ExpandArrowsAlt' to represent the expansion of space
    type: Feature_Type_Enum.Integer, // You could consider using Decimal if more precision is required
    categories: ['ACCOMMODATIONS'],
  },
]
