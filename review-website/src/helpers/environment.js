let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000'
        break;
    
    case 'musique-base.herokuapp.com':
        APIURL = 'https://tna-blue-review-server.herokuapp.com'
        break;
    }

export default APIURL;