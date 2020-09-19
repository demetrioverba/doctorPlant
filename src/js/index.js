import axios from 'axios';

async function getResults(query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/'
  const key = '-ZZ_xWYS4b9bI1ZtT7emUqd1Mm1qmxYNuR7sjJQsI_A';
  const response = await axios(`${proxy}https://trefle.io/api/v1/plants/search?token=${key}&q=${query}`);
  console.log(response);

}
getResults('yucca');








