// import productsFromFile from '../../data/products.json'
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Slide, ToastContainer } from 'react-toastify';
import config from '../../data/config.json';
import { ClipLoader } from 'react-spinners';

import { useTranslation } from 'react-i18next';
import SortButtons from '../../components/home/SortButtons';
import FilterButtons from '../../components/home/FilterButtons';
import Product from '../../components/home/Product';

import styles from '../../css/HomePage.module.css';
import CarouselGallery from '../../components/home/CarouselGallery';
import { Category } from '../../models/Category';
import { Product as ProductModel } from '../../models/Product';


function HomePage() {

  const [products, setProducts] = useState<ProductModel[]>([]);     // väljakuvatav seis
  const [dbProducts, setDbProducts] = useState<ProductModel[]>([]); // andmebaasi seis
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setLoading] = useState(true);
  const { t } = useTranslation();

  // const overrideCSS = () => {
  //    CSSProperties = {
  //     display: "block",
  //     margin: "0 auto",
  //     borderColor: "red",
  //   }
  // };

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then((data : Category[]) =>setCategories(data || []))

    fetch(config.productsUrl)
      .then(res => res.json())
      .then((data: ProductModel[]) => {
        data = data.filter(product => product.active === true);
        setProducts(data || []);    // seda hakkan hiljem muutma
        setDbProducts(data || []);  // seda  hiljem ei muuda
        setLoading(false)
      })
  }, []);

  // if (isLoading) {
  //   return < Spinner variant="info" />
  // }



  return (
    <div>
      {isLoading && <ClipLoader
        color={('979797')}
        loading={isLoading}
        size={35}
        speedMultiplier={1}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
      <div className='bold-heading'>{t('products')}</div>
      <div className='bold-heading'>{t('total')}: {products.length}</div><br />
      
      <CarouselGallery/>
      
      <SortButtons
        products={products}
        setProducts={setProducts}
      />

{t('product-category')}:
      <FilterButtons
        dbProducts={dbProducts}
        setProducts={setProducts}
        categories={categories}
      />

      {/* {categories.map((category, index) =>
        <Button key={index} variant="light" size="sm" onClick={() => fiterByCategory(category.name)}>
          {category.name}
        </Button>
      )} */}

      <br /><br />
      <div className={styles.grid_container}>
        {products.map((product, index) =>
          <Product product={product} key={index} />
        )}
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        transition={Slide}
      />
    </div>
  )
}

export default HomePage