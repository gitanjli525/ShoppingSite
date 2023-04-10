import { useRouter } from 'next/router'
import React from 'react'
import AllOrders from 'src/views/pages/orders/all'
import ClosedOrders from 'src/views/pages/orders/closed'
import OpenOrders from 'src/views/pages/orders/open'

function tab() {
  const router = useRouter()
  console.log(router.query)

  const currTab = router.query.tab
  if (currTab == 'open') return <OpenOrders />
  else if (currTab == 'closed') return <ClosedOrders />
  else return <AllOrders />
  // return <div>tab</div>
}

export default tab
