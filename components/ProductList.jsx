// ProductList.jsx
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../contexts/CurrencyContext';
import styles from '../styles/CategoryPage.module.css';
import productsData from '../data/products.json';

function ProductList({ onProductSelect }) {
  const { language } = useLanguage();
  const { currency, convertPrice } = useCurrency();

  return (
    <div className={styles['product-list-container']}>
      <h2 className={styles['product-list-title']}>
        {language === 'uk' ? 'Наші продукти' : 'Our Products'}
      </h2>
      <div className={styles['product-list']}>
        {productsData.products.map(product => (
          <div
            key={product.id}
            className={styles['product-item']}
            onClick={() => onProductSelect(product)}
          >
            <h3>{product.name[language]}</h3>
            <p>{product.brand}</p>
            <p>{convertPrice(product.price)} {currency}</p>
            <p>{product.description[language]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
