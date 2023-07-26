import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './OptionSize.module.scss'

const OptionSize = props => {

    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Size</h3>
            <ul className={styles.choices}>
                {props.sizeName.map(item => <li key={item}><button onClick={() => props.setCurrentSize(item)}
                    type="button" className={clsx(item === props.currentSize && styles.active)}>{item}</button></li>)}
            </ul>
        </div>
    )

    }

OptionSize.propTypes = {
    sizeName: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
}

export default OptionSize;