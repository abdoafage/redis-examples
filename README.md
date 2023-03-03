# redis

Redis is an open-source, in-memory data structure store. It's often used as a database, cache, and message broker. Redis is known for its fast read and write operations, scalability, and versatility.

Redis is a NoSQL database, which means that it doesn't use the structured query language (SQL) used by traditional relational databases. Instead, Redis uses a key-value store, where data is stored as key-value pairs. Redis can store various data types such as strings, hashes, lists, sets, and sorted sets.

Here are some of the key features and concepts you should know when learning about Redis:

- Data Types: Redis supports various data types, including strings, hashes, lists, sets, and sorted sets. Each data type has its own set of operations, allowing for efficient manipulation and retrieval of data.

- Keys: In Redis, each data item is identified by a key. Keys can be of various types, such as strings, hashes, or lists. Keys can also have an expiration time, after which they are automatically deleted.

- Commands: Redis provides a set of commands for manipulating data. These commands are sent to Redis through a client, which can be a Redis CLI or a client library in your programming language of choice.

- Pub/Sub: Redis supports publish/subscribe messaging, allowing clients to publish messages to channels and subscribe to channels to receive messages. This can be useful for building real-time applications or implementing messaging systems.

- Transactions: Redis supports transactions, allowing multiple commands to be executed as a single atomic operation.

- Lua scripting: Redis supports Lua scripting, allowing complex operations to be performed on the server side.

To get started with Redis, you can download and install Redis on your machine or use a cloud-based service like Redis Labs or Amazon ElastiCache. Once you have Redis set up, you can use a client library in your programming language of choice to interact with Redis.

# why redis is so fast?

Redis is a fast in-memory data structure store that is optimized for performance. There are several reasons why Redis is so fast:

1. In-memory storage: Redis stores data in RAM, which makes data retrieval and manipulation much faster than disk-based storage systems.

2. Single-threaded architecture: Redis is designed to be single-threaded, which eliminates the overhead of thread synchronization and context switching. This allows Redis to handle a large number of requests in a very short time.

3. Asynchronous I/O: Redis uses asynchronous I/O to handle multiple requests simultaneously. This means that Redis can handle many requests at once without waiting for a response from the client.

- IO multiplexing is a technique that allows a single thread to manage multiple connections simultaneously. In other words, it allows Redis to listen for incoming requests from multiple clients without having to create a new thread for each connection. This technique is achieved using the select() or epoll() system calls, depending on the operating system.

- The single-threaded execution loop is the core of Redis' processing model. It's a loop that runs continuously, processing requests as they come in. The loop is designed to be as efficient as possible, minimizing the amount of time spent on non-essential tasks such as context switching and thread synchronization.

Here's how the process works:

- Redis listens for incoming requests from multiple clients using IO multiplexing. When a client sends a request, the request is added to a queue for processing.

- The single-threaded execution loop retrieves requests from the queue one at a time and processes them. Because Redis is single-threaded, it can process each request in sequence without worrying about synchronization or context switching.

- Once a request has been processed, Redis sends a response back to the client and moves on to the next request in the queue.

4. Simple data structures: Redis provides a set of simple data structures like strings, lists, sets, and hashes that are optimized for speed and memory efficiency. These data structures are designed to be simple and efficient, allowing Redis to perform operations on them quickly.

=>

Strings: Redis strings are binary safe and can contain any type of data, including text, numbers, and serialized data. They can be manipulated using a variety of commands, including SET, GET, INCR, and APPEND. Here's an example:

```bash
SET key "Hello, world!"
GET key
```

Output:

```bash
"Hello, world!"
```

Lists: Redis lists are ordered collections of strings. They can be manipulated using commands such as LPUSH, RPUSH, LPOP, and RPOP. Here's an example:

```bash
LPUSH mylist "world"
LPUSH mylist "hello"
LRANGE mylist 0 1
```

Output:

```bash
1) "hello"
2) "world"
```

Sets: Redis sets are unordered collections of unique strings. They can be manipulated using commands such as SADD, SREM, SMEMBERS, and SINTER. Here's an example:

```bash
SADD myset "hello"
SADD myset "world"
SMEMBERS myset
```

Output:

```bash
1) "hello"
2) "world"
```

Hashes: Redis hashes are collections of key-value pairs. They can be manipulated using commands such as HSET, HGET, HMSET, and HGETALL. Here's an example:

```bash
HSET myhash field1 "hello"
HSET myhash field2 "world"
HGETALL myhash
```

Output:

```bash
1) "field1"
2) "hello"
3) "field2"
4) "world"
```

Sorted Sets: Redis Sorted Sets are similar to sets, but each member has an associated score. Members are sorted by score, allowing for range queries and ranking operations. Here's an example:

```bash
ZADD myzset 1 "one"
ZADD myzset 2 "two"
ZADD myzset 3 "three"
ZRANGE myzset 0 -1 WITHSCORES
```

Output:

```bash
1) "one"
2) "1"
3) "two"
4) "2"
5) "three"
6) "3"
```

Bitmaps: Redis Bitmaps are arrays of bits that can be set, cleared, and manipulated using bitwise operations. They're often used for counting events or tracking user behavior. Here's an example:

```bash
SETBIT mybitmap 0 1
SETBIT mybitmap 2 1
SETBIT mybitmap 4 1
BITCOUNT mybitmap
```

Output:

```bash
3
```

HyperLogLog: Redis HyperLogLog is a probabilistic data structure that can estimate the cardinality of a set with a high degree of accuracy using a small amount of memory. Here's an example:

```bash
PFADD myloglog "foo" "bar" "baz"
PFCOUNT myloglog
```

Output:

```bash
3
```

Geospatial Indexes: Redis Geospatial Indexes allow you to store and query location-based data, such as latitude and longitude coordinates. Here's an example:

```bash
GEOADD mygeo 13.361389 38.115556 "Palermo"
GEOADD mygeo 15.087269 37.502669 "Catania"
GEODIST mygeo "Palermo" "Catania" km
```

Output:

```bash
166.2742
```

Streams: Redis Streams are similar to message queues, allowing you to publish and consume messages in a distributed environment. Here's an example:

```bash
XADD mystream * name John age 30
XADD mystream * name Jane age 25
XRANGE mystream - +
```

Output:

```bash
1) 1) "1581697163483-0"
    2) 1) "name"
       2) "John"
       3) "age"
       4) "30"
2) 1) "1581697230369-0"
    2) 1) "name"
       2) "Jane"
       3) "age"
       4) "25"
```

you can read this article [redis data-structures](https://redis.com/redis-enterprise/data-structures/)

5. Optimized algorithms: Redis uses optimized algorithms for data operations like sorting, filtering, and searching. These algorithms are designed to be fast and efficient, allowing Redis to perform these operations in a very short time.

6. Persistent storage: Redis can be configured to periodically write data to disk, ensuring that data is not lost in the event of a server failure.

Redis is an in-memory database, which means that all data is stored in memory for faster access and performance. However, storing data only in memory can be risky, as data can be lost if the server fails or if the system is restarted. To address this issue, Redis offers a feature called persistent storage.

Persistent storage in Redis involves periodically writing the data stored in memory to disk, typically in the form of snapshots or append-only logs. This ensures that even if the server fails or restarts, the data can be restored from the most recent snapshot or log.

Redis offers two main options for persistent storage:

- RDB (Redis Database): This option involves creating a snapshot of the database at specific intervals and writing it to disk. RDB files are compressed and can be configured to be written at specific intervals or when a certain number of changes have been made to the database.

- AOF (Append Only File): This option involves writing every write operation to a log file on disk. The log file can be configured to be periodically synced to disk, ensuring that data is not lost in the event of a server failure. AOF files are usually larger than RDB files, but offer more granular data recovery options.

## example redis with node.js as CACHE Database.

```bash
git clone https://github.com/abdoafage/redis-examples

cd redis-examples
```

```bash
npm install express cors redis axios
```

```bash
npm install --save-dev nodemon
```

```bash
npm start
```
