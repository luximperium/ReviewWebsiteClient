let APIURL = '';

switch (window.location.hostname) {
    case 'musique-base.herokuapp.com':
        APIURL = 'https://tna-blue-review-server.herokuapp.com'
        break;
        
    case 'localhost' || '127.0.0.1':
        APIURL = 'https://tna-blue-review-server.herokuapp.com'
        break;
    }

export default APIURL;