import React from 'react'
import Card from './Card';

const Cards = () => {
  return (
    <div className='w-full grid grid-cols-3 gap-4 p-4'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
  )
}

export default Cards;