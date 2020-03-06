# url-shortener
Just a simples url shortener... or is it?


### Brainstorm
    - two basic services, key generation and url redirection
    - cache system (probably with memcached) to make redirection faster
    - Mongodb, since its a read heavy project with weak relationships
    - Docker-compose for mongodb, cache and services
    - Host api and possibly frontend on aws api gateway and bucket
    - Collect basic statistics data (manual or external tool?)
    - setup unit testing with jest
    - base documentation in readme
    - api documentation on swagger
    - Maybe oAuth, not for first version


### Technologies and whys
#### NodeJS
Highly familiar for the dev team, easy to get started, ease of AWS integrations
#### Memcached
Needed a good framework for caching, either this or Radis. Personal preference for Memcached
#### MongoDB
Cheap, flexible and with fast read time latency, good for read heavy applications and potentially loads of information
#### Docker and Docker-compose
It's awesome, and everything here has ready-to-go images
It can also be reverse-proxed to deploy and test directly on aws EC2 (Which will probably be done)
I might need to purchase a domain tho, problems for future me.

#### Jest
Easy, functional testing, should cover both unit and integration testing

#### Base architecture
Still not sure if I'll divide into either two separate repositories, or break the services into sub github repositories and join them in the main project.
I'll use an classic MVC approach, with express being the "view". Not a fan of MVC in general, but it is widely accepted and known, which is a big plus for anyone who wants to grab this project later.