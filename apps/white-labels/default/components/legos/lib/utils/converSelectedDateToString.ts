import { DateTime } from 'luxon'

export const converSelectedDateToString = ({
  startDate,
  endDate,
}: {
  startDate: DateTime
  endDate: DateTime
}) => {
  const startDateString = startDate?.toFormat('MMM dd')
  const endDateString =
    endDate?.month !== startDate?.month
      ? endDate?.toFormat('MMM dd')
      : endDate?.toFormat('dd')
  const dateSelectedString =
    startDateString && endDateString
      ? `${startDateString} - ${endDateString}`
      : `${startDateString || endDateString || ''}`
  return dateSelectedString
}
