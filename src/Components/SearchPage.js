import React from 'react'
import './SearchPage.css'
import Button from '@mui/material/Button';
import SearchResult from './SearchResult';
const SearchPage = () => {
  return (
    <div className='searchPage'>
     <div className="searchPage__info">
        <p>62 stays . 26 august to 3o august .2 guests</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility </Button>
        <Button variant="outlined">Types of place </Button>
        <Button variant="outlined">price </Button>
        <Button variant="outlined">Rooms and Bed </Button>
        <Button variant="outlined">More filters </Button>

     </div>
     <SearchResult
      img="https://images.oyoroomscdn.com/uploads/hotel_image/54835/large/c04d3000c0ce01e7.jpg"
      title="Stay in best environment room"
      location="Kathmandu,Bouddha"
      description="1 guests . 1 bedroom . 1 bed .1 shared bathroom.wifi.kitchen .Free Parking .Washing Machine"
      star={4.73}
      price="$10 /night"
      total="$111 /total"
     />
       <SearchResult
      img="https://images.oyoroomscdn.com/uploads/hotel_image/54835/large/c04d3000c0ce01e7.jpg"
      title="Stay in best environment room"
      location="Kathmandu,Bouddha"
      description="1 guests . 1 bedroom . 1 bed .1 shared bathroom.wifi.kitchen .Free Parking .Washing Machine"
      star={4.73}
      price="$10 /night"
      total="$111 /total"
     />
       <SearchResult
      img="https://images.oyoroomscdn.com/uploads/hotel_image/54835/large/c04d3000c0ce01e7.jpg"
      title="Stay in best environment room"
      location="Kathmandu,Bouddha"
      description="1 guests . 1 bedroom . 1 bed .1 shared bathroom.wifi.kitchen .Free Parking .Washing Machine"
      star={4.73}
      price="$10 /night"
      total="$111 /total"
     />

    </div>
  )
}

export default SearchPage
