
# QED42 Assignment 

This is a small assignment project where the ProductList component fetches data from the FakeStore API and displays all the products on the page. When a user clicks on the "Add to Cart" button, the product is added to the cart. In the Cart component, users can adjust the quantity of products or remove them from the cart.


## Installation

Install QED42 Assignment with npm


## Clone Repo
```bash
$ git clone https://github.com/zademanish/QED42-ASSIGNMENT.git
```
## Install NPM
```bash
 $ npm install 
```
## Run Application
```bash
$ npm run dev
```
    
## FakeStoreApi

#### Get all items

```http
  https://fakestoreapi.in/api/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  https://fakestoreapi.in/api/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Number` | **Required**. Id of item to fetch |


