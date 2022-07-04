import React from 'react'
import { Form, Button, ButtonGroup } from 'react-bootstrap'
import style from './MenuAdmin.module.css'

const MenuAdmin = () => {
  return (
    <div className={'mt-0 mt-md-2 d-grid gap-3'}>
      <Form className={style.box_menu}>
        <h5 className='mb-3'>Menu</h5>
        <ButtonGroup vertical className='p-1 mx-auto'>
          <Button className='mt-2' variant='outline-secondary'>Dashboard</Button>
          <Button className='mt-2' variant='outline-secondary'>Category</Button>
          <Button className='mt-2' variant='outline-secondary'>Carousel</Button>
          <Button className='mt-2' variant='outline-secondary'>User</Button>
          <Button className='mt-2' variant='outline-secondary'>Payment</Button>
          <Button className='mt-2' variant='outline-secondary'>Transaksi</Button>
        </ButtonGroup>
      </Form>
    </div>
  )
}

export default MenuAdmin