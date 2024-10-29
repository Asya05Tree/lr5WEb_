// ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useCurrency } from '../contexts/CurrencyContext';
import styles from '../styles/ProductDetail.module.css';
import formStyles from '../styles/Forms.module.css';

function ProductDetail({ product, onBack }) {
  const { isDarkMode } = useTheme();
  const { user } = useUser();
  const { language } = useLanguage();
  const { currency, convertPrice } = useCurrency();

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const savedComments = localStorage.getItem(`comments-${product.id}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [product.id]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim() && user) {
      const updatedComments = [...comments, { user: user.username, text: newComment }];
      setComments(updatedComments);
      localStorage.setItem(`comments-${product.id}`, JSON.stringify(updatedComments));
      setNewComment('');
    }
  };

  return (
    <div className={`${styles['product-detail']} ${isDarkMode ? 'dark' : 'light'}`}>
      <h2>{product.name[language]}</h2>
      <p>{language === 'uk' ? 'Бренд' : 'Brand'}: {product.brand}</p>
      <p>{language === 'uk' ? 'Ціна' : 'Price'}: {convertPrice(product.price)} {currency}</p>
      <p>{product.description[language]}</p>
      
      <h3>{language === 'uk' ? 'Коментарі' : 'Comments'}</h3>
      {comments.map((comment, index) => (
        <div key={index} className={styles['comment']}>
          <strong>{comment.user}:</strong> {comment.text}
        </div>
      ))}
      
      {user && (
        <form onSubmit={handleSubmitComment} className={styles['comment-form']}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder={language === 'uk' ? 'Додати коментар...' : 'Add a comment...'}
            className={formStyles.input}
          />
          <button 
            type="submit" 
            className={formStyles.button}
          >
            {language === 'uk' ? 'Надіслати' : 'Submit'}
          </button>
        </form>
      )}
      
      <button 
        onClick={onBack} 
        className={`${styles['back-button']} ${formStyles.button}`}
      >
        {language === 'uk' ? 'Назад' : 'Back'}
      </button>
    </div>
  );
}

export default ProductDetail;