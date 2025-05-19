import { useState } from 'react';
import FetchNationality from './fetchNationality';

function Count() {
// Initialise state with a value of 0
const [count, setCount] = useState(0);
// Function to handle button click
const increment = () => {
setCount((prevCount) => prevCount); // Update state to count + 1
};
return (
<div>
<h1>Predict: {count}</h1> {/* Display the current count */}
<button onClick={increment}>prediction</button> {/* Button to increase count
*/}
</div>
);
}
export default Predict;