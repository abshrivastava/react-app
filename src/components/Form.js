import React from "react";

const Form = props => (
	<form>
		{/* <input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/> */}
		<button onClick={props.getWeather}>Get Value</button>
	</form>
);

export default Form;