import React, { Component } from 'react'
import Items from '../../components/LunchBuilder/Items/Items'
import ReactAux from '../../hoc/ReactAux/ReactAux'
import classes from './LunchItems.module.css'
import Lunch from '../../components/Lunch/Lunch';
import axios from '../../axios-order'
//import NavBar from '../../components/NavBar/NavBar'
let INGREDIENT_PRICES = {}
class LunchItems extends Component {
    state = {
        ingredients: {},
        totalPrice: 0,
        show:false

    }

    componentDidMount() {
        axios.get('https://lunch-app-cf664.firebaseio.com/ingredients.json')
            .then(res => {
                console.log('res', res.data);
                this.setState({ ingredients: res.data });
                console.log('ingredients', this.state.ingredients)
            })
     
            axios.get('https://lunch-app-cf664.firebaseio.com/totalPrice.json')
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



    render() {

        console.log("State", this.state.ingredients)
        console.log("show", this.state.show)
        console.log("totalPrice", this.state.totalPrice);

        return (

            <ReactAux>
                <div className={classes.Link}>

                    <Items ingredientsAdd={this.addIngredientHandler}
                   
                    />
                </div>
                <Lunch ingredients={this.state.ingredients}
                    removeIngredientHandler={this.removeIngredientHandler}
                    price={this.state.totalPrice}
                    show={this.state.show}
                    
                />
            </ReactAux>
        )

    }
}

export default LunchItems;