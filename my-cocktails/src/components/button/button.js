import MUIButton from '@material-ui/core/Button';

const Button = (props) => {
    const { onClick, text, variant, color } = props;
    return (
        <MUIButton variant={ variant } color={ color } onClick={ onClick }>{ text }</MUIButton>
    );
};

export default Button;