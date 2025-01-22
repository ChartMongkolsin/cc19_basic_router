import { create } from "zustand";
// Step 1 Create Store
const pongStore = (set) => ({
  firstName: "Chart",
  lastName: "Mongkolsin",
  address: { street: "1234", zipcode: "567" },
  profile: ['Chart', 'Monkgolsin'],
  products: [
    { id: 1, title: 'Asus', price: 5000 },
    { id: 2, title: 'MSI', price: 40000 }
  ],
  number:5,
  actionIncrease:()=>{
    // console.log('Easy!!!!')
    // set เรียกใช้ function number obj = element . obj + ex.set((prv)=>({number:prv.number+1}))
    set((prv)=>({number:prv.number+1}))
  },
  actionDecrease:(newvalue)=>{
    set((state)=>({number:Math.max(0,state.number-1)}))
  },
  actionMultiple:()=>{
    set((state)=>({number:state.number*2}))
  },
  actionDivied:()=>{
    set((state)=>({number:state.number/2}))
  },
});
//สร้าง object = create
const usePongStore = create(pongStore);
export default usePongStore;

