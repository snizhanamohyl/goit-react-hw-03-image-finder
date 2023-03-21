import PropTypes from 'prop-types'; 
import { Btn } from "./Button.styled";

export default function Button({onClick}) {
    return <Btn type='button' onClick={onClick}>Load more</Btn>
} 

Btn.propTypes = {
    onClick: PropTypes.func.isRequired,
}