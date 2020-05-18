import React ,{Component} from 'react'
import Input from '../../components/UI/Input/Input'
import classes from './Contactdata.module.css';
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinner'
 class ContactData extends Component {
state={
      orderForm:{
        name:{
        elementType:'input',
        elementConfig:{
            type:'text',
            placeholder:'Your name'
        },
        validation:{
            required:true
   
           },
        value:'',
        touched:false,
         valid:false
    },
    email:{
        elementType:'input',
        elementConfig:{
            type:'email',
            placeholder:'Your Email'
        },
        validation:{
         required:true

        },
        value:'',
         touched:false,
         valid:false
    },
    street:{
        elementType:'input',
        elementConfig:{
            type:'text',
            placeholder:'Your Street '
        },
        validation:{
            required:true
   
           },
        value:'',
        touched:false,
         valid:false
    },
    zipcode:{
        elementType:'input',
        elementConfig:{
            type:'text',
            placeholder:'Your ZIPCODE '
        },
        validation:{
            required:true,
            maxLength:6,
            minLength:4
   
           },
        value:'',
         touched:false,
        valid:false
        
    },
    country:{
        elementType:'input',
        elementConfig:{
            type:'text',
            placeholder:'Your Country '
        },
        validation:{
            required:true
   
           },
        value:'',
        touched:false,
         valid:false
    },
    mob:{
        elementType:'input',
        elementConfig:{
            type:'number',
            placeholder:'Your Mob'  
        },
    
    validation:{
        required:true,
        maxLength:10,
            minLength:10

       },
    value:'',
    touched:false,
    valid:false

    },
    deliveryType:{
        elementType:'select',
        elementConfig:{
           options:[
               {value:'fastest' , displayValue:'Fastest' },
               {value:'cheapest' , displayValue:'Cheapest' }
           ]
        },
        value:'Fastest',
        valid:true,
        validation:{}
    },
},
    formIsValid:false,
    ingredients:null,
    totalPrice:0,
    loading:false
}

inputChangedHandler=(event ,identifier)=>
{
    console.log('InputHandler' ,event.target.value);
const updatedOrderForm ={
    ...this.state.orderForm
}

console.log('UpdateOrderForm' , updatedOrderForm)
const updatedFormElement = {
    ...updatedOrderForm[identifier]
}
updatedFormElement.value=event.target.value;
updatedFormElement.valid=this.isValidityCheck(updatedFormElement.value,
    updatedFormElement.validation)
updatedFormElement.touched=true;
console.log('Touched' , updatedFormElement.touched)
updatedOrderForm[identifier]=updatedFormElement
let formIsValid =true
for(let identifier in updatedOrderForm)
    {
   formIsValid=updatedOrderForm[identifier].valid && formIsValid;
    }
    this.setState({orderForm:updatedOrderForm ,formIsValid:formIsValid})
}
isValidityCheck=(value,rules)=>{
    let isValid=true;
    if(!rules)
    {
        return true;
    }
    if(rules.required)
    {
        isValid=value.trim() !== ''&&isValid;
    }
    if(rules.minLength)
    {
        isValid=value.length>=rules.minLength &&isValid;
    }
    if(rules.maxLength)
    {
        isValid=value.length<=rules.maxLength &&isValid;
    }
    return isValid;
}

homePage=()=>{
    this.props.history.push('/lunch-items')
}

componentDidMount()
{
    let price=0;
    const query = new URLSearchParams(this.props.location.search)
    const ingredients ={};
    for (let param of query.entries())
    {
if(param[0]==='price')
{
    price=param[1]
}
else {
    ingredients[param[0]]= +param[1]

}
    }
    this.setState({ingredients:ingredients , totalPrice:price})
}

orderFormHandler=(event)=>{
    event.preventDefault();

    const formData = {};
    for(let identifier in this.state.orderForm)
    {
        formData[identifier]=this.state.orderForm[identifier].value;

    }
    console.log('formData' ,formData);
    this.setState({loading:true})
 const order={
    ingredients:this.state.ingredients,
    totalPrice:this.state.totalPrice,
    form:formData

}
console.log('Order Object' , order)
axios.post('/orders.json' ,order)
.then(res=>{
    console.log('Data Submittted' , res);
    this.setState({loading:false})
    this.props.history.push('/')
})

}
 render()
     {
const formArrayElement =[];
for(let key in this.state.orderForm)
{
       formArrayElement.push({
        id:key,
        config:this.state.orderForm[key]
    })
}
let form =(<form onSubmit={this.orderFormHandler}>
    {formArrayElement.map(formElement=>(
        <Input key={formElement.id}
         elementType={formElement.config.elementType}
         elementConfig={formElement.config.elementConfig}
         value={formElement.config.value}
         inValid={!formElement.config.valid}
         shouldValidated ={formElement.config.validation}
         touched={formElement.config.touched}
         changed={(event)=>this.inputChangedHandler(event ,
            formElement.id)}
        />
    ))}
     <button className={classes.Back} onClick={this.homePage}>
         Back</button> 
   <button className={classes.Order} disabled={!this.state.formIsValid}>Order</button>
   </form>);
   if(this.state.loading)
   {
       form=<Spinner/>
   }

return (
             <div className={classes.Contactdata}>
             <h3 style={{color:"blue"}}>Enter Your Contact Details</h3>
            {form}
             </div>
         )

     }
 }

 export default ContactData;