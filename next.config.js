const fetch = require('isomorphic-unfetch');
const categories = require('./data/categories.json');

module.exports = {
  async exportPathMap() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1');
    const posts = await res.json();

    const postPages = posts.reduce(
      (postPages, post) =>
        Object.assign({}, postPages, {
          [`/post/${post.id}`]: {
            page: '/post',
            query: { id: post.id }
          }
        }),
      {}
    );

    const categoryPages = categories.reduce(
      (categoryPages, category) =>
        Object.assign({}, categoryPages, {
          [`/category/${category.id}`]: {
            page: '/category',
            query: { id: category.id }
          }
        }),
      {}
    );

    return Object.assign({}, postPages, categoryPages, {
      '/': { page: '/' }
    });
  }
};
