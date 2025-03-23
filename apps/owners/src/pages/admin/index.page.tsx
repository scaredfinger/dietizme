import React from 'react'
import { DefaultForm } from '@/components/page-containers'
import TopSellingProducts from '@/components/dashboards/TopSellingProducts'
import BookingsByArrivalDate from '@/components/dashboards/BookingsByArrivalDate'

const DemoOne = () => {
  return (
    <>
      <DefaultForm
        title={'Dashboard'}
        loading={false}
      >
        <TopSellingProducts/>
        <BookingsByArrivalDate/>
      </DefaultForm>
    </>
  )
}

export default DemoOne
