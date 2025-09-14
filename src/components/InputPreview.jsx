import { useState } from "react";
import Card from "./Card";

function InputPreview(){
    // یک state برای نگهداری مقادیر استفاده میکنیم
    // مقدار اولیه آن یک رشته خالی است

    const [inputValue, setInputValue] = useState('');// inputValue = state variable, setInputValue= updater function of inputValue.

    function handleInputChange(event){
        setInputValue(event.target.value.trim());

    }
    return(
        <div className="card">
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="اینجا تایپ کنید"/>
            <hr />
            <h3>پیش نمایش</h3>
            <p>{inputValue}</p>
        </div>
    );
}

export default InputPreview;