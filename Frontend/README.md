# Signzy Kindle

The aim of this project is to build a modular and scalable application using Angular.

Technology Stack :

- Angular 4
- RxJS 5
- Angular Material

The goal of the architecture and structure used in this application is to ensure :

- Scalability
- Modularity
- Separation of concerns ( less logic in the UI )
- Easy for newcomers
- Maintainability

This sample application includes the following features :

- Modular application
- Routing
- Lazy loading
- Reactive forms & validations
- Testing
- Material design

# Application Modules

The application is splitted into several modules. The image below represents the modules implemented in this application.

- **Signzy-Kindle Module** : Core of the application, it contains the core layout, menu and logo.
- **Shared Module** : Contains shared features such as Models and services etc.
- **Catalog Module** : Browse a collection of books and view the details of each books
- **Cart Module** : Add books to cart, checkout and place order.(not implemented)
- **Auth Module** : Authentication of the user

## Development server

After extracting the project files

Run `npm i` to install the required dependencies(node modules).

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
