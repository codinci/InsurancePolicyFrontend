# Angular CRUD Application with C# API Integration

This is an Angular application that performs CRUD (Create, Read, Update, Delete) operations by interacting with an API built using C#. The application is designed to manage data efficiently with a responsive and user-friendly interface.

## Features

- **List Display**: Displays data fetched from the C# API in a structured and interactive manner.
- **Create Functionality**: Allows users to add new records through a form.
- **Update Functionality**: Enables users to edit existing records.
- **Delete Functionality**: Provides an option to delete records.
- **Real-Time Updates**: Automatically updates the list upon adding or editing records without requiring a full page reload.

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your system. [Download Node.js](https://nodejs.org/)
- **Angular CLI**: Install the Angular CLI globally using the following command:
```
npm install -g @angular/cli
```

## Procedure

- Clone the repository
```
git clone https://github.com/codinci/InsurancePolicyFrontend.git
```
- Navigate to the project folder
```
cd InsurancePolicyFrontend
```
- Install node packages
```
npm install
```
- Update the API base url to match your running backend url
    - Open src/environments/environment.development.ts
	- Set the apiBaseUrl to match your backend API url(e.g http://localhost:5072/api)
- Start your Angular server
```
ng serve
```

