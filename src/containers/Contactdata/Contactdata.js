import React ,{Component} from 'react'
import Input from '../../components/UI/Input/Input'
 class ContactData extends Component {
state={
    ingredients:null,
    totalPrice:0
}

componentWillMount()
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
     render()
     {
         console.log('hii Ingredients' , this.state.ingredients)
         console.log('hii totalPrice' , this.state.totalPrice)
         return (
             <div>
             <div>HII WElCome</div>
             <Input/>
             </div>
         )

     }
 }

 export default ContactData;