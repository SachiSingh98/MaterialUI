import React from 'react'
import Nav from './Nav'

const linkArr = ["Home" , "About" , "Contact"]

export default function ResponsiveNavIndex() {
  return (
    <>
      <Nav linkArr={linkArr} />
    </>
  )
}
