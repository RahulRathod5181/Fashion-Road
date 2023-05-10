**baseURL : *
https://clumsy-miniskirt-tuna.cyclic.app/*

### Landing page data endpoint
1. Ex:
-     `${baseURL}/?occasion=dresses`


### Only Seller collection

 1. shivangini collection
-         `${baseURL}/occasion/seller/shivangini`
 2. ankita collection
-         `${baseURL}/occasion/seller/ankita`
3. nikky collection
-         `${baseURL}/occasion/seller/nikky`


### products page endpoint
1. mens collection
-         `${baseURL}/products/mens`
2. womens collection
-         `${baseURL}/products/womens`

### products page sorting endpoint
3. mens collection filter by brand
-         `${baseURL}/products/mens?brand=<brand name>`
4. womens collection filter by brand
-         `${baseURL}/products/womens?brand=<brand name>`
5. mens collection filter by offers
-         `${baseURL}/products/mens?offers=<offer>`
6. womens collection filter by offers
-         `${baseURL}/products/womens?offers=<offer>`
7. mens collection filter by price ascending order
-         `${baseURL}/products/mens?price=asc`
8. womens collection filter by price desc order
-         `${baseURL}/products/womens?price=desc`
9. mens collection filter by discount
-         `${baseURL}/products/mens?discount=<discount number>`
10. womens collection filter by discount
-         `${baseURL}/products/womens?discount=<discount number>`


### products page product add endpoint from admin page only
-     `${baseURL}/products/addProduct`
### products page product update endpoint from admin page only
-     `${baseURL}/products/updateProduct/:id`
### products page product delete endpoint from admin page only
-     `${baseURL}/products/deleteProduct/:id`


### users page endpoint

### users register
-     `${baseURL}/users/register`
### users login
-     `${baseURL}/users/login/`
### for get all users detail in admin page
-     `${baseURL}/users`
### for users delete in admin page
-     `${baseURL}/users/delete/:id`


### admin page endpoint
### admin register
-     `${baseURL}/admin/add`
### admin login
-     `${baseURL}/admin/login/`


### cart page endpoint
### cart product
-     `${baseURL}/cart/`
### cart add
-     `${baseURL}/cart/add`
### cart update
-     `${baseURL}/cart/update/:id`
### cart delete
-     `${baseURL}/cart/delete/:id`
### cart update
-     `${baseURL}/cart/update/:id`