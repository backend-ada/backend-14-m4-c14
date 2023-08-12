const url = 'https://rickandmortyapi.com/api/episode';

const promise = fetch(url);

const promise2 = promise.then((res) => res.json());

const result = promise2.then((data) => console.log(data.results));
