import MuiButton from '@material-ui/core/Button';

const Button = (props) => {
    const { onClick, text, variant, color } = props;
    return (
        <MuiButton variant={variant} color={color} onClick={onClick}>{text}</MuiButton>
    );
};

export default Button;