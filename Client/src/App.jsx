import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CreateBooks from "./components/CreateBooks";
import AllBooks from "./components/AllBooks";
import UpdateBook from "./components/UpdateBook";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Book Management System</h1>
          </div>
          <div>
            <Link
              to="/"
              className="ml-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Add Book
            </Link>
            <Link
              to="/books"
              className="ml-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              View All Books
            </Link>
          </div>
        </nav>
        <div className="container mx-auto p-4">
          <Routes>
            <Route exact path="/" element={<CreateBooks/>} />
            <Route exact path="/books" element={<AllBooks />} />
            <Route exact path="/updatebook/:bid" element={<UpdateBook />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
