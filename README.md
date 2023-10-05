# Warehouse-Management

This assignment is a Warehouse Management System (WMS) implemented using ReactJS, Redux, HTML5, JavaScript, and CSS. The system allows you to view a list of warehouses, search for warehouses by name, and filter warehouses by various criteria. Additionally, you can click on a warehouse to view its details and edit its information.

## Getting Started

Follow these steps to set up and run the Warehouse Management System on your local machine:

1. Clone the repository to your local machine: git clone <repository-url>
2. Navigate to the project directory: cd warehouse-management-system  
3. Install the project dependencies using npm: npm install
4. Start the development server: npm start 
5. Open your web browser and visit `http://localhost:3000` to access the Warehouse Management System.

## Project Structure

The project follows a typical React and Redux application structure. Here is a brief overview of the project structure:

- `src/` - Contains the source code of the application.
- `actions/` - Redux action creators for managing warehouse data.
- `components/` - React components used to build the user interface.
- `reducers/` - Redux reducers for managing the application's state.
- `store/` - Configuration of the Redux store.
- `App.js` - The main application component.
- `index.js` - Entry point of the application.

## Features

### Warehouse List Page (WarehouseList.js)

- View a list of warehouses.
- Search for warehouses by name.
- Filter warehouses by:
- City
- Cluster
- Space Available

### Warehouse Details Page (WarehouseDetails.js)

- Click on a warehouse to view its details.
- Edit warehouse information:
- Cluster
- Warehouse Name
- City
- Space Available
- Warehouse Live Status

## Dependencies

The project uses the following major dependencies:

- React - A JavaScript library for building user interfaces.
- Redux - A predictable state container for managing application state.
- react-redux - The official Redux library for React.
- Redux Thunk - Middleware for handling asynchronous actions in Redux.
- Other dependencies may be included for styling, routing, and other functionality.





