import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Dashboard from "../Page/Dashboard";
import AddBook from "../Page/AddBook";
import AddCategory from "../Page/AddCategory";
import AddPublishers from "../Page/AddPublishers";
import BookList from "../Page/BookList";
import Login from "../UserAuth/Login";
import PrivateRoute from "./PrivateRoute";
import CategoryList from "../Page/CategoryList";
import UpdateCategory from "../Page/UpdateCategory";
import PublishersList from "../Page/PublishersList";
import UpdatePublisher from "../Page/UpdatePublisher";
import UpdateBook from "../Page/UpdateBook";
import SellBook from "../Page/SellBook";

export default function MainRouters() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add_book" element={<AddBook />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/book/:slug" element={<UpdateBook />} />
          <Route path="/add_publisher" element={<AddPublishers />} />
          <Route path="/publishers" element={<PublishersList />} />
          <Route path="/publisher/:publisherID" element={<UpdatePublisher />} />
          <Route path="/add_category" element={<AddCategory />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/category/:categoryID" element={<UpdateCategory />} />
          <Route path="/sale_book" element={<SellBook />} />
        </Route>
        {/* <Route path="*" element={<ErrorPage />} replace /> */}
      </Routes>
    </>
  );
}
