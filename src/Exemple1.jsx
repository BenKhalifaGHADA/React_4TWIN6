import { useState } from "react";
function Exemple1() {
 const [count, setCount] = useState(0); 
 return ( <>
<p>Vous avez cliqué {count} fois</p>
<button onClick={() => setCount(count + 1)}> Cliquez ici
</button>

 </> );
}
export default Exemple1;
