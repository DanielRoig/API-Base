API-Base
=======================

API-Base is a template with basic implementation of some features. It has been created as a boilerplate to future projects. This API has an example of how implement two models, the way of how interact with them through some endpoints and the system of how we should restric a route.

Requirements
============

* node >= v10.15.0
* npm >= v6.4.1

Installation
============

1- The API works with some environment variables so we must configure .env file with properly values (URLs for Development and Production DBs, and  the Secret Key to crypt passwords). Do not upload .env file to any repository neither make it public, it will contain private data ⚠
```
PORT=
MONGO_URI_DEV=
MONGO_URI_PROD= 
SECRET_KEY= 
```
2- Install dependencies with 
`npm install`

3- Run one of the environments

Production
```bash
npm start
```
Development
```bash
npm run dev
```
Test
```bash
npm run test
```


Usage
=====
### Endpoints
Over the main URL:PORT


POST `/api/v1/user/signup`

Request body
 
```
{
	"email": "example@gmail.com",
	"password": "example1234"
}
```

GET `/api/v1/user/login`

Body
 
```
{
	"email": "example@gmail.com",
	"password": "example1234"
}
```
POST `/api/v1/post`

Header

```
Authorization: Bearer "access_token returned in login "
```

Body
 
```
{
	"receiver": "example@gmail.com",
	"message": "This is my first post"
}
```
GET `/api/v1/post`

Header

```
Authorization: Bearer "access_token returned in login "
```

Body
 
```
{
	"inbox": "inbox"
}
```
