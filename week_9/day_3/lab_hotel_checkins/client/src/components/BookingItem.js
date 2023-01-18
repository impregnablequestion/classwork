import { deleteBooking } from "../services/BookingService";

const BookingItem = ({booking, index, removeBooking}) => {

    const jandalDelete = () => {
        deleteBooking(booking._id)
        .then(data => {removeBooking(data._id)})
    };

    return(
        <div>
            <p>{booking.guest_name}: {booking.email} — {booking.checked_in ? "true":"false"}</p>
            <button onClick = {jandalDelete}>Little tiny bin</button>
            </div>
    )
}
export default BookingItem