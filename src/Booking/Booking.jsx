import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Booking = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    // const url = `http://localhost:5000/bookings?email=dom@react.com`;

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data);
            })

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url]);


    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log((data));
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }

    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    //update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);

                }
            })
    }



    return (
        <div className="overflow-x-auto">
            <h1>Booking : {bookings.length}</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleBookingConfirm={handleBookingConfirm}
                        ></BookingRow>)
                    }
                </tbody>



            </table>
        </div>
    );
};

export default Booking;