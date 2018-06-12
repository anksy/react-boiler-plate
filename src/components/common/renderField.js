import React, { Component } from 'react';
import { FormGroup, Label, Input, Col, FormFeedback, FormText } from 'reactstrap';

class RenderField extends Component {
  
    render(){   
        const { button,input, readOnly,label, labelClass, hintText , type, placeholder, meta: { touched, error } ,sm,md,lg,xs}  = this.props; 
        let formgroup = <div>
            <FormGroup>
            {label && <Label className={labelClass} for={input.name}>{label}</Label>}
            <Input
                invalid={touched && error ? true : undefined}
                {...input}
                type={type ? type : "text"}
                id={input.name}
                placeholder={placeholder}
                readOnly={readOnly} />
            {button}
                {touched && error && <FormFeedback >{error}</FormFeedback>}
                {hintText && <FormText>{hintText}</FormText>}
           </FormGroup>
            
        </div>

        if(!(md||lg||sm||xs)) return formgroup
        else return (<Col md={md} lg={lg} xs={xs} sm={sm||12}>{formgroup}</Col>);
    }
    
}

export default RenderField;