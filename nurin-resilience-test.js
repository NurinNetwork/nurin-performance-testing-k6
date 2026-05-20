import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    vus: 30,
    duration: '2m'
};

export default function () {
    http.get('https://randomuser.me/api/');
    
    // simulate user thinking time and irregular usage
    sleep(Math.random() * 2);
}
