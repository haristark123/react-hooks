
import React from 'react'
import {useState} from 'react'

export const useCounter=(intialValue)=>{
    const [value,setValue]=useState(intialValue);
    const increment=()=>{
        return setValue(value+1)
      }
      const decrement=()=>{
        return setValue(value-1)
      }
      const reset=()=>{
          return setValue(intialValue)
      }
    return [value,increment,decrement,reset]
}