import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface FormData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  message: string;
}

export default function GetInvolved() {
  const [formData, setFormData] = useState<FormData>({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex =
      /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let hasErrors = false;
    const errorMessages: { [key: string]: string } = {};

    if (!validateEmail(formData.email)) {
      errorMessages.email = "Please enter a valid email address.";
      hasErrors = true;
    }

    if (!validatePhone(formData.phone)) {
      errorMessages.phone = "Please enter a valid phone number.";
      hasErrors = true;
    }

    if (hasErrors) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: Object.values(errorMessages).join(" "),
      });
      return;
    }

    try {
      const response = await axios.post(
        "https://api.airtable.com/v0/appIEhVJVYhaRDs6J/tbl08GRrX1G1yPz8t",
        {
          records: [
            {
              fields: {
                fname: formData.fname,
                lname: formData.lname,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
              },
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Thanks for signing up. See you soon!",
        });
        setFormData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "An error occurred while submitting the form. Please try again.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-lg bg-white p-8 text-black shadow-lg font-body"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          placeholder="First Name"
          className="rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-darkerBg"
          required
        />
        <input
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
          placeholder="Last Name"
          className="rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-darkerBg"
          required
        />
      </div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-darkerBg"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-darkerBg"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-darkerBg"
        rows={4}
        required
      ></textarea>
      <button
        type="submit"
        className="w-full rounded-md bg-link px-4 py-3 font-medium text-white shadow-md hover:bg-hover focus:outline-none focus:ring-2 focus:ring-darkerBg focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  );
}
