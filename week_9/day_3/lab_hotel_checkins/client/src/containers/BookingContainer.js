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
        <div className="container">
            <BookingForm addBooking = {addBooking}/>
            <img src="https://images.pexels.com/photos/7820327/pexels-photo-7820327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="reception"/>
            <BookingList bookingList = {bookingList} removeBooking={removeBooking}/>
        </div>
    )
}

export default BookingContainer;