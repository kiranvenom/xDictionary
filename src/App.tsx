import { ChangeEvent, useState } from 'react';
import meanings from './data/data';

const App = () => {
	const [search, setsearch] = useState('');
	const [found, setfound] = useState('');

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setsearch(e.target.value);
	};

	const handleClick = () => {
		const allWords = meanings.find((meaning) => {
			return meaning.word.toLowerCase() == search.toLowerCase();
		});

		if (allWords) {
			setfound(allWords?.meaning);
		} else {
			setfound('notFound');
		}

		setsearch('');
	};

	return (
		<div>
			<h1>Dictionary App</h1>
			<div className='search'>
				<input
					type='text'
					placeholder='Search for a word...'
					onChange={handleInputChange}
					value={search}
				/>
				<button onClick={handleClick}>Search</button>
			</div>
			<h4>Definition:</h4>
			{found !== '' && (
				<>
					{found == 'notFound' ? (
						'Word not found in the dictionary.'
					) : (
						<h2>{found}</h2>
					)}
				</>
			)}
		</div>
	);
};

export default App;
