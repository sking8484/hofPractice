// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var multiplesBooleanArray = 0;
  _.each(numbers, function(num) {
    multiplesBooleanArray += (num % 5 === 0);
  });
  return multiplesBooleanArray;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(item) {
    return item === targetFruit;
  });

};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(item) {
    return item[0] === letter;
  });

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(item) {
    return item.type === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {

  return _.reduce(products, function(memo, item) {
    return memo + +item.price.slice(1, 100);
  }, 0);

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {

  return _.reduce(desserts, function(memo, item) {
    if (memo[item.type] === undefined) {
      memo[item.type] = 1;
    } else {
      memo[item.type]++;
    }
    return (
      memo
    );
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {

  return _.reduce(movies, function(memo, item) {
    if (item.releaseYear >= 1990 && item.releaseYear <= 2000) {
      memo.push(item.title);
    } return memo;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(memo, item) {
    var underLimit = false;
    if (item.runtime < timeLimit) {
      underLimit = true;
    }
    return (memo || underLimit);
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(item) {
    return item.toUpperCase();
  });

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {

  return _.map(desserts, function(item) {
    if (item.ingredients.includes('flour')) {
      item.glutenFree = false;
      return item
    } else {
      item.glutenFree = true;
      return item;
    }
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {

  return _.map(groceries, function(item) {

    item.salePrice = '$' +
    Math.round(100 * ((1 - coupon) * parseFloat(item.price.slice(1, 100)))) / 100;
    return item;
  });
};
