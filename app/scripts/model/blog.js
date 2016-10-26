import Backbone from 'backbone';

const BlogConfig = Backbone.Model.extend({
  idAttribute: '_id',
  defauts: {
    title: '',
    body: '',
    timestamp: new Date(),
  },
  url: 'http://tiny-za-server.herokuapp.com/collections/chris_blogPosts'
});

// const Blog = Backbone.Model.extend(blogConfig);

// let blog = new BlogConfig();

export default BlogConfig;
