import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    getBook();
  }, []);

  const getBook = async () => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_HOST}/api/viewbook`)
      .then((response) => {
        setBookData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteBook = async (id) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (shouldDelete) {
      try {
        axios.delete(
          `${import.meta.env.VITE_REACT_APP_HOST}/api/deletebook/${id}`
        );
        getBook();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container mx-auto mt-8 p-6">
      <h1 className="text-2xl font-bold mb-4">All Books</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Book Name</th>
            <th className="p-2">Book Author</th>
            <th className="p-2">Book Price</th>
            <th className="p-2">Book Published</th>
            <th className="p-2" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {bookData.map((books, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="p-2">{books.bookName}</td>
              <td className="p-2">{books.bookAuthor}</td>
              <td className="p-2">{books.bookPrice}</td>
              <td className="p-2">{books.bookPublished}</td>
              <td className="p-2">
                <Link
                  to={`/updatebook/${books._id}`}
                  className="text-blue-500 pt-2 block"
                >
                  Edit
                </Link>
              </td>
              <td className="p-2">
                <button
                  onClick={() => deleteBook(books._id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBooks;
