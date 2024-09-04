# Warehouse Optimization

## Overview

The `warehouse-optimization` project provides a solution for optimizing warehouse inventory. It aims to maximize the total value of selected items while respecting constraints such as available space, item priorities, and dependencies between items. This service uses a custom optimization algorithm and integrates with an Express-based API.

## Features

- **Optimize Warehouse Inventory:** Calculate the optimal selection of items based on available space and item properties.
- **Priority Handling:** Items are prioritized based on their priority values and potential value.
- **Dependency Management:** Ensures that selected items meet all specified dependencies.
- **Swagger Documentation:** Provides API documentation and interactive interface.

## Technologies

- **Express:** Web framework for building the API.
- **Joi:** Schema validation for request data.
- **Swagger:** API documentation and interactive UI.
- **Jest:** Testing framework for unit and integration tests.
- **TypeScript:** Provides static typing for better development experience and code quality.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/fzunic7/warehouse-optimization.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd warehouse-optimization
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Compile TypeScript to JavaScript::**

   ```bash
   npm run build
   ```

## Scripts

- **Start the Application:**

  ```bash
  npm start
  ```

  This command starts the application in production mode.

- **Development Mode:**

  ```bash
  npm run dev
  ```

  This command starts the application with `nodemon` for automatic restarts during development.

- **Run Tests:**

  ```bash
  npm test
  ```

  This command runs tests using Jest.

- **Format Code:**

  ```bash
  npm run format
  ```

  This command formats the code using Prettier.

- **Lint Code:**

  ```bash
  npm run lint
  ```

  This command runs ESLint to check for code quality issues.

- **Fix Lint Issues:**

  ```bash
  npm run lint:fix
  ```

  This command automatically fixes linting issues.

## API Documentation

The API is documented using Swagger. To access the Swagger UI:

1. Start the server using `npm start` or `npm run dev`.
2. Navigate to `http://localhost:3000/api-docs` in your browser.

## API Endpoints

### Optimize Inventory

- **Endpoint:** `/api/optimize`
- **Method:** `POST`
- **Description:** Optimize warehouse inventory to maximize value while considering space constraints, priorities, and dependencies.
- **Request Body:**

  ```json
  {
    "items": [
      {
        "name": "Item Name",
        "size": 10,
        "value": 100,
        "priority": 1,
        "dependencies": ["Dependency Item Name"]
      }
    ],
    "total_space": 100
  }
  ```

- **Response:**

  ```json
  {
    "selectedItems": [
      {
        "name": "Item Name",
        "size": 10,
        "value": 100,
        "priority": 1,
        "dependencies": ["Dependency Item Name"]
      }
    ],
    "totalValue": 100
  }
  ```

## Author

- **Frane** - [Email](mailto:franezunic7@gmail.com)
