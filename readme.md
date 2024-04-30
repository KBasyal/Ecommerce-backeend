<<<<<<< HEAD
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



CORS
    ===> Cross origin reference site
    --> FE (domain)
        -- abc.com
    --> BE (domain)
        --- api.abc.com
            abc.com:portno

# flow til now
/auth/register
    ----> auth.controller.js ===> register function


/index.js ==> create


Register Data
    ---> name, email, password, role, image
        ---> stoe this on db
            ---> user has to activate the account vai email

SMTP server
    ===> smtp, pop3, imap
    smtp ===> 25 blocked ISP, 2525, 587, 465

            gmail, live, custom, domain

sender 
Node app ===>SMTP server===>Queue build===>receiver mail

Test 
sending domain verify ===> hosting live
    Node app  ==> Smtp server===> Queue build ===> fake mail receiver


Host      ===> gmail
User      ===> gmial address
Password    ===> 
port

# database
 --->NoSQL
    - work can be done using fuctions
    - mongodb, couchdb, .......
    - document based db
    
 --->SQL
    - query 
    - mysql, postgres, oracle, mssql, .....
 - storage units
 MongoDB
 - loaclize
 - cloud service 512 mb free


 protocol---> mongodn mongodb+srv
 host----> localhost 127.0.0.1 <cluster hostaddress>
 port -----> 27017
 user----> not required fro localhost , atlas --->db user
 password ---->not required for lacalhost , atlas --> db pwd
 db ==> your dbname

 C-- create
    ---> db.<collectionName>.insertOne(<json Object>)
    --->db.<collectionName>.insertMany(<json object>)
    e.g
        db.users.insertOne({
            name:"kamal basyal",
            email:"kamalbasyal987@gmail.com",
            role:"admin",
            passowrd:"",
            status:"inactive",
            activationToken:"",
            image:""
        })
        db.users.insertMany([
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "role": "admin",
    "password": "$2a$10$T6sXrFzGvz.9Fw5l7ZI1OuTq4l8bOe7Wj6bS6f0eLc1xI9vLZcJ8m",
    "status": "inactive",
    "image": "https://dummyimage.com/200x200"
  },
  {
    "name": "Jane Smith",
    "email": "janesmith@example.com",
    "role": "seller",
    "password": "$2a$10$T6sXrFzGvz.9Fw5l7ZI1OuTq4l8bOe7Wj6bS6f0eLc1xI9vLZcJ8m",
    "status": "inactive",
    "image": "https://dummyimage.com/200x200"
  },
  {
    "name": "Michael Johnson",
    "email": "michaeljohnson@example.com",
    "role": "admin",
    "password": "$2a$10$T6sXrFzGvz.9Fw5l7ZI1OuTq4l8bOe7Wj6bS6f0eLc1xI9vLZcJ8m",
    "status": "inactive",
    "image": "https://dummyimage.com/200x200"
  },
  {
    "name": "Emily Brown",
    "email": "emilybrown@example.com",
    "role": "seller",
    "password": "$2a$10$T6sXrFzGvz.9Fw5l7ZI1OuTq4l8bOe7Wj6bS6f0eLc1xI9vLZcJ8m",
    "status": "inactive",
    "image": "https://dummyimage.com/200x200"
  },
  {
    "name": "David Wilson",
    "email": "davidwilson@example.com",
    "role": "admin",
    "password": "$2a$10$T6sXrFzGvz.9Fw5l7ZI1OuTq4l8bOe7Wj6bS6f0eLc1xI9vLZcJ8m",
    "status": "inactive",
    "image": "https://dummyimage.com/200x200"
  },
  {
    "name": "Olivia Taylor",
    "email": "oliviataylor@example.com",
    "role": "seller",
    "password": "$2a$10$T6sXrFzGvz.9Fw5l7ZI1OuTq4l8bOe7Wj6bS6f0eLc1xI9vLZcJ8m",
    "status": "inactive",
    "image": "https://dummyimage.com/200x200"
  },
  {
    "name": "James Anderson",
    "email": "jamesanderson@example.com",
    "role": "admin",
    "password": "$2a$10$T6sXrFzGvz.9Fw5l7ZI1OuTq4l8bOe7Wj6bS6f0eLc1xI9vLZcJ8m",
    "status": "inactive",
    "image": "https://dummyimage.com/200x200"
  },
  {
    "name": "Sophia Martinez",
    "email": "sophiamartinez@example.com",
    "role": "seller",
    "password": "$2a$10$T6sXrFzGvz.9Fw5l7ZI1OuTq4l8bOe7Wj6bS6f0eLc1xI9vLZcJ8m",
    "status": "inactive",
    "image": "https://dummyimage.com/200x200"
  },
  {
    "name": "Daniel Thompson",
    "email": "danielthompson@example.com",
    "role": "admin",
    "password": "$2a$10$T6sXrFzGvz.9Fw5l7ZI1OuTq4l8bOe7Wj6bS6f0eLc1xI9vLZcJ8m",
    "status": "inactive",
    "image": "https://dummyimage.com/200x200"
  },
  {
    "name": "Isabella Davis",
    "email": "isabelladavis@example.com",
    "role": "seller",
    "password": "$2a$10$T6sXrFzGvz.9Fw5l7ZI1OuTq4l8bOe7Wj6bS6f0eLc1xI9vLZcJ8m",
    "status": "inactive",
    "image": "https://dummyimage.com/200x200"
  }
]);
db.products.insertMany([
  {
    "product name": "Nike Air Max 90",
    "price": "5499",
    "discount": "10",
    "priceAfterDicsount": "4949",
    "brand": "Nike",
    "category": "Sneakers"
  },
  {
    "product name": "Adidas Ultraboost",
    "price": "5999",
    "discount": "15",
    "priceAfterDicsount": "5099",
    "brand": "Adidas",
    "category": "Sneakers"
  },
  {
    "product name": "Puma Suede Classic",
    "price": "4999",
    "discount": "20",
    "priceAfterDicsount": "3999",
    "brand": "Puma",
    "category": "Sneakers"
  },
  {
    "product name": "Vans Old Skool",
    "price": "4599",
    "discount": "0",
    "priceAfterDicsount": "4599",
    "brand": "Vans",
    "category": "Sneakers"
  },
  {
    "product name": "Converse Chuck Taylor",
    "price": "4199",
    "discount": "5",
    "priceAfterDicsount": "3989",
    "brand": "Converse",
    "category": "Sneakers"
  },
  {
    "product name": "Reebok Club C 85",
    "price": "5499",
    "discount": "10",
    "priceAfterDicsount": "4949",
    "brand": "Reebok",
    "category": "Sneakers"
  },
  {
    "product name": "New Balance 574",
    "price": "4799",
    "discount": "0",
    "priceAfterDicsount": "4799",
    "brand": "New Balance",
    "category": "Sneakers"
  },
  {
    "product name": "Under Armour HOVR",
    "price": "5999",
    "discount": "15",
    "priceAfterDicsount": "5099",
    "brand": "Under Armour",
    "category": "Sneakers"
  },
  {
    "product name": "Skechers Go Walk",
    "price": "4499",
    "discount": "20",
    "priceAfterDicsount": "3599",
    "brand": "Skechers",
    "category": "Sneakers"
  },
  {
    "product name": "Fila Disruptor",
    "price": "4999",
    "discount": "5",
    "priceAfterDicsount": "4749",
    "brand": "Fila",
    "category": "Sneakers"
  }
]);
 R-- read
    --->db.<collectionName>.find()
    --->db.<collectionName>.findOne()
    Args
        (filter)
        --->filter is a json data type
        ---> where clause in sql
        filter
        $or $and $gt $gte $lt $lte $eq $ne $in $nin $text
        db.products.find({price:{$gt :'1000'}});
        {
          $or and in nin [{key: <value>}]
        }
        --------------shorting------------


        --- find(fileter, projection, option)---
            SELECT
                <projection>


 U-- update
  ---> db.<collectionname>.updateOne()
  ---> db.<collectionName>.updateMany()
  Args
    filter===> find filtes as same as that
    body==>
    {
      $set:<updateBody>
      example: db.user.updateOne({_id:ObjectId("id")},{$set:{status: "active", activationToken: null}}{upsert:1});
    }
    options:
      ===> {upsert: <boolean>}
 D--delete
  --->db.<collectionName>deleteOne()
  --->db.<collectionName>deleteMany()


 #mongodb cmds
 use -- to create new database or use existing database



Core uses 
ORM/ODM usages
    --> data structure provider
  ORM/ODM
    ===> object relationla mapping / modelling
    ===> object document mapping/modelling
  DB tables ===> project model definition
   ORM/ORM
      ---> tables/ collection name should be always plural of your data/entity
      e.g 
          users, products, histories
        ---> all the models/ repo in your project should be in singular case
      e.g 
      User, Product, History
        ---> all the columns/keys of a table/ collection is the property of your model class
      e.g 
      users ===> _id, name, email, password,.......
      ----> UserMOdel ===> object===>property

      ===>functions
  

MongoDB
    ====> mongoose



SQL server
    ===> sequelize,

### identify the entity
ER diagram
Ecommerce
  -banners

  -users
  -category
  -brand
  -products
  -order

  -transactions
  -offers
  -coupons/vouchers
  -reviews

  -Inventory MS
    -order
    -stocks
    -payment/ cash flow
  -logistic MS
    -tracking
    - delivery status


### Ecommerce
-banners
table banners{
  _id ObjectId
  title text 
  link text
  status STATUS [default :'inactive']
  image text
  createdBy ObjectId [ref:>users._id, default:"null"]
  createdAt datetime
  updatedBy ObjectId  [ref:>users._id, default:"null"]
  updatedAt datetime
}

-users
enum ROLE{
  admin
  seller
  customer
}
enum STATUS{
  active 
  inactive
}

table users{
  _id ObjectId
  name text
  email text [unique]
  password text
  role ROLE [default :'customer']
  status STATUS [default :'inactive']
  activationToken text
  image text
  phone text
  adress json
  createdBy ObjectId [ref:-users._id, default:"null"]
  createdAt datetime
  updatedBy ObjectId  [ref:-users._id, default:"null"]
  updatedAt datetime
}
-category
table categories{
  _id ObjectId
  title text [unique]
  slug text [unique]
  status STATUS [default :'inactive']
  image text
  parentId ObjectId [ref :> categories._id , default:"null"]
  createdBy ObjectId [ref:>users._id, default:"null"]
  createdAt datetime
  updatedBy ObjectId  [ref:>users._id, default:"null"]
  updatedAt datetime
}
-brand
table brands{
  _id ObjectId
  title text [unique]
  slug text [unique]
  status STATUS [default :'inactive']
  image text
  homeSection bool [default :"false"]
  createdBy ObjectId [ref:>users._id, default:"null"]
  createdAt datetime
  updatedBy ObjectId  [ref:>users._id, default:"null"]
  updatedAt datetime
}
-products
table products{
  _id ObjectId
  title text [unique]
  slug text [unique]
  summary text
  description text
  categories ObjectId [ref: <> categories._id] // has to be handled by mondo db
  price number
  discount number
  afterDiscount number
  brand ObjectId [ref:- brands._id]
  stock nunumber // option
  sku text // option
  featured bool [default: false]
  seller ObjectId [ref : -users._id]
  status STATUS [default :'inactive']
  image text
  parentId ObjectId [ref :> categories._id , default:"null"]
  createdBy ObjectId [ref:>users._id, default:"null"]
  createdAt datetime
  updatedBy ObjectId  [ref:>users._id, default:"null"]
  updatedAt datetime
}
-order
table orders{
  _id ObjectId
  buyerId ObjectId [ref :<users._id]
  orderDate date
  orderDetail ObjectId [ref :< cartDetails._id]
  subTotal number
  discount number
  deliveryAmount number
  tax amount
  serviceCharge number
  totalAmount number
  isPaid bool [default:'false']
  status orderStatus [default: "pending"]
  createdBy ObjectId [ref:>users._id, default:"null"]
  createdAt datetime
  updatedBy ObjectId  [ref:>users._id, default:"null"]
  updatedAt datetime
}
=======
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
>>>>>>> origin/main
