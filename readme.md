# API 28 , Ecommerce
-Auth module
    - register
        -> /register post
    - active
        -> /:token/activate -> get
    - login 
        -> /login -> post
    - profile view
        -> after login /me -> get
    - change password
        ->after login /change-password ->post
    - logout
        -> after login / logout =>get
    - forget password
        -> request for password  => post /forget-password
    -reset
        -> post /reset-password

-Banner Module
    - create
        => /banner post
    -read
        => /banner get
        => /banner/:id get detail
        => /banner/home get list public
    -update
        => /banner/:id put update protected
    -delete
        => /banner/:id  delete protected

-Brand Module
    - create
        => /brand post
    -read
        => /brand get
        => /brand/:id get detail
        => /brand/home get list public
        => /brand/:slug/by-slug get list detai fo the brabd with product public
    -update
        => /brand/:id put update protected
    -delete
        => /brand/:id  delete protected

-Category Module
    - create
        => /category post protected
    -read
        => /category get
        => /category/:id get detail
        => /category/home get list public
        => /category/:slug/by-slug get list detail of the category with category public
    -update
        => /category/:id put update protected
    -delete
        => /category/:id  delete protected

-user module
    -create
        =>/user post
            (sustomer, seller, admin)
    -read
        => /user => list all
        => /user/:id =>detail
        => /user?role= admin or sleer of customer   
    -update
        => /user/ :id
    -delete
        =>/user/:id

-Product Module
    - create
        => /product post protected (admin ,seller)
    -read
        => /product get
        => /product/:id get detail
        => /product/:slug/by-slug get list detail of the product with product public
        => /product/list get licensing by some filter public
    -update
        => /product/:id put update protected
    -delete
        => /product/:id  delete protected
-cart/order
    -create/update
        => /cart/create -> psot(protected, admin customer)
    -read
        =>/cart/list => get (protected, admin customer)
        =>order/list =>get (protected, admin customer)
    -delete
        =>/cart/:is => delete (protected, admin customer)

Payment modules
    -live
    -purchase gateway
    -commission