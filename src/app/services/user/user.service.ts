
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

	constructor() { }

	doLogin(data){
		if (data.email == "biswajit.patra@mail.com" && data.password == "Biswa348") {
			return {
				code : 200,
				message : "Login Successful",
				data : data
			};
		}else{
			return {
				code : 503,
				message : "Invalid Credentials",
				data : null
			};
		}
	}

	}

