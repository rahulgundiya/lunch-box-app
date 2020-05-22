import React,{Component} from 'react'
import axios from '../../axios-order'
class Orders extends Component {
    state=
    {
        orders:[]
    }
    componentDidMount()
    {
        const fetchData=[]
        axios.get('https://lunch-app-cf664.firebaseio.com/orders.json')
        .then(res=>{
            for(let key in res.data)
            {
              fetchData.push({  ...res.data[key], 
                id:key})
            }
            this.setState({orders:fetchData})
        })

      //  const myOrder={}
    }

    render()
    {
     return(
            <div>
              {this.state.orders.map(order=>(
                 <ul>
                     <li>{order.id}<li>{order.totalPrice}</li>

                     </li>
                 </ul>
            ))}  
        
        </div>
        )
    }

}
export default Orders;