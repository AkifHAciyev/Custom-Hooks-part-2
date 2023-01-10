import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const SaveValues = () => {
	const [value, setValue] = useLocalStorage('name', '');

	return (
		<div>
			<input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
		</div>
	);
};

export default SaveValues;
