import { useState } from "react"

const useInput = function (){
    const [value, setValue] = useState("")

    function onChange(e){
        setValue(e.target.value)
    }
    return {value, onChange}
}

export default useInput