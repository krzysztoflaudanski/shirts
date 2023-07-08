import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './OptionColor.module.scss'

const OptionColor = props => {
    return (
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
    )
}

export default OptionColor;