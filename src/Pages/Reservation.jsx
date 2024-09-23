import axios from "axios";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/Navbar";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;

    // Allow only digits and ensure a maximum length of 10
    if (/^\d*$/.test(inputValue) && inputValue.length <= 10) {
      setPhone(inputValue);
    }
  };

  const validateForm = () => {
    if (!firstName || firstName.length < 3) {
      toast.error("First name must be at least 3 characters long");
      return false;
    }
    if (!lastName || lastName.length < 3) {
      toast.error("Last name must be at least 3 characters long");
      return false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please provide a valid email address");
      return false;
    }
    if (!phone || phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      toast.error("Phone number must be a valid 10-digit number");
      return false;
    }
    if (!date) {
      toast.error("Please select a date");
      return false;
    }
    if (!time) {
      toast.error("Please select a time");
      return false;
    }
    return true;
  };

  const handleReservation = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setTime("");
      setDate("");
    } catch (error) {
      if (error.response) {
        toast.error(error.response?.data?.message);
      } else {
        toast.error("Please fill the full form correctly.");
      }
    }
  };

  const handleBacktoMain = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <>
    <NavBar/>

    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <div className="reservation_form_box">
            <h1>Make a reservation</h1>
            <p>For further questions, please call</p>
            <form onSubmit={handleReservation}>
              <div>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Select Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Select Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={10}
                  placeholder="Enter Phone Number"
                />
              </div>
              <button type="submit">
                Reserve Now{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
              <button
                type="button"
                onClick={() => {
                  handleBacktoMain();
                }}
              >
                Back to Main
              </button>
            </form>
          </div>
        </div>
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
      </div>
      <Toaster />
    </section>
    </>
  );
};

export default Reservation;
