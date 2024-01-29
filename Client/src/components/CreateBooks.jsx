import React, { useState } from "react";
import axios from "axios";

const CreateBooks = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [booksData, setbooksData] = useState({
    bookName: "",
    bookAuthor: "",
    bookPrice: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setbooksData({
      ...booksData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!booksData.bookName.trim()) {
      alert("Book Name is required");
      return false;
    }
    if (!booksData.bookAuthor.trim()) {
      alert("Book Author is required");
      return false;
    }
    if (!booksData.bookPrice.trim()) {
      alert("Book Price is required");
      return false;
    }
    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_HOST}/api/addbook`,
        booksData
      );
      setSuccessMessage("Book Added");
      setbooksData({
        bookName: "",
        bookAuthor: "",
        bookPrice: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto max-w-md mt-8 p-6 border rounded shadow">
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend className="text-xl font-bold mb-4">Add Book</legend>
          <div className="mb-4">
            <label htmlFor="bookName" className="block text-sm font-medium text-gray-600">
              Book Name
            </label>
            <input
              type="text"
              id="bookName"
              name="bookName"
              value={booksData.bookName}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bookAuthor" className="block text-sm font-medium text-gray-600">
              Book Author
            </label>
            <input
              type="text"
              id="bookAuthor"
              name="bookAuthor"
              value={booksData.bookAuthor}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bookPrice" className="block text-sm font-medium text-gray-600">
              Book Price
            </label>
            <input
              type="text"
              id="bookPrice"
              name="bookPrice"
              value={booksData.bookPrice}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Add Book
            </button>
          </div>
          {successMessage && <p className="text-green-500">{successMessage}</p>}
        </fieldset>
      </form>
    </div>
  );
};

export default CreateBooks;
