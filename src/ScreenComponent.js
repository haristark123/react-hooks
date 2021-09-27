import { useScreen } from "./useScreen";

const ScreenComponent=()=>{
    const value=useScreen()
    return (
        <div>
            <h1>ScreenComponent</h1>
            <h2>we are in {value} screen</h2>
        </div>)
}
export default ScreenComponent;