const BookingItem = ({booking, index}) => {

    return(
        <p>{booking.guest_name}: {booking.email} — {booking.checked_in ? "true":"false"}</p>
    )
}

export default BookingItem