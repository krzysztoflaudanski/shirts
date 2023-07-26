import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (<button className={clsx(styles.button, props.className)} onClick={props.onClick}>{props.children}</button>);
};

Button.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default Button;