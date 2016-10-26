import Backbone from 'backbone';
import $ from 'jquery';
import renderForm from './views/blogform';
import renderUserInfo from './views/userinfo';
import blogs from './collections/blogs';
// let posts = new Blogs();
const Router = Backbone.Router.extend({
    routes: {
      '': 'renderForm',
      'blogtopia': 'renderUser'
    },
    renderForm: function() {
      let newBlog = renderForm(blogs);
      console.log('newBlog', newBlog[0]);
        $('.container').empty().append(newBlog);
    },
    renderUser: function () {
      let newUser = renderUserInfo();
      console.log('newUser',newUser);
      $('.container').empty().append(newUser);
    }
});

const router = new Router();

export default router;

//what is the difference between passing in my collection ('blog') into my renderForm() function like this:
  //import blogs from '..../blogsCollection'
  //let newBlog = renderForm(blogs);

  //vs.

  //creating a new instance of my blogModel in the renderForm() function
    //here, i can not use 'create' and can only use 'save'

//both of these are successful in saving to the tiny-za server
