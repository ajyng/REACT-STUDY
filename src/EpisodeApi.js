import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://api.tvmaze.com',
    timeout: 3000,
    // headers: {}, => Token 인증이 필요할 경우 인증 헤더를 삽입해볼 수 있다.
});

export default instance;