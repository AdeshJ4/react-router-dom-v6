import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import BookLayout from "./pages/BookLayout";
import BlogLayout from "./pages/BlogLayout";
import Blogs from "./pages/Blogs";
import Travel from "./pages/Travel";
import Education from "./pages/Education";
import Programming from "./pages/Programming";
import NoPage from "./pages/NoPage";
import ContactLayout from "./pages/ContactLayout";
import Police from "./pages/Police";
import Office from "./pages/Office";

const App = () => {
  return (
    <>
      {/* <Routes location="/">
        <Route path="/" element={<h1>Extra COntent</h1>} />
        <Route path="/ok1" element={<h1>ok1</h1>} />
        <Route path="/ok2" element={<h1>ok2</h1>} />
        <Route path="/ok3" element={<h1>ok3</h1>} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<BookLayout />}>
            <Route index element={<BookList />} />
            <Route path="new" element={<NewBook />} />
            <Route path=":id" element={<Book />} />
          </Route>
          <Route path="blogs" element={<BlogLayout />}>
            <Route index element={<Blogs />} />
            <Route path="travel" element={<Travel />} />
            <Route path="education" element={<Education />} />
            <Route path="programming" element={<Programming />} />
          </Route>
          <Route path="contact" element={<ContactLayout />}>
            <Route index element={<Contact />} />
            <Route path="office" element={<Office />} />
            <Route path="police" element={<Police />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
