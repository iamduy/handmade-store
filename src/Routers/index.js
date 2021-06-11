import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import LayoutWebsite from '../layouts/layoutWebsite.js';
import LayoutAdmin from '../layouts/layoutAdmin.js';
import Error404 from '../layouts/Error404.js';
// router user
import SignUp from '../pages/User/SignUp.js';
import SignIn from '../pages/User/SignIn.js';
import Profile from '../pages/User/Profile.js';
//router website
import Home from '../pages/Website/HomePage/Home.js';
import BlogPage from '../pages/Website/Blog/Blog.js';
import ProductPage from '../pages/Website/Products/ProductPage.js';
import DetailProduct from '../pages/Website/Products/DetailProduct.js';
import AboutPage from '../pages/Website/About/About.js';
import ContactPage from '../pages/Website/Contact/Contact.js';
import Category from '../pages/Website/Products/Category.js';
//router admin
import Dashboard from '../pages/Admin/Dashboard/dashboard.js';
import ProductList from '../pages/Admin/Products/List'
import ProductAdd from '../pages/Admin/Products/Add';
import ProductEdit from '../pages/Admin/Products/Edit.js';
import CategoryList from '../pages/Admin/Category/List.js';
import CategoryAdd from '../pages/Admin/Category/Add.js';
import CategoryEdit from '../pages/Admin/Category/Edit.js';
import DetailBlog from '../pages/Website/Blog/DetailBog.js';

const Routers = (props) => {
  return (
    <Router>
      <Switch>
        {/* Layout Admin */}
        <Route path='/admin/:path?/:path?/:path?'>
          <LayoutAdmin>
            <Switch>
              <Route exact path='/admin/dashboard'>
                <Dashboard {...props} />
              </Route>
              {/* product */}
              <Route exact path='/admin/product/list'>
                <ProductList {...props} />
              </Route>
              <Route exact path='/admin/product/add'>
                <ProductAdd {...props} />
              </Route>
              <Route exact path='/admin/product/edit/:id?'>
                <ProductEdit {...props} />
              </Route>
              {/* category */}
              <Route exact path='/admin/category/list'>
                <CategoryList {...props} />
              </Route>
              <Route exact path='/admin/category/add'>
                <CategoryAdd {...props} />
              </Route>
              <Route exact path='/admin/category/edit/:id?'>
                <CategoryEdit {...props} />
              </Route>
            </Switch>
          </LayoutAdmin>
        </Route>

        {/* Layout Website */}
        <Route>
          <LayoutWebsite>
            <Switch>
              <Route exact path='/'>
                <Home {...props} />
              </Route>
              <Route exact path='/blog'>
                <BlogPage {...props} />
              </Route>
              <Route exact path='/blog/:id?'>
                <DetailBlog {...props} />
              </Route>
              <Route exact path='/about'>
                <AboutPage />
              </Route>
              <Route exact path='/contact'>
                <ContactPage />
              </Route>
              <Route exact path='/shop'>
                <ProductPage {...props} />
              </Route>
              <Route exact path='/product/:id?'>
                <DetailProduct {...props} />
              </Route>
              <Route exact path='/category/:id?'>
                <Category {...props} />
              </Route>

              <Route exact path='/signup'>
                <SignUp {...props} />
              </Route>
              <Route exact path='/signin'>
                <SignIn {...props} />
              </Route>
              <Route exact path='/profile'>
                <Profile {...props} />
              </Route>

              <Route path='*'>
                <Error404>
                  Error 404
                </Error404>
              </Route>
            </Switch>
          </LayoutWebsite>
        </Route>


      </Switch>
    </Router>
  );
};

export default Routers;
