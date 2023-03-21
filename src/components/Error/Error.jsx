import { Android } from "react-bootstrap-icons";
import { ErrorMsg, ErrorWrap } from "./Error.styled";

export default function Error({msg}) {
    return <ErrorWrap>
        <Android size={52}/>
        <ErrorMsg>{msg}</ErrorMsg>
    </ErrorWrap>
}