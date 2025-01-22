import usePongStore from "../store/pongStore"

// rfce
function EasyZustand() {
    // javascript
    const hdlClick = () => {
        actionDecrease()
    }

    // Step 2 Use Store
    const firstName = usePongStore((state) => state.firstName)
    const address = usePongStore((state) => state.address)
    const profile = usePongStore((state) => state.profile)
    const products = usePongStore((state) => state.products)
    const number = usePongStore((state) => state.number)
    const actionIncrease = usePongStore((state) => state.actionIncrease)
    const actionDecrease = usePongStore((state) => state.actionDecrease)
    const actionMultiple = usePongStore((state) => state.actionMultiple)
    const actionDivied = usePongStore((state) => state.actionDivied)
    console.log(number)
    // console.log(products[1])

    return <div>
        <p>{profile[0]}</p>
        <p>{address.zipcode}</p>
        <p>{products[0].title} price :</p>
        <p className="text-8xl">{number}</p>
        <button className="bg-green-400"
            onClick={actionIncrease}
        >Increase</button>
        <button className="bg-red-400"
            onClick={hdlClick}
        >Decrease</button>
        <button className="bg-green-400"
            onClick={actionMultiple}
        >Multiple</button>
        <button className="bg-red-400"
            onClick={actionDivied}
        >Divied</button>
    </div>;
}
export default EasyZustand;