## Build API: deal with data

1. implement get 'api/v1/tours'
   1. url with api version, without break out v1 user.
   2. route handler
      1. send back all of the data of this resources
      2. where to get this data that we want to send back to user
         1. dev-data/data
      3. before send data, read data synchronous way
         1. concepts
            1. read data on the top-level code, instead of read it inside route handler
            2. only execution once when application startup
            3. route handler inside event loop without blocking code like read file
         2. steps to implement
            1. \_\_dirname = the folder where current script is located
            2. parse the result by `JSON.parse()`, json -- js array of objects
            3. send back to client with status code and json
            4. Jsend JSON formatting standard
               1. status : success / fail / error
                  1. fail : error at client
                  2. error : error at server
               2. data :{} -- enveloping
                  tours : tours
               3. results ,(when sending multiple responses)
                  1. with the number of result we are sending
                  2. sending an array with multiple objects in there

---

2. handle post request

   1. add a new route
   2. rounte handler 0. post : send data from client to server , in req

      1. get data from client 2. ==middleware== : 1. Express do not put the body data on the request 2. so we have to use middleware : `app.use(express.json())` 1. `express.json()` is middleware 2. a function that can modify the incoming request data 3. middler between request and response, add data to request object 3. `req.body`, be available because use middleware 4. send back response -- request and response cycle

      2. persist the data, save to database
         1. figure out the id of the new object, (database will do that.)
         2. create a new tour object : request body + id
         3. save to tours array
         4. persist into file by async write
            1. ! inside callback, which will run in event loop, should never block event loop, so we use asyn way to write data
            2. stringfy data by `JSON.stringify`
            3. callback `err=>()` to send the newly created data object as response
               1. 201 = created
               2.

3. responding
