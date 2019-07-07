const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = collection instanceof Array ? collection : Object.values(collection)
      for(let i=0; i < newCollection.length; i++)
        callback(newCollection[i])
      return collection
    },

    map: function(collection, callback) {
      const newCollection = collection instanceof Array ? collection : Object.values(collection)
      for(let i=0; i < newCollection.length; i++)
        newCollection[i] = callback(newCollection[i])
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let seed = acc ? acc : collection[0]
      let i = acc ? 0 : 1
      for(; i < collection.length; i++){
        seed = callback(seed, collection[i], collection)
      }
      return seed
    },

    find: function (collection, predicate) {
      for (let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          return collection[i]
        }
      }
    },

    filter: function (collection, predicate) {
      const newCollection = []
      for(let i=0; i < collection.length; i++){
        if(predicate(collection[i])){
          newCollection.push(collection[i])
        }
      }
      return newCollection
    },

    size: function (collection) {
      const newCollection = collection instanceof Array ? collection : Object.values(collection)
      return newCollection.length
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
