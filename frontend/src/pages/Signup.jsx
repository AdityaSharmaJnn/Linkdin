import React, { useState, useContext } from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";


function Signup() {
  const [show, setShow] = useState(false);

  const { serverUrl } = useContext(AuthContext);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      serverUrl + "/api/auth/signup",
      {
        firstName,
        lastName,
        userName: username,
        email,
        password,
      },
      { withCredentials: true }
    );

    console.log("Signup success:", res.data);
    navigate("/login");
  } catch (error) {
    console.error(
      "SIGNUP ERROR:",
      error.response?.data || error.message
    );
  }
};

  return (
    <div className="w-full h-screen bg-white relative flex flex-col items-center">
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="absolute top-4 left-4 w-24 h-12"
      />

      {/* Signup Form */}
      <form
        onSubmit={handleSignup}
        className="mt-20 w-[90%] max-w-[400px] h-[600px] md:shadow-xl rounded-lg p-[15px] flex flex-col justify-center gap-[20px]"
      >
        <h1 className="text-gray-800 text-[30px] font-semibold mb-[20px]">
          Sign up
        </h1>

        <input
          type="text"
          placeholder="First Name"
          required
          className="w-full h-[50px] border border-gray-600 px-[20px] rounded-md"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last Name"
          required
          className="w-full h-[50px] border border-gray-600 px-[20px] rounded-md"
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Username"
          required
          className="w-full h-[50px] border border-gray-600 px-[20px] rounded-md"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          required
          className="w-full h-[50px] border border-gray-600 px-[20px] rounded-md"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <div className="w-full h-[50px] border border-gray-600 rounded-md relative">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            required
            className="w-full h-full px-[20px] rounded-md outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={() => setShow(!show)}
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-[#1dc9fd]"
          >
            {show ? "hide" : "show"}
          </span>
        </div>

        <button className="w-full h-[50px] rounded-full bg-[#1dc9fd] text-white mt-[20px]">
          Sign Up
        </button>

        <p className="text-center cursor-pointer">
          Already have an account ?
          <span
            className="text-[#2a9bd8] ml-1"
            onClick={() => navigate("/login")}
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
}


export default Signup;
