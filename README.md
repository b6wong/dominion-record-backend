# Dominion Record Backend

This is a backend API that supports some basic CRUD to store the result of Dominion Games.

There is an associated frontend Dominion Record Frontend that uses this.

The purpose of this is to create a simple application and orchestrate it in the cloud.

For the backend, we will start with using a Docker container and use AWS ECS.

## Dockerfile

The following Environment Variables can be set:

* DB_HOST - Database Host
* DB_USER - Database login user
* DB_PASSWORD - Database login password (This should not be hard coded.  In ECS, use parameter store)
* DB_NAME - Database Name

The container will expose port 8080
