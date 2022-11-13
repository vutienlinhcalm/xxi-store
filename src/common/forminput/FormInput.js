import {useState} from "react";
const FormInput = (props)=>{
    const [focused, setFocused] = useState(false)
    const handlefocus = (e)=>{
        setFocused(true);
    }
    const {onChage,errormessage,id,...inputProps}=props;
    return (
        <div className="Form_group">
            <input
             {...inputProps} onChange={onChage}
              onBlur={handlefocus} 
              onFocus={()=>inputProps.name === "confirmpassword" && setFocused(true)}
              focused={focused.toString()}>

              </input>
            <span>{errormessage}</span>
        </div>
    )
}
export default FormInput;