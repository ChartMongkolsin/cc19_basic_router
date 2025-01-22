import usePongStore from "../store/pongStore"

// rfce
function EasyZustand() {
    // javascript
    // Step 1 Create Store


    // Step 2 Use Store
    const firstName = usePongStore((state) => state.firstName)
    const address = usePongStore((state) => state.address)
    console.log(address.street)

    return <div>EasyZustand</div>;
}
export default EasyZustand;