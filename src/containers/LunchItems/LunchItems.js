import React, { Component } from 'react'
import Items from '../../components/LunchBuilder/Items/Items'
import ReactAux from '../../hoc/ReactAux/ReactAux'
import classes from './LunchItems.module.css'
import {connect} from 'react-redux'
import Lunch from '../../components/Lunch/Lunch';
import * as lunchBuilderAction from '../../store/actions/Index'
import axios from '../../axios-order'
import Modal from '../../components/UI/Modal/Modal'
import NavBar from '../../components/NavBar/NavBar'
import OrderSummary from '../../components/Lunch/OrderSummary/OrderSummary';

//import NavBar from '../../components/NavBar/NavBar'
let INGREDIENT_PRICES = {}
class LunchItems extends Component { 
    state = {
        ingredients: {},
        totalPrice: 0,
        show:false,
        purchasable:false

    }
    componentDidMount() {
        axios.get('/ingredients.json')
            .then(res => {
                console.log('res', res.data);
                this.setState({ ingredients: res.data });
                console.log('ingredients', this.state.ingredients)
            })
            axios.get('/totalPrice.json')
            .then(res=>{
                INGREDIENT_PRICES=res.data;
                console.log('Price' , INGREDIENT_PRICES);
            })
    }
    addIngredientHandler = (type) => {
        // console.log('Hi'  ,this.state.ingredients[type]);
        const oldCount = this.state.ingredients[type];   //type of ingredient are 
        const updatedCount = oldCount + 1;               //in ingredients
        // console.log('Ingredients' , this.state.ingredients)
        const updatedIngredients = {
            ...this.state.ingredients
        }
        
        updatedIngredients[type] = updatedCount;
        console.log('UpdateIngredients' , updatedIngredients[type]);
        if(updatedIngredients[type]>0)
        {
            this.setState({show:true})
        }
        const price=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+price;
        console.log('hii Type', updatedIngredients);
        this.setState({totalPrice:newPrice , ingredients: updatedIngredients })
        const data = this.state.ingredients;
        console.log('hii Data', data)
}
    removeIngredientHandler = (quantity) => {
        console.log("quantity", this.state.ingredients[quantity.name])
        const oldCount = this.state.ingredients[quantity.name];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        console.log('hii updatedcount', updatedCount)

        const updatedIngredients = {
            ...this.state.ingredients
                }
        //console.log('UpdatedIngredients' ,  updatedIngredients)
           const price = INGREDIENT_PRICES[quantity.name];
           const oldPrice = this.state.totalPrice;
           const newPrice= oldPrice-price;
        updatedIngredients[quantity.name] = updatedCount;
        if(newPrice===0)
        {
            this.setState({show:false})
        }
        console.log('Data' , updatedIngredients[quantity.name]);
         this.setState({ totalPrice:newPrice , ingredients: updatedIngredients })
        console.log('Less' , updatedIngredients[quantity.name]);
    }

    purchaseHandler=()=>{
        this.setState({purchasable:true})
    }
purchaseCancelledHandler=()=>{
this.setState({purchasable:false})
}
purchaseContinuedHandler=()=>{
   const queryParam =[];
   for(let i in this.state.ingredients)
   {
       queryParam.push(encodeURIComponent(i)+'='+ encodeURIComponent(this.state.ingredients[i]))
    console.log('queryParam' , queryParam);
    }
    queryParam.push('price=' +this.state.totalPrice);
    const queryString = queryParam.join('&')
    console.log('queryString' , queryString);
    this.props.history.push({
        pathname: '/contact-data',
        search: '?' +queryString
        
      })
      
}
    render() {
    //    console.log("State", this.state.ingredients)
    //     console.log("show", this.state.show)
    //     console.log("totalPrice", this.state.totalPrice);
        console.log('Reducer Ings' ,this.props.ings);
        console.log('Add Ings' ,this.props.onIngredientAdd);

        return (
             <ReactAux>
                <NavBar/>
                <div className={classes.Link}>
                <Items ingredientsAdd={this.props.onIngredientAdd}  />
              </div>
            <Lunch ingredients={this.props.ings}
               removeIngredientHandler={this.props.onIngredientRemoved}
               price={this.state.totalPrice}
               show={this.state.show}
               orderd={this.purchaseHandler}  />
               <Modal show={this.state.purchasable}>
                <OrderSummary ingredients={this.props.ings}
                totalPrice={this.state.totalPrice}
                purchaseCancelled={this.purchaseCancelledHandler}
                purchaseContinued={this.purchaseContinuedHandler}/>
               </Modal>
            </ReactAux>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        ings:state.lunchBoxReducers.ingredients

    }
   

}
const mapDispatchToProps=(dispatch)=>{
    return {
        onIngredientAdd:(ingName)=>
            dispatch(lunchBuilderAction.addIngredient(ingName)),
            onIngredientRemoved:(ingName)=>
            dispatch(lunchBuilderAction.removeIngredient(ingName))
            

        
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(LunchItems);