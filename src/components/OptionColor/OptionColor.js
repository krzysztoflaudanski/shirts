import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './OptionColor.module.scss'

const OptionColor = props => {

    const prepareColorClassName = (color) => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
      }

    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {props.colors.map(item =>
                    <li key={item}>
                        <button type="button" onClick={() => props.setCurrentColor(item)} className={clsx(prepareColorClassName(item), item === props.currentColor && styles.active)} />
                    </li>
                )}
            </ul>
        </div>
    )
}

OptionColor.propTypes = {
    colors: PropTypes.array.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired
}

export default OptionColor;