import React from 'react'
import NavBar from './NavBar'

const linksArr = ["Home" , "About" , "Contact"]

export default function GridIndex() {
  return (
    <>
     <NavBar linksArr={linksArr} /> 
    </>
  )
}
