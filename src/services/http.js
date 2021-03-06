import axios from 'axios';
import Session from './session';

/*Setting up interceptors with axios*/
/*it supports add/remove interceptors - 2017dec*/
// Add a request interceptor
axios.interceptors.request.use( function(config) {
  	// Do something before request is sent
		const token = Session.get('token'); 
		const user = Session.get('user'); 

    if(token) {
      	if(user && user._id){
					if (["get", "delete", "post", "put"].includes(config.method)){
						if (config.params){
							config.params.loginId = user._id;
						}else{
							config.params = {
								loginId : user._id
							}
						}	
      		}
      	}
        
        config.headers = {
        	Authorization: `Bearer ${token}`
        }
    }
  	return config;
}, function (error) {
  	// Do something with request error
  	return Promise.reject(error);
})

// Add a response interceptor
axios.interceptors.response.use(function(response) {
		// Do something with response data
  	return response.data;
},  function(error) {
	if(!error.response && error.message === 'Network Error'){
		alert("Couldn't connect to server");
		return Promise.reject();
	}	
  	// Do something with response error
  	return Promise.reject(error.response.data);
});


export default class HTTP {
	static Request(method, url, data=null){
		return new Promise((resolve, reject) => {
			axios({
			  method:method,
			  url:url,
			  [method==='get'?"params":"data"] : data
			})
				.then(response => resolve(response))
				.catch(error => reject(error));
		});
	}
}


