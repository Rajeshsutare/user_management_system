# UserManagementSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Dependencies:
	This project is made in Angular 14.2.0 version.
	Rxjs 7.5.0
	Used Bootstrap 4.6.2 CSS framework.
	Used free font awesome 6.5.1 for edit and Delete icons.
	Sweetalert2 of version 11.10.03 for alert message. 
devDependencies:
	Type script 4.7.2

	Created User interface in model folder for type Casting.
	Used the firebase to make API that features user data.
	In assets folder SCSS folder created which contains other SCSS files and folders.
	Folder structure is like src > app > user ……
	When project opens user directly navigate to user-list component where all users details can see and will see two buttons to i.e. users and Add new user.
	On add new user it will navigate to User- Upsert –component where User form is located.
	Created components User- Upsert component
•	Created a reactive form with the following fields: FirstName, LastName, Address, Email, phone with “required” validation on all.
•	Address max length is 30 letters.
•	Email has email pattern validation.
•	Phone has only 10 digits number validation.
•	On submit button new user object will created with unique Id and get alert pop up message.
	If user already exist then and if you try to add it, it will show alert that “User already Exists”.
	Created components User- list component
•	Here you get the data as filled in form, in table format with two icons in Action column for Edit and Delete purpose.
	Created the DataService to use same code in required components.
	Created error component to show error if the routing path mismatched or some other error occures.
	Created the other services like loader, resolver, utility service and interceptor service.

