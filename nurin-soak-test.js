import http from 'k6/http';

export let options = {
    vus: 20,
    duration: '5m'
};

export default function () {
    http.get('https://randomuser.me/api/');
}
