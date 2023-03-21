import { Btn } from "./Button.styled";

export default function Button({onClick, disabled}) {
    return <Btn type='button' onClick={onClick} disabled={disabled}>Load more</Btn>
} 