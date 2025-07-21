// Objects are not really nested
// Source https://react.dev/learn/updating-objects-in-state#objects-are-not-really-nested

let obj = {
  name: "Niki de Saint Phalle",
  artwork: {
    title: "Blue Nana",
    city: "Hamburg",
    image: "https://i.imgur.com/Sd1AgUOm.jpg",
  },
};

// When the code executes, there is no such thing as a “nested” object. You are really looking at two different objects:

let obj1 = {
  title: "Blue Nana",
  city: "Hamburg",
  image: "https://i.imgur.com/Sd1AgUOm.jpg",
};

let obj2 = {
  name: "Niki de Saint Phalle",
  artwork: obj1,
};

// The obj1 object is not “inside” obj2. For example, obj3 could “point” at obj1 too:

let obj3 = {
  name: "Copycat",
  artwork: obj1,
};

/*
If you were to mutate obj3.artwork.city, 
it would affect both obj2.artwork.city and obj1.city. 
This is because obj3.artwork, obj2.artwork, and obj1 are the same object.
*/
