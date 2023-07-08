import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './ProductForm.module.scss'
import Button from '../Button/Button';

const ProductForm = (props) => {

    console.log(props)
    return (
        <div>
            <header>
                <h2 className={styles.name}>{props.name}</h2>
                <span className={styles.price}>{props.getPrice()}$</span>
            </header>
            <form>
                <div className={styles.sizes}>
                    <h3 className={styles.optionLabel}>Size</h3>
                    <ul className={styles.choices}>

                        {props.sizes.map(item => <li key={item.name}><button onClick={() => props.setCurrentSize(item.name)} type="button" className={clsx(item.name === props.currentSize && styles.active)}>{item.name}</button></li>)}

                    </ul>
                </div>
                <div className={styles.colors}>
                    <h3 className={styles.optionLabel}>Colors</h3>
                    <ul className={styles.choices}>
                        {props.colors.map(item =>
                            <li key={item}>
                                <button type="button" onClick={() => props.setCurrentColor(item)} className={clsx(props.prepareColorClassName(item), item === props.currentColor && styles.active)} />
                            </li>
                        )}

                    </ul>
                </div>
                <Button className={styles.button} onClick={props.summary}>
                    <span className="fa fa-shopping-cart" />
                </Button>
            </form>
        </div>
    )
}
export default ProductForm;