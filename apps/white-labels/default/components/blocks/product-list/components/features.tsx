import {
  BusinessModel,
  TimeSlotsPerPaxConfiguration,
} from '@otiuming/domain-rates'
import { Product_List_ItemFragment, Product_With_Rates_MinimalFragment } from '@/data-access'
import { Feature_Symbol_Enum, Rate_Type_Enum, Feature_Type_Enum } from '@otiuming/domain-omnidata-types'

import { FeatureInfo } from '../../../legos/lib/data-types'

const featureSymbolToIconClass = {
  [Feature_Symbol_Enum.Baby]: 'la-baby',
  [Feature_Symbol_Enum.Ban]: 'la-ban',
  [Feature_Symbol_Enum.Bed]: 'la-bed',
  [Feature_Symbol_Enum.Binoculars]: 'la-binoculars',
  [Feature_Symbol_Enum.BriefcaseMedical]: 'la-briefcase-medical',
  [Feature_Symbol_Enum.Bus]: 'la-bus',
  [Feature_Symbol_Enum.CalendarAlt]: 'la-calendar-alt',
  [Feature_Symbol_Enum.Camera]: 'la-camera',
  [Feature_Symbol_Enum.Car]: 'la-car',
  [Feature_Symbol_Enum.Certificate]: 'la-certificate',
  [Feature_Symbol_Enum.ChalkboardTeacher]: 'la-chalkboard-teacher',
  [Feature_Symbol_Enum.ClipboardCheck]: 'la-clipboard-check',
  [Feature_Symbol_Enum.Cocktail]: 'la-cocktail',
  [Feature_Symbol_Enum.Coffee]: 'la-coffee',
  [Feature_Symbol_Enum.Cogs]: 'la-cogs',
  [Feature_Symbol_Enum.Couch]: 'la-couch',
  [Feature_Symbol_Enum.DoorOpen]: 'la-door-open',
  [Feature_Symbol_Enum.Dumbbell]: 'la-dumbbell',
  [Feature_Symbol_Enum.Elevator]: 'la-elevator',
  [Feature_Symbol_Enum.ExpandArrows]: 'la-expand-arrows-alt',
  [Feature_Symbol_Enum.Family]: 'la-users',
  [Feature_Symbol_Enum.Fish]: 'la-fish',
  [Feature_Symbol_Enum.FuelPump]: 'la-gas-pump',
  [Feature_Symbol_Enum.GasPump]: 'la-gas-pump',
  [Feature_Symbol_Enum.Heating]: 'la-fire-alt',
  [Feature_Symbol_Enum.Hiking]: 'la-hiking',
  [Feature_Symbol_Enum.Home]: 'la-home',
  [Feature_Symbol_Enum.HourglassHalf]: 'la-hourglass-half',
  [Feature_Symbol_Enum.IdBadge]: 'la-id-badge',
  [Feature_Symbol_Enum.IdCard]: 'la-id-card',
  [Feature_Symbol_Enum.Language]: 'la-language',
  [Feature_Symbol_Enum.Leaf]: 'la-leaf',
  [Feature_Symbol_Enum.LifeRing]: 'la-life-ring',
  [Feature_Symbol_Enum.NoSmoking]: 'la-ban',
  [Feature_Symbol_Enum.Parking]: 'la-parking',
  [Feature_Symbol_Enum.Paw]: 'la-paw',
  [Feature_Symbol_Enum.Plug]: 'la-plug',
  [Feature_Symbol_Enum.Rainbow]: 'la-rainbow',
  [Feature_Symbol_Enum.RulerHorizontal]: 'la-ruler-horizontal',
  [Feature_Symbol_Enum.SatelliteDish]: 'la-satellite-dish',
  [Feature_Symbol_Enum.Sculpture]: 'la-landmark',
  [Feature_Symbol_Enum.Shield]: 'la-shield-alt',
  [Feature_Symbol_Enum.ShieldAlt]: 'la-shield-alt',
  [Feature_Symbol_Enum.Ship]: 'la-ship',
  [Feature_Symbol_Enum.Shower]: 'la-shower',
  [Feature_Symbol_Enum.Signal]: 'la-signal',
  [Feature_Symbol_Enum.Smoking]: 'la-smoking',
  [Feature_Symbol_Enum.Snowflake]: 'la-snowflake',
  [Feature_Symbol_Enum.SodaCan]: 'la-beer',
  [Feature_Symbol_Enum.Sun]: 'la-sun',
  [Feature_Symbol_Enum.Swimmer]: 'la-swimmer',
  [Feature_Symbol_Enum.SwimmingPool]: 'la-swimming-pool',
  [Feature_Symbol_Enum.TachometerAlt]: 'la-tachometer-alt',
  [Feature_Symbol_Enum.Ticket]: 'la-ticket-alt',
  [Feature_Symbol_Enum.Toolbox]: 'la-toolbox',
  [Feature_Symbol_Enum.User]: 'la-user',
  [Feature_Symbol_Enum.Users]: 'la-users',
  [Feature_Symbol_Enum.UserTie]: 'la-user-tie',
  [Feature_Symbol_Enum.Utensils]: 'la-utensils',
  [Feature_Symbol_Enum.WeightHanging]: 'la-weight-hanging',
  [Feature_Symbol_Enum.Wheelchair]: 'la-wheelchair',
  [Feature_Symbol_Enum.Wifi]: 'la-wifi'
};


interface Props {
  product: Product_List_ItemFragment & Product_With_Rates_MinimalFragment
  businessModel: BusinessModel
  maxFeatures?: number
}

export const extractFeatures = (props: Props): FeatureInfo[] => {
  const { product, businessModel, maxFeatures = Infinity } = props

  const features: FeatureInfo[] = []

  if (product.features) {
    product.features.slice(0, maxFeatures).map(f => ({
      icon: `las ${featureSymbolToIconClass[f.feature.symbol]}`,
      title: f.feature.type === Feature_Type_Enum.Boolean
        ? f.feature.name.value
        : f.value,
    })).forEach(f => features.push(f))
  }

  if (businessModel.time_management === Rate_Type_Enum.TimeSlots) {
    const configuration = product.rates?.[0]
      ?.configuration as TimeSlotsPerPaxConfiguration

    if (!configuration) {
      return features
    }

    features.unshift({
      icon: 'las la-hourglass-half',
      title: `${configuration.durationInHours}h`,
    })

  }

  return features.slice(0, maxFeatures)
}

export const ProductFeatures: React.FC<Props> = ({
  product,
  businessModel,
}) => {
  const features = extractFeatures({ product, businessModel })

  return (
    <>
      {features.map((feature, index) => (
        <div key={index} className="h-10 px-3">
          <span>
            <i className={`${feature.icon} text-xxl`}></i>
            <span className="ml-1">{feature.title}</span>
          </span>
        </div>
      ))}
    </>
  )
}
