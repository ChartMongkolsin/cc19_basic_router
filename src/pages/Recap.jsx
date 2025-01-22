import React from 'react'

function Recap() {
    const obj ={
        firstName : 'Chart',
        lastName : 'Mongkolsin'
    }
    obj.address = 'BKK'

    const obj2 = {
        street : '1234',
        zipcode:'56780'

    }
    const mergeObj = {...obj,obj2}
    console.log(mergeObj);

    //console.log(obj.firstName);
    const arr = ['Chart','Mongkolsin']
    arr[2] = 'BKK'
    console.log(arr)

    /* merge รวม  */
    const arr2 = ['1234','5678']
    const mergeArr = [...arr,...arr2]
    console.log(mergeArr)

    const products = [
        {id:1,title:'Asus',price:40000},
        {id:2, title:'MSI',price:59000}
    ]
    console.log(products[1].title);

    const newProduct = {id:3, title:"Lenovo", price:2000}
    const mergeProduct = [...products,newProduct]
    console.log(mergeProduct)



  return (
    <div>Recap</div>
  )
}

export default Recap