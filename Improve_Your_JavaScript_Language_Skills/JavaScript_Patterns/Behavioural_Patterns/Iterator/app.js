// ITERATOR PATTERN
// The iterator pattern is another method of iterating through 
// list of items, whereas the chain of responsibility will 
// use more of a handler type and go through a chain. 
// The iterator is best used with a for loop and is perfect 
// when you want to iterate through rays of objects.

newsfeeds = [
    {
      type: 'top-headlines',
      query: 'sources=bbc-news'
    },
    {
      type: 'everything',
      query: 'domains=techcrunch.com&language=en'
    },
    {
      type: 'everything',
      query: 'domains=comicbookmovie.com&language=en'
    }
];

for (let feed of newsfeeds) {
    console.log(feed.type);
}