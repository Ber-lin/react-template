import React, {useState} from 'react';
import './App.less';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>Hello World！！{count}</div>
			<button onClick={() => setCount(count + 1)}>add</button>
		</>
	);
}

export default App;
