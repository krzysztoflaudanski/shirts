import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm'

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);

  const [currentSize, setCurrentSize] = useState(props.sizes[0].name)

  const getPrice = useMemo(() => {
    const priceIndex = props.sizes.find(element => element.name === currentSize);
    const price = props.basePrice + priceIndex.additionalPrice;
    return price;
  }, [props.basePrice, props.sizes, currentSize])

  const sizeName = []
  for (let item of props.sizes){
      sizeName.push(item.name)
  }

  const summary = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('==============');
    console.log('Name:', props.title);
    console.log('Price:', getPrice);
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  }

  return (
    <article className={styles.product}>

      <ProductImage name={props.name} color={currentColor} />
      <ProductForm price={getPrice} setCurrentSize={setCurrentSize} currentSize={currentSize} setCurrentColor={setCurrentColor}
        currentColor={currentColor} summary={summary} sizes={props.sizes} colors={props.colors} title={props.title} sizeName={sizeName}/>
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    additionalPrice: PropTypes.number
  })).isRequired,
}

export default Product;