import { useState } from 'react';
import { isValidEmail } from '..//helpers/Validate';


const useInputChange = (initVal = '', type = 'text', isOptional = false) => {
    const [value, setValue] = useState(initVal);
    const [isValid, setIsValid] = useState(true);
    const [errMsg, setErrMsg] = useState(isOptional ? '' : 'Nội dung nhập vào không được trống!');

    const onChangeText = (text) => {
        setValue(text);
        if (!isOptional && text.length == 0) {
            setErrMsg('Nội dung nhập vào không được trống!')
        } else if (type == 'email' && !isValidEmail(text)) {
            setIsValid(false);
            setErrMsg('Định dạng email không đúng!')
        } else {
            setErrMsg('')
            type == 'email' && setIsValid(true)
        }
    }

    return {
        value,
        onChangeText,
        isValid,
        errMsg,
    }
}

export default useInputChange