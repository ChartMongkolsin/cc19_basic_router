import { create } from "zustand";
// Step 1 Create Store
const pongStore = () => ({
  firstName: "phongphat",
  lastName: "japhichom",
  address: { street: "1234", zipcode: "567" },
});
//สร้าง object = create
const usePongStore = create(pongStore);
export default usePongStore;

