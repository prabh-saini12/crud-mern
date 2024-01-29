import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBook = () => {
  const { bid } = useParams();
  const navigate = useNavigate();
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

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_HOST}/api/viewbook/${bid}`)
      .then((response) => {
        setbooksData({
          ...booksData,
          bookName: response.data.bookName,
          bookAuthor: response.data.bookAuthor,
          bookPrice: response.data.bookPrice,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_REACT_APP_HOST}/api/updatebook/${bid}`,
        booksData
      );
      setbooksData({
        bookName: "",
        bookAuthor: "",
        bookPrice: "",
      });
      navigate("/books");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto max-w-md mt-8 p-6 border rounded shadow">
      <fieldset>
        <legend className="text-xl font-bold mb-4">Update Book</legend>
        <table className="w-full">
          <tbody>
            <tr className="mb-4">
              <td className="pr-2">Book name:</td>
              <td>
                <input
                  type="text"
                  name="bookName"
                  value={booksData.bookName}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </td>
            </tr>
            <tr className="mb-4">
              <td className="pr-2">Book Author:</td>
              <td>
                <input
                  type="text"
                  name="bookAuthor"
                  value={booksData.bookAuthor}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </td>
            </tr>
            <tr className="mb-4">
              <td className="pr-2">Book Price:</td>
              <td>
                <input
                  type="text"
                  name="bookPrice"
                  value={booksData.bookPrice}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full"
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="center">
                <button
                  type="button"
                  onClick={handleFormSubmit}
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                  Update Book
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </div>
  );
};

export default UpdateBook;
