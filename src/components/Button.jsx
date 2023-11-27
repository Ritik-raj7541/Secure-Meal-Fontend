import React from 'react'

const Button = React.forwardRef((props) => {
    // event.preventDefault();
    // function handleOnclick(e){
    //     props.handleOnclick
    //     console.log(e.target.value);
    // }

    return (
        <button type={props.type} form={props.form}  className={`inline-flex items-center px-2 py-2 ${props.className} hover:bg-gray-300 text-sm font-medium rounded-md shadow-sm`} onClick={props.onClick} value={props.value} >
            {props.value}
        </button>
    )
})

export default Button