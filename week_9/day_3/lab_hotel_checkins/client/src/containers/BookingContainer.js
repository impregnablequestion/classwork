import BookingList from "../components/BookingList";
import BookingForm from "../components/BookingForm";
import { useEffect, useState } from "react"

const BookingContainer = () => {

    const [bookingList, setBookingList] = useState([
        {
        guest_name: "Charles Olivera",
        email: "charlieolives@gmail.com",
        checked_in: true
        },
        {
        guest_name: "Dustin Porier",
        email: "paidinfull@gmail.com",
        checked_in: true
        }
    ]);
    
    // useEffect(()=>{
        
    // }, [])

    return(
        <>
            <p>container</p>
            <BookingForm/>
            <BookingList bookingList = {bookingList}/>
        </>
    )
}

export default BookingContainer;
