import React from "react";
import ContactManager from "./Components/ContactManager";
import Navbar from "./Components/Navbar";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import AddContact from "./Components/AddContact";
import ViewContact from "./Components/ViewContact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ContactManager />}></Route>
        <Route path="/add" element={<AddContact />}></Route>
        <Route path="/edit/:id" element={<AddContact />}></Route>
        <Route path="/view/:id" element={<ViewContact />}></Route>
      </Routes>
    </div>
  );
};

export default App;

/*
    npm init -y
    npm i json-server
    Get Request
    http://localhost:3000/products
    http://localhost:3000/reviews

    Filter using quesry parameter
    http://localhost:3000/products?category=electronics

    filter on deep listy nested properties
    http://localhost:3000/products?category=electronics&&discount.type=shipping


    Sorting Request
    http://localhost:3000/products?_sort=price

    by descending order
    http://localhost:3000/products?_sort=price&&_order=desc

    multiple sorting order
    http://localhost:3000/products?_sort=price,category&_order=desc,asc


    Pagination
    http://localhost:3000/products?_page=1&_limit=3  
  
    here page means page number && limit means how many project should have on page

    Operator(apply range on data)

    >= &&  <= operator
    http://localhost:3000/products?price_gte=2000&price_lte=4000


    to skip and data using not equalto !=
    http://localhost:3000/products?id_ne=1 to skip project id=1

    like Operator
    http://localhost:3000/products?category_like=^f  find data of character f


    Full Text Search
    http://localhost:3000/products?q=ing  (full text search ing)


    Relationships
    http://localhost:3000/products?_embed=reviews  (combine product with review relations)
    http://localhost:3000/products/2?_embed=reviews  (with single id)

    http://localhost:3000/reviews?_expand=product   (combine review with Product relations)
    http://localhost:3000/reviews/1?_expand=product (with single id)

*/
