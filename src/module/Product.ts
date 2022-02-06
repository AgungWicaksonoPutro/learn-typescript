import Asus from "./Asus";
import Mackbook from "./MackBook";


let asus = new Asus("Zenbook", true, true);
console.log(asus);
asus.a();

let macBook = new Mackbook(2017, false, false);
console.log(macBook);
macBook.b();
