# FullCycle 2.0 - Docker - Challenge 2

In this challenge you will put into practice what we have learned in relation to the use of nginx as a reverse proxy. The main idea is that when a user accesses nginx, he will make a call to our node.js application. This application in turn will add a record to our mysql database, registering a name in the people table.

The return of the node.js application to nginx should be:

- ```html
  <h1>Full Cycle Rocks!</h1>
  ```

- List of names registered in the database.

Manage the docker-compose file in a way that we only need to run `docker-compose up -d` and everything should be working and available on the port 8080.

Upload everything into a repository and send us its URL.

## How to Run

- Simply run:

  ```sh
  docker-compose up -d
  ```

## Result

Open http://localhost:8080 on your preferred browser and you should see **Full Cycle Rocks!** followed by a list of random names. Every time you reload the page a new name is added on the database.
