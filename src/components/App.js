import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UsersList from './UsersList';

const App = () => {
	const [resource, setResource] = useState('posts');

	return (
		<div style={{ margin: '3rem' }}>
			<div style={{ marginBottom: '2rem' }}>
				<button onClick={() => setResource('posts')}>Posts</button>
				<button onClick={() => setResource('todos')}>Todos</button>
			</div>
			<div style={{ margin: '1rem' }}>
				<ResourceList
					resource={resource}
				/>
			</div>
			<div style={{ margin: '1rem' }}>
				<UsersList />
			</div>

		</div>
	);
}

export default App;