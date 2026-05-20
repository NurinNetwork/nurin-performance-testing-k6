import http from 'k6/http';

export let options = {
    stages: [
        { duration: '30s', target: 20 },
        { duration: '1m', target: 20 },
        { duration: '30s', target: 0 }
    ]
};

export default function () {
    http.get('https://randomuser.me/api/');
}
