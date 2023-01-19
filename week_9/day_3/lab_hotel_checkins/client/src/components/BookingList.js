import BookingItem from "./BookingItem";

const BookingList = ({bookingList, removeBooking}) => {

    console.log(bookingList)

    const displayBookings = bookingList.map((booking, index) => {
        return <BookingItem booking={booking} key={index} removeBooking={removeBooking}/> 
    });

    return(
        <ul id="bookings">
            {displayBookings}
        </ul>
    )
}

export default BookingList;