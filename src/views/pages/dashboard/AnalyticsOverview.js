// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import { Grid } from '@mui/material'

const AnalyticsOverview = () => {
  // ** Hook
  const theme = useTheme()

  const options = {
    chart: {
      sparkline: { enabled: true }
    },
    stroke: { lineCap: 'round' },
    colors: [hexToRGBA(theme.palette.primary.main, 1)],
    plotOptions: {
      radialBar: {
        hollow: { size: '55%' },
        track: {
          background: theme.palette.customColors.trackBg
        },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 5,
            fontWeight: 600,
            fontSize: '1rem',
            color: theme.palette.text.primary
          }
        }
      }
    },
    grid: {
      padding: {
        bottom: -12
      }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    }
  }

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <Typography variant='h6' sx={{ mr: 1.5 }}>
            $67.1k
          </Typography>
          <Typography variant='subtitle2' sx={{ color: 'success.main' }}>
            +49%
          </Typography>
        </Box>
        <Typography variant='body2'>Overview</Typography>
        {/* <Grid item xs={12} sm={6} md={4}> */}
        <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2, md:3}}>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <ReactApexcharts type='radialBar' height={119} series={[64]} options={options} />
            </Grid>
            <Grid item xs={6}>
              <ReactApexcharts type='radialBar' height={119} series={[64]} options={options} />
            </Grid>
            <Grid item xs={6}>
              <ReactApexcharts type='radialBar' height={119} series={[64]} options={options} />
            </Grid>
            <Grid item xs={6}>
              <ReactApexcharts type='radialBar' height={119} series={[64]} options={options} />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AnalyticsOverview
