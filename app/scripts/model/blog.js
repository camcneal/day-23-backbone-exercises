import Backbone from 'backbone';

const BlogConfig = Backbone.Model.extend({
  idAttribute: '_id',
  url: 'http://tiny-za-server.herokuapp.com/collections/chris_blogPosts',
  defauts: {
    title: '',
    body: '',
    timestamp: new Date(),
  },
  calculate: function() {
    
  },
});

// const Blog = Backbone.Model.extend(blogConfig);

// let blog = new BlogConfig();

export default BlogConfig;
