/*Categories.jsx*/ 
import React from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLanguage } from '../contexts/LanguageContext';
import styles from '../styles/CategoryPage.module.css';
import categoriesData from '../data/categories.json';
const Categories = () => {
  const { language } = useLanguage();
   return (
    <div className={styles['product-list-container']}>
      <TransitionGroup className={styles['product-list']}>
        {categoriesData.categories.map(category => (
          <CSSTransition
            key={category.id}
            timeout={500}
            classNames="item"
          >
            <div className={styles['product-item']}>
              <Link to={`/category/${category.id}`} style={{ textDecoration: 'none' }}>
                <h3>{category.name[language]}</h3>
              </Link>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
export default Categories;