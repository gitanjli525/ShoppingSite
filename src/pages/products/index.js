import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import CardAppleWatch from 'src/views/pages/products/CardAppleWatch'
import { useState } from 'react'
import SidebarAddUser from 'src/views/pages/products/AddUserDrawer'

const products = () => {
  const [addUserOpen, setAddUserOpen] = useState(false)
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)
  const allProducts = [
    {
      name: 'sample',
      summary: 'costly apply watch',
      price: 64000,
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwVGecVegyUBdjpgM_LGvqo0UE9vOJr29DBkpmYe95saJxRsny_Lt9sC8oQPtArA9Ylc-084FH7mag3Ysrab8GjkjT8F-vgOprFLsrCxUb64AYgqBuLHG6BA&usqp=CAE'
    },
    {
      name: 'sample',
      summary: 'costly apply watch',
      price: 64000,
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwVGecVegyUBdjpgM_LGvqo0UE9vOJr29DBkpmYe95saJxRsny_Lt9sC8oQPtArA9Ylc-084FH7mag3Ysrab8GjkjT8F-vgOprFLsrCxUb64AYgqBuLHG6BA&usqp=CAE'
    },
    {
      name: 'sample',
      summary: 'costly apply watch',
      price: 64000,
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwVGecVegyUBdjpgM_LGvqo0UE9vOJr29DBkpmYe95saJxRsny_Lt9sC8oQPtArA9Ylc-084FH7mag3Ysrab8GjkjT8F-vgOprFLsrCxUb64AYgqBuLHG6BA&usqp=CAE'
    },
    {
      name: 'sample',
      summary: 'costly apply watch',
      price: 64000,
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwVGecVegyUBdjpgM_LGvqo0UE9vOJr29DBkpmYe95saJxRsny_Lt9sC8oQPtArA9Ylc-084FH7mag3Ysrab8GjkjT8F-vgOprFLsrCxUb64AYgqBuLHG6BA&usqp=CAE'
    },
    {
      name: 'sample',
      summary: 'costly apply watch',
      price: 64000,
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwVGecVegyUBdjpgM_LGvqo0UE9vOJr29DBkpmYe95saJxRsny_Lt9sC8oQPtArA9Ylc-084FH7mag3Ysrab8GjkjT8F-vgOprFLsrCxUb64AYgqBuLHG6BA&usqp=CAE'
    },
    {
      name: 'sample',
      summary: 'costly apply watch',
      price: 64000,
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwVGecVegyUBdjpgM_LGvqo0UE9vOJr29DBkpmYe95saJxRsny_Lt9sC8oQPtArA9Ylc-084FH7mag3Ysrab8GjkjT8F-vgOprFLsrCxUb64AYgqBuLHG6BA&usqp=CAE'
    }
  ]
  return (
    <>
    <Grid container spacing={6} xs={12}>
          <Typography variant='h5'>Products</Typography>
          <Button sx={{ mb: 2 }} onClick={toggleAddUserDrawer} variant='contained'>
          Add Product
        </Button>
        </Grid>
      {/* <Grid item xs={12}>
        
      </Grid> */}
      <Grid container spacing={6}>
        
        {allProducts.map(element => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <CardAppleWatch
                name={element.name}
                summary={element.summary}
                price={element.price}
                image={element.image}
                toggle={toggleAddUserDrawer}
              />
            </Grid>
          )
        })}
        <SidebarAddUser open={addUserOpen} toggle={toggleAddUserDrawer} />
      </Grid>
    </>
  )
}

export default products
