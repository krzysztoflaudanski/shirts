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
                <span className={styles.price}>{props.price}$</span>
            </header>
            <form>
                <OptionSize setCurrentSize={props.setCurrentSize} currentSize={props.currentSize} sizeName={props.sizeName}/>
                <OptionColor colors={props.colors} setCurrentColor={props.setCurrentColor} prepareColorClassName={props.prepareColorClassName} currentColor={props.currentColor} />
                <Button className={styles.button} onClick={props.summary}>
                    <span className="fa fa-shopping-cart" />
                </Button>
            </form>
        </div>
    )
}

ProductForm.propTypes = {
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    sizeName: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
}


export default ProductForm;