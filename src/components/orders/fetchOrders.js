import React from 'react'
import classes from './fetchOrders.module.css'

const fetchOrders=(props)=>{
    const ingredients=[];
    const formData=[];
    console.log('Ingredients' , props.ingredients)
    console.log('TotalPrice' , props.price)
    console.log('Form' , props.form)
    for(let ingName in props.ingredients)
    {
      ingredients.push({
        name:ingName,
        amounnt:props.ingredients[ingName]
      })

}
formData.push(props.form);
console.log('formData'  ,formData)
const ingredientsData =
  <div className={classes.Dropdown} style={{marginRight:'250px' }}>
  <span style={{color:'blue' }}>Ingredients</span>
  <div className={classes.DropdownContent}>
 { ingredients.map(ings=>(
    <ul key={ings.name}>
<li>{ings.name} {ings.amounnt}</li>
    </ul>
    ))}
  </div>
</div>



const formDetail=formData.map(form=>{
  return (
  
  <tr key={form.name}>
  <td key={form.name}>{form.name}</td>
  <td>{form.email}</td>
  <td>{form.street}</td>
  <td>{form.zipcode}</td>
  <td>{form.mob}</td>
  <td>{form.deliveryType}</td> 
  <td>{props.price}</td>
  <td>{ingredientsData}</td>
 
  </tr>
  ) 
})

return (
    <div >
        <table className={classes.Table}>
    <thead className={classes.Color}>
      <tr >
        <th>Name</th>
        <th>Email</th>
        <th>Street</th>
        <th>ZipCode</th>
        <th>Mob</th>
        <th>Delivery-Type</th>
        <th>TotalPrice</th>
       
       
        </tr>
       </thead>
      <tbody>
        
          
        {formDetail}
        <tr>

        </tr>
  
    </tbody>
  </table>
  

    </div>
)
}
export default fetchOrders;