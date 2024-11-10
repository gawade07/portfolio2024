import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../page/Header/Header'

const Applayput = () => {
  return (
    <div>
      <Header />
      <main className='container'>
        <Outlet />

      </main>
    </div>
  )
}

export default Applayput
