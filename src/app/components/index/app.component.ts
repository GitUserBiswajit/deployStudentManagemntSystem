import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Student Management By Biswajit';
	studentsList = [
	{	
		id : 1,
		first_name : "Biswa",
		last_name : "Patra",
		email : "biswajit.patra@mail.com",
		phone : 9004568904,
		department : "CSIT"
	}
	];

	constructor() {
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}
