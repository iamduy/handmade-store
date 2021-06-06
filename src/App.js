import React, { useEffect, useState } from 'react';
import Routers from './Routers/index';
import productAPI from './api/productAPI'
import categoryAPI from './api/categoryAPI'
import blogAPI from './api/blogAPI'
function App() {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [blog, setBlog] = useState([]);


  // danh sách blog
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

  // danh sách sản phẩm
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


  //thêm sản phẩm
  const handleAddProduct = async (product, fakeProduct) => {

    try {
      await productAPI.add(product);
      setProducts([...products, fakeProduct]);
    } catch (error) {
      console.log(error.response);
    }
  }



  // sửa sản phẩm
  const handleEditProduct = async (product, fakeProduct) => {

    try {
      await productAPI.update(fakeProduct._id, product);
      const findIndex = products.findIndex(items => items._id === fakeProduct._id);
      console.log(findIndex);
      const newList = [...products];
      newList.splice(findIndex, 1, fakeProduct);
      setProducts(newList);
    } catch (error) {
      console.log(error.response)
    }
  }

  // xóa sản phẩm
  const handleRemoveProduct = async (id) => {
    let isConfirm = window.confirm('Do you want delete ?')
    if (isConfirm) {
      try {
        const newProd = products.filter(item => item._id !== id);
        setProducts(newProd);
        await productAPI.remove(id);
      } catch (error) {
        console.log(error);
      }
    }
  }

  // list category
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

  // xóa category
  const handleRemoveCategory = async (id) => {
    let isConfirm = window.confirm('Do you want delete ?')
    if (isConfirm) {
      try {
        const newList = category.filter(items => items._id !== id);
        setCategory(newList);
        await categoryAPI.remove(id);
      } catch (error) {
        console.log(error.response.data.error)
      }
    }
  }

  // thêm category
  const handleAddCategory = async (cate, fakeCategory) => {
    try {
      await categoryAPI.add(cate);
      setCategory([...category, fakeCategory]);
    } catch (error) {
      console.log(error.response)
    }
  }

  const handleEditCategory = async (cate, fakeCate) => {
    try {
      await categoryAPI.update(fakeCate._id, cate);
      const findIndex = category.findIndex(items => items._id === fakeCate._id);
      const newList = [...category];
      newList.splice(findIndex, 1, fakeCate);
      setCategory(newList);
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <Routers
      Products={products}
      Categories={category}
      Blog={blog}
      onRemoveProduct={handleRemoveProduct}
      onAddProduct={handleAddProduct}
      onEditProduct={handleEditProduct}
      onRemoveCategory={handleRemoveCategory}
      onAddCategory={handleAddCategory}
      onEditCategory={handleEditCategory}
    />
  );

}
export default App;







