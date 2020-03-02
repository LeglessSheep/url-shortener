# url-shortener
Just a simples url shortener... or is it?


### Brainstorm
    - two basic services, key generation and url redirection
    - cache system (probably with memcached) to make redirection faster
    - DynamoDB for flexible and fast, since its a read heavy project
    - Docker-compose for dynamo, cache and services
    - Host api and possibly frontend on aws api gateway and bucket
    - Collect basic statistics data (manual or external tool?)
    - Maybe oAuth, not for first version
    - setup unit testing with jest
    - base documentation in readme
    - api documentation on swagger

### Technologies and whys
#### NodeJS
Highly familiar for the dev team, easy to get started, ease of AWS integrations
#### Memcached
Needed a good framework for caching, either this or Radis. Personal preference for Memcached
#### DynamoDB
Cheap, flexible and with very fast read time latency, perfect for read heavy applications like this one
#### Docker and Docker-compose
It's awesome, and everything here has ready-to-go images
It can also be reverse-proxed to deploy and test directly on aws EC2 (Which will probably be done)
I might need to purchase a domain tho, problems for future me.

#### Jest
Easy, functional testing, should cover both unit and integration testing

#### Base architecture
Still not sure if I'll divide into either two separate repositories, or break the services into sub github repositories.
I'll use an classic MVC approach, with the server being the 'view' part. Not a fan of this division, but it is widely accepted and known, which is a big plus for anyone who wants to grab this project later.