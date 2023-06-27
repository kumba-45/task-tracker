import PropTypes from 'prop-types';
const Button = ({ title, color, onClick }) => {
    return (
        <button style={{ backgroundColor: color }} className="btn" onClick={onClick}>
            {title}
        </button>
    )

};
Button.prototype = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
}
export default Button;