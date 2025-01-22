import { useState } from "react"

function RecapUserState() {
    const num = 5
    const [number,setNumber] = useState(4)
    const [number2,setNumber2] = useState({
        num:5
    })
    console.log(number)

    const hdlIncrease = () =>{
        setNumber((prev)=> prev+1)
        console.log('Easy,useState')
    }

    const hdlDecrease =()=>{
        setNumber((prev)=> prev-1)
    }
    /* obj:element.obj +,-,*,/ : คือ =*/
    const hdlIncrease2 =()=>{
        setNumber2((prev)=> ({num:prev.num+1}));
    }

    const hdlMultiple =()=>{
        setNumber2((prev)=> ({num:prev.num*2}));
    }

    const hdlDecrease2 =()=>{
        setNumber2((prev)=>({num:prev.num-1}))
    }

    const hdlDivide =()=>{
        setNumber2((prev)=>({num:prev.num/2}))
    }


  return (
    <div>
        <h1 className="text-8xl">{number}</h1>
        <br/>
        <button onClick={hdlIncrease} className="bg-green-500 p-2
        hover:scale-105 hover:duration-300 hover:bg-red-500
        ">Increase</button>
                <button onClick={hdlDecrease} className="bg-green-500 p-2
        hover:scale-105 hover:duration-300 hover:bg-red-500
        ">Decrease
        </button>
        <hr/>
        <p className="text-8xl">{number2.num}</p>
        <button onClick={hdlIncrease2} className="bg-green-500 p-2
        hover:scale-105 hover:duration-300 hover:bg-red-500
        ">Increase2
        </button>
        <button onClick={hdlMultiple} className="bg-green-500 p-2
        hover:scale-105 hover:duration-300 hover:bg-red-500
        ">Mutiple2
        </button>
        <button onClick={hdlDecrease2} className="bg-green-500 p-2
        hover:scale-105 hover:duration-300 hover:bg-red-500
        ">Decrease2
        </button>
        <button onClick={hdlDivide} className="bg-green-500 p-2
        hover:scale-105 hover:duration-300 hover:bg-red-500"
        >Divide</button>

    </div>
  )
}

export default RecapUserState