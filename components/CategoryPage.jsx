// CategoryPage.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../contexts/CurrencyContext';
import styles from '../styles/CategoryPage.module.css';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';

const CategoryPage = () => {
  const { language } = useLanguage();
  const { currency, convertPrice } = useCurrency();
  const { category } = useParams();

  const filteredProducts = category 
    ? productsData.products.filter(product => product.category === category)
    : productsData.products;

  return (
    <div className={styles['product-list-container']}>
      <h2 className={styles['product-list-title']}>
        {language === 'uk' ? 'Товари' : 'Products'}
        {category && ` - ${categoriesData.categories.find(cat => cat.id === category)?.name[language]}`}
      </h2>
      <TransitionGroup className={styles['product-list']}>
        {filteredProducts.map(product => (
          <CSSTransition
            key={product.id}
            timeout={300}
            classNames="product"
          >
            <div className={styles['product-item']}>
              <h3>{product.name[language]}</h3>
              <p>{product.brand}</p>
              <p>{product.description[language]}</p>
              <p>{convertPrice(product.price)} {currency}</p>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default CategoryPage;
