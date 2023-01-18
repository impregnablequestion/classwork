import { useEffect, useState } from "react"
import BookingList from "../components/BookingList";
import BookingForm from "../components/BookingForm";
import { getBookings } from "../services/BookingService";


const BookingContainer = () => {

    const [bookingList, setBookingList] = useState([]);

    const addBooking = (booking) => {
        console.log("added booking")
        const tempList = [...bookingList];
        tempList.push(booking);
        setBookingList(tempList);
    }
    
    
    const removeBooking = (id) => {
        const tempList = [...bookingList]
        const index = tempList.map(booking => booking._id).indexOf(id);
        tempList.splice(index, 1)
        setBookingList(tempList)
    }


    useEffect(()=>{
        getBookings()
        .then(bookings => setBookingList(bookings))
    }, [])

    return(
        <>
            <p>container</p>
            <BookingForm addBooking = {addBooking}/>
            <BookingList bookingList = {bookingList} removeBooking={removeBooking}/>
        </>
    )
}

export default BookingContainer;