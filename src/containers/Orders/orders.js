import React, { Component } from 'react'
import axios from '../../axios-order'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions/Index'

//let ingredients=[];
let totalPrice = [];
let form = [];
var tifOptions = [];
class Orders extends Component {
    state =
        {
            orders: [],
            ingredients: []
        }
    componentDidMount() {
        this.props.onFetchOrders()
        // const fetchData=[]
        // axios.get('https://lunch-app-cf664.firebaseio.com/orders.json')
        // .then(res=>{
        //     for(let key in res.data)
        //     {
        //       fetchData.push({  ...res.data[key], 
        //         id:key})
        //     }
        //     this.setState({orders:fetchData})
        // })

        //  const myOrder={}

    }
    componentDidUpdate() {
        console.log(this.state.orders)
        // this.props.orders.map(order=>{
        //     return ( ingredients.push(order.ingredients),
        //      totalPrice.push(order.totalPrice),
        //      form.push(order.form)
        //     )

        //  })
    }

    static getDerivedStateFromProps(nextprops, state) {
        if (nextprops.orders !== state.orders && nextprops.orders[0]) {
            return {
                orders: nextprops.orders[0],
                ingredients: nextprops.orders[0].ingredients
            }
        }
        return null;
    }

    tifOptions = Object.keys(this.state.ingredients).forEach(function (key) {
        return <li value={key}>{this.state.ingredients[key]}</li>
    });

    render() {


        console.log("here",tifOptions)


        return (

            <div>
                <ul>
                    {tifOptions}
                </ul>

            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        orders: state.ordersReducers.orders,
        loading: state.ordersReducers.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actionTypes.fetchOrders())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Orders, axios);