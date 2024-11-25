# Stationary Shop API Documentation .-.

This is an stationary shop api documentation. Using this api you can preform `CRUD` operation of stationary whop.
After reading this documentation you easily use this api in you frontend application.

## Features

- Create a stationary product
- Delete a stationary product
- Update a stationary product
- Get a stationary product
- Get All product of Stationary
- Order create any product
- Get Order Total revenue

## Technology Used:

`Nodejs`, `ExpressJS`, `MongoDB`, `Mongoose`, `eslint`, `prettier`

- `Node JS` for backend runtime / programming language
- `Express JS` is `nodejs` backend framework
- `MongoDB` noSQL database. for store data.
- `Mongoose` for database store data validation. using mongoose creating schema and model.

## API

`Product`, `Order`

Two type of api are build `Product` and `Order`

- Base URL is

  ```
  https://stationary-shop-assignment.vercel.app/
  ```

## Product API

all time `baseURL/your-api-url`. Base url is given top

### 1. Create a Product

```
baseURL/api/products
```

- This is `POST` APi. Before create Product using this api. must be below format follow

```json
{
  "name": "Notebook",
  "brand": "Moleskine",
  "price": 100,
  "category": "Office Supplies",
  "quantity": 1,
  "inStock": true
}
```

### 2. Get All Products

```
baseURL/api/products
```

- This is `GET` method APi. Using this APi you can see all products.

### 3. Get a Single Product

```
baseURL/api/products/:productId
```

- This is `GET` method APi. If you want to see just single one product from any products use this api

### 4. Update a Single Product

```
baseURL/api/products/:productId
```

- This is `PUT` method APi. Using this api you can update product.

### 5. Delete a Single Product

```
baseURL/api/products/:productId
```

- This is `DELETE` method APi. stationary product delete using this api. but you id will be match your product.

## Order API

all time `baseURL/your-api-url`. Base url is given top

### 6. Order a Product

```
baseURL/api/orders
```

- This is `POST` APi. Using this API you can easily order any product. and you order request will be below format.

```json
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 36
}
```

### 7. Show Order Total Revenue

```
baseURL/api/orders
```

- This is `GET` APi. Using this API you can see you order total revenue.
