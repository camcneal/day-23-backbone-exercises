import Backbone from 'backbone';
import $ from 'jquery';
import renderForm from './views/blogform';
import blogs from './collections/blogs';

// let posts = new Blogs();
const Router = Backbone.Router.extend({
    routes: {
      '': 'renderForm'
    },
    renderForm: function() {
      let newBlog = renderForm(blogs);
      console.log('newBlog', newBlog[0]);
        $('.container').append(newBlog);
    }
});

const router = new Router();

export default router;
