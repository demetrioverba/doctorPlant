import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/'
        const key = '-ZZ_xWYS4b9bI1ZtT7emUqd1Mm1qmxYNuR7sjJQsI_A';
      
        try {
          const response = await axios(`${proxy}https://trefle.io/api/v1/plants/search?token=${key}&q=${this.query}`);
          this.result = response.data.data;
          //console.log(this.result);
        }
        catch (error) {
          alert(error);
        }
      }
}














