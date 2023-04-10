import { Grid, Typography } from '@mui/material'
import AnalyticsOverview from 'src/views/pages/dashboard/AnalyticsOverview'
import CardTotalEarnings from 'src/views/pages/dashboard/CardTotalEarings'
import CrmPaymentHistory from 'src/views/pages/dashboard/CrmPaymentHistory'
import AnalyticsTotalRevenue from '../../views/pages/dashboard/AnalyticsTotalRevenue'

const dashboard = () => {

  

  return (
    <>
    <Grid item xs={12}>
          <Typography variant='h5'>Dashboard</Typography>
        </Grid>
      <Grid container spacing={6} className='match-height'>
        <Grid item xs={9}>
          <AnalyticsTotalRevenue />
        </Grid>
        <Grid item xs={3}>
          <AnalyticsOverview />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={9}>
          <CrmPaymentHistory />
        </Grid>
        <Grid item xs={3}>
          <CardTotalEarnings />
        </Grid>
      </Grid>
    </>
  )
}

export default dashboard
