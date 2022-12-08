import { useState } from "react";

export const useForm = ( initialState = {} ) => {

  const [values, setValues] = useState( initialState )

  const reset = () => setValues( initialState );

  const handleInputChange = ( e ) => {
    setValues({
      ...values,
      [ e.target.name ]: e.target.value
    })
  }

  const handleDateChange = ( e, changing ) => {
    setValues({
      ...values,
      [changing]: e
    })
  }

  return [ values, setValues, handleInputChange, handleDateChange, reset ];
}