import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import {useState} from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm'


const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
 
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name)
  
  const prepareColorClassName = (color) => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }
  
  const getPrice = () => {
    const priceIndex = props.sizes.find(element => element.name === currentSize);
    const price = props.basePrice + priceIndex.additionalPrice;
    return price;
  }

  function summary(e) {
    e.preventDefault();
   console.log('Summary');
   console.log('==============');
   console.log('Name:', props.name,'shirt');
   console.log('Price:', getPrice());
   console.log('Size:', currentSize);
   console.log('Color:', currentColor);
  }

  return (
    <article className={styles.product}>
      
        <ProductImage name={props.name} color={currentColor}/>
        <ProductForm getPrice={getPrice} setCurrentSize={setCurrentSize} currentSize={currentSize} setCurrentColor={setCurrentColor} 
        prepareColorClassName={prepareColorClassName} currentColor={currentColor} summary={summary} sizes={props.sizes} colors={props.colors} />
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired
}

export default Product;