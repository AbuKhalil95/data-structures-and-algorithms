# Hashtable Methods
Hashtables are your new friend to data lookup, it mashes hash methods, arrays and linkedList to produce a reasonable and effective way to find what has been stored and forgotten. 

# Class-30
# Hashtables
A hashtable is a table, of data, where each index corresponds with a key value that has been hashed using known hashing methods, and stores the value into these indices.

## Challenge
To index each key, hashing methods return a unique value to each key inserted into them, and the same key always produces the same value. These output values of hashing is used as indices, where `{Key: value}` pairs are finally stored.

Another challenge is to resolve conflict when collision happens, as hashing does not guarantee unique values to each key, it just does that 99.99% of the time.

And along with these API's that is needed to be implemented.

- **add**: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- **get**: takes in the key and returns the value from the table.
- **contains**: takes in the key and returns a boolean, indicating if the key exists in the table already.
- **hash**: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency
Starting the table by implementing a class, this class would hold size value, and a new array matching that size in the constructor. 

The first method is where the name comes from, `hash(key)` will be implemented by taking into account key character code of each unit, since each keyboard entry matches to some ASCII value. These will be added up, multiplied by a prime number (599 here) and is returned after taking its modulus with the size of the hashtable. You might be asking why prime numbers? well short answer is because they have the best chance to give unique hash values, [long answer though is quite interesting](https://computinglife.wordpress.com/2008/11/20/why-do-hash-functions-use-prime-numbers/).

Once the index is returned, we could continue with the `add(key, value)` that uses the `hash(key)` returned index and implement a `this.entries[hashIndex]` to add the entry to. Caveat is that this entry would be in a linkedList form, this is how collisions are handled! We simply append similar keys to the linkedList as the collisions flow in in form of objects `{[key]: value}`, and handle getting the right value separately.

`get(key)` & `contains(key)` are quite similar in that we would hash the key again to find the index, but return the `linkedList.toString()` method for the get, and a boolean for the contains.

## API
```
Hashtable {
  hash(key); // hashes the key to find the index

  add(key, value); // adds the {key: value} pair to the hashtable

  get(key); // gets the corresponding key hashed into index as a linkedList toString()

  contains(key);  // returns boolean if exists or not as true/false
}
```