import PropTypes from 'prop-types';
import styles from './ProductForm.module.scss'
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = (props) => {

    return (
        <div>
            <header>
                <h2 className={styles.name}>{props.title}</h2>
                <span className={styles.price}>{props.getPrice}$</span>
            </header>
            <form>
                <OptionSize sizes={props.sizes} setCurrentSize={props.setCurrentSize} currentSize={props.currentSize} />
                <OptionColor colors={props.colors} setCurrentColor={props.setCurrentColor} prepareColorClassName={props.prepareColorClassName} currentColor={props.currentColor} />
                <Button className={styles.button} onClick={props.summary}>
                    <span className="fa fa-shopping-cart" />
                </Button>
            </form>
        </div>
    )
}

ProductForm.propTypes = {
    getPrice: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
    })).isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
}


export default ProductForm;