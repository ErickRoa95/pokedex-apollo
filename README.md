# pokedex-apollo
A simple implementation of Apollo Server with MongoDB to managed Pokedex information.

## Tools
The tools used for this project are the following:
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started)
- Typescript v5.9.3
- graphql v16.11.0
- [Node v27.7.1](https://formulae.brew.sh/formula/node)
- [Docker v28.0.4](https://formulae.brew.sh/formula/docker)

> The tools were installed using Homebrew (MacOs) this may be different for Linux or Windows platforms.

## Set up the project

> **IMPORTANT: Before starting this section, is required to installed node to run the project and docker to start containers.**

### Install Depdencies
First step would be to install our project dependencies.
```
npm install
```
After installing the dependencies, a new file will be created: **package-lock.json** and a folder **node_modules**. 

### Run containers.
For this project will be using a MongoDB database. Our GraphQL implementation, will resolved the information obtained from moongose API and return the information to our GraphQL API. 
```
docker compose up
```
This will create/start 2 containers:
- **MongoDB database** with the root user and password configured.
- **Mongo-expres**; which is a GUI web app for our MongoDB databases.

### Access to Mongo Express GUI
To get access to **Mongo Express**, the container will be running on the port: 8081. This means that to access the GUI application we need to acces through the following url:
```
http://localhost:8081
```

This will open a page that will ask us for an user and a password. This information was configure on the [docker-compose](docker-compose.yml) as follow:
| ME_CONFIG_BASICAUTH_USERNAME | ME_CONFIG_BASICAUTH_PASSWORD | 
| ---------------------------- | ---------------------------- |
| mongo-express-gui-username | mongo-express-gui-password | 

After logging with the credentials, you will get access to the GUI web application.

### Run Apollo Server with node.
Now we will run Apollo Server using node with the following command:
```
npm start
```
> **Important**: This command will run the following: **nodemon --exec npx tsx src/index.js**.

This will run Apollo Server and make the connection with MongoDB database. The following is an example of the terminal output after running the command:
```
[nodemon] starting `npx tsx src/index.ts`
Server ready at http://localhost:4000//graphql
Connected to MongoDB
```

### Check server is reciving HTTP calls.
To confirm that the server is running as expected, we need to make a "health check" as follows:
```
curl -GET localhost:4000/health
```

This CURL call will make a HTTP GET call to our Apollo Server. If the response is "OK", that means the server is working as intended. 

### Go to Apollo Server Sandox
After starting both containers, run Apollo Server and make a Health check up on the server. We can now access to Apollo Studio's Sandbox to make calls to our GraphQL API. 
For this we only need to access the following link:
```
http://localhost:4000//graphql
```

When we access to this endpoint, the browser will redirect us to [Apollo studio](https://studio.apollographql.com/sandbox/explorer). Make sure that on the "Sandbox INput", is calling 'localhost:4000/graphql'. 

### Test, modify and add new information with GraphQL ! 
If we get access to Studio Apollo as expected. We will be able to start using our GraphQL API and get access to our Schemas, Querys and Mutations.

## Notes
This application created, based on the Learning path: [Stay Ahead in GraphQL](https://www.linkedin.com/learning/paths/stay-ahead-in-graphql?u=100838786).
