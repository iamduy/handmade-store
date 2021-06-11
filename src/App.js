import React, { useEffect, useState } from 'react';
import Routers from './Routers/index';
import productAPI from './api/productAPI'
import categoryAPI from './api/categoryAPI'
import blogAPI from './api/blogAPI'
import Swal from 'sweetalert2'
function App() {


  const [products, setProducts] = useState([]); // state product
  const [category, setCategory] = useState([]); // state category
  const [blog, setBlog] = useState([]); // state blog

  // state search
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  //state pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(6);

  // pagination
  const indexOfLastProduct = currentPage * productPerPage; // vị trí sản phẩm cuối ở mỗi page
  const indexOfFirstProduct = indexOfLastProduct - productPerPage; // vị trí sản phẩm đầu ở mỗi page
  const pagination = [...products];
  const currentProduct = pagination.slice(indexOfFirstProduct, indexOfLastProduct)
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
      setSearchResult(newList);
    } else {
      setSearchResult(products);
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
          console.log(error.response.data.error)
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


  return (
    <Routers
      Products={searchTerm.length < 1 ? products : searchResult}
      Categories={category}
      Blog={blog}
      onRemoveProduct={handleRemoveProduct}
      onAddProduct={handleAddProduct}
      onEditProduct={handleEditProduct}
      onRemoveCategory={handleRemoveCategory}
      onAddCategory={handleAddCategory}
      onEditCategory={handleEditCategory}
      searchTerm={searchTerm}
      searchKeyWords={OnHandleSearch}
      PaginationProduct={currentProduct}
      productPerPage={productPerPage}
      totalProduct={products.length}
      paginate={paginate}
    />
  );

}
export default App;







