import BookingItem from "./BookingItem";

const BookingList = ({bookingList}) => {

    console.log(bookingList)

    const displayBookings = bookingList.map((booking, index) => {
        return <BookingItem booking={booking} key={index}/> 
    });

    return(
        <ul>
            {displayBookings}
        </ul>
    )
}

export default BookingList;