import Entry from '../Components/Entry'
import Header from '../Components/Header'
import React from 'react'
import './App.css'
import data from "./data"

function App() {
    // const entries = data.map((entry) => { return <Entry
    //     key={entry.id}
    //     img= {entry.img} 
    //     title={entry.title} 
    //     country={entry.country} 
    //     dates={entry.dates} 
    //     googleMapsLink = {entry.googleMapsLink}
    //     text= {entry.text} /> })

    //alternate method is this, and then wherever we used props.<property>, we must replace with props.entry.<property>
    

    const entries = data.map((entry) => { return <Entry
        key={entry.id}
        entry ={entry} /> })


  return (
      <>
        <Header/>
        <main className='container'>
         {entries}
        </main>
      </>
  )
}

export default App

{/* <Entry
img= {{
  src: 'MountFuji.jpg',
  alt: 'Mount Fuji'
}}
title = "Mount Fuji"
country = "Japan"
googleMapsLink= "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
dates = "12 Jan 2021 - 24 Jan 2021"
text= "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
/> */}