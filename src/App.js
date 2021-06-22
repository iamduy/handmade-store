import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Routers from './Routers/index'
import Swal from 'sweetalert2'
import { isAuthenticated, OnSignOut, OnUpdate } from './auth'
import userAPI from './api/userAPI'
import productAPI from './api/productAPI'
import categoryAPI from './api/categoryAPI'
import orderDetailAPI from './api/orderDetailAPI'
import blogAPI from './api/blogAPI'
import { deleteAllCart, setCart } from './actions/cartAction'
import orderAPI, { getAll } from './api/orderAPI'


function App() {

  const dispatch = useDispatch();
  const [products, setProducts] = useState([]); // state product
  const [category, setCategory] = useState([]); // state category
  const [blog, setBlog] = useState([]); // state blog
  const [userProfile, setProfile] = useState(''); // state user
  const [loading, setLoading] = useState(false);
  const [listOrder, setListOrder] = useState([]); // state Order
  const [listOrderDetail, setOrderDetail] = useState([]);
  // state search
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResultAdmin, setSearchResultAdmin] = useState([]);
  const [searchResultWebsite, setSearchResultWebsite] = useState([]);
  //state pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(6);



  // save user to state
  useEffect(() => {
    const { user } = isAuthenticated();
    if (user) {
      (
        async () => {
          try {
            const { data: profile } = await userAPI.get(user._id);
            setProfile(profile);
          } catch (error) {
            console.log(error.response)
          }
        }
      )();
    }
  }, [])

  // login get user , save state
  const handleSignIn = async (user) => {

    if (localStorage.getItem('history') === null) {
      localStorage.setItem('history', []);
    }
    try {
      const { data: userProfile } = await userAPI.get(user._id);
      localStorage.setItem('history', JSON.stringify(userProfile.history))
      localStorage.setItem('cart', JSON.stringify(userProfile.history));
      dispatch(setCart(userProfile.history));
      setProfile(userProfile);
    } catch (error) {
      console.log(error.response);
    }
  }
  const cart = useSelector(data => data.cart.data);

  // logout
  const handleLogout = (next) => {
    const userLogout = { ...userProfile, history: cart }
    const { token } = isAuthenticated()
    OnUpdate(userLogout, token)
      .then(() => {
        OnSignOut(() => {
          next();
        })
        dispatch(deleteAllCart());
        setProfile('');
      }).catch(error => console.log(error))
  }



  // pagination
  const indexOfLastProduct = currentPage * productPerPage; // vị trí sản phẩm cuối ở mỗi page
  const indexOfFirstProduct = indexOfLastProduct - productPerPage; // vị trí sản phẩm đầu ở mỗi page
  const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // search
  const OnHandleSearch = (data) => {
    setSearchTerm(data);
    if (data !== '') {
      const newList = products.filter((prod) => {
        return Object.values(prod).join(' ').toLowerCase().includes(data.toLowerCase())
      })
      const newSearch = currentProduct.filter((prod) => {
        return Object.values(prod).join(' ').toLowerCase().includes(data.toLowerCase())
      })
      setSearchResultAdmin(newList);
      setSearchResultWebsite(newSearch);
    } else {
      setSearchResultAdmin(products);
      setSearchResultWebsite(products);
    }
  }

  // list blog
  useEffect(() => {
    const listBlog = async () => {
      try {
        const { data: blog } = await blogAPI.getAll();
        setBlog(blog);
      } catch (error) {
        console.log(error);
      }
    }
    listBlog();
  }, [])

  // list product
  useEffect(() => {
    const listProduct = async () => {
      try {
        const { data: product } = await productAPI.getAll();
        setProducts(product);

      } catch (error) {
        console.log(error);
      }
    }

    listProduct();
  }, []);
  //add product
  const handleAddProduct = async (product) => {

    try {
      const { data: prod } = await productAPI.add(product);
      setProducts([...products, prod]);
    } catch (error) {
      console.log(error.response);
    }
  }
  // edit product
  const handleEditProduct = async (product, id) => {

    try {
      const { data: productFake } = await productAPI.update(id, product);
      const findIndex = products.findIndex(items => items._id === id);
      console.log('tim thay :', findIndex);
      const newList = [...products];
      newList.splice(findIndex, 1, productFake);
      setProducts(newList);
    } catch (error) {
      console.log(error.response);
    }
  }
  // remove product
  const handleRemoveProduct = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this product!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delele'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const newProd = products.filter(item => item._id !== id);
          setProducts(newProd);
          await productAPI.remove(id);
        } catch (error) {
          console.log(error);
        }
        Swal.fire(
          'Deleted!',
          'Your product has been deleted.',
          'success'
        )
      }
    })

  }

  //list category
  useEffect(() => {
    const listCategory = async () => {
      try {
        const { data: category } = await categoryAPI.getAll();
        setCategory(category);
      } catch (error) {
        console.log(error);
      }
    }
    listCategory();
  }, []);
  // remove category
  const handleRemoveCategory = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this product!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delele'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const newList = category.filter(items => items._id !== id);
          setCategory(newList);
          await categoryAPI.remove(id);
        } catch (error) {
          console.log(error.response)
        }
        Swal.fire(
          'Deleted!',
          'Your product has been deleted.',
          'success'
        )
      }
    })
  }

  // add category
  const handleAddCategory = async (cate) => {
    try {
      const { data: Cate } = await categoryAPI.add(cate);
      setCategory([...category, Cate]);
    } catch (error) {
      console.log(error.response)
    }
  }
  // edit category
  const handleEditCategory = async (cate, id) => {
    try {
      const { data: categoryFake } = await categoryAPI.update(id, cate);
      const findIndex = category.findIndex(items => items._id === id);
      const newList = [...category];
      newList.splice(findIndex, 1, categoryFake);
      setCategory(newList);
    } catch (error) {
      console.log(error.response)
    }
  }

  //loading
  const onHandleLoading = (status) => {
    setLoading(status)
  }




  // list Order
  useEffect(() => {
    const listOrder = async () => {
      try {
        const { data: order } = await orderAPI.getAll();
        setListOrder(order);
      } catch (error) {
        console.log(error);
      }
    }
    listOrder();
  }, []);

  useEffect(() => {
    const listOrderDetail = async () => {
      try {
        const { data: OrderDetail } = await orderDetailAPI.getAll();
        setOrderDetail(OrderDetail);
      } catch (error) {
        console.log(error)
      }
    }
    listOrderDetail();
  }, []);


  return (
    <Routers
      Products={searchTerm.length < 1 ? products : searchResultAdmin}
      Categories={category}
      Blog={blog}
      Signin={handleSignIn}
      Logout={handleLogout}
      userProfile={userProfile}
      Order={listOrder}
      listOrderDetail={listOrderDetail}
      onRemoveProduct={handleRemoveProduct}
      onAddProduct={handleAddProduct}
      onEditProduct={handleEditProduct}
      onRemoveCategory={handleRemoveCategory}
      onAddCategory={handleAddCategory}
      onEditCategory={handleEditCategory}
      searchTerm={searchTerm}
      searchKeyWords={OnHandleSearch}
      PaginationProduct={searchTerm.length < 1 ? currentProduct : searchResultWebsite}
      productPerPage={productPerPage}
      paginate={paginate}
      handleLoading={onHandleLoading}
    />
  );

}
export default App;







