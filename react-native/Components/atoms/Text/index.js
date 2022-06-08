import React from "react";
import { FieldCustomText } from "./styles";

export const FieldText = ({children, ...props}) =>{
   return <FieldCustomText {...props} >{children}</FieldCustomText>
}