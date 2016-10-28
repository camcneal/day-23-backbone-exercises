import Backbone from 'backbone';
import $ from 'jquery';
import renderBlogForm from './views/blogform';
import renderUserInfo from './views/userinfo';
// import blogs from './collections/blogs';
import users from './collections/users';
import renderBlogLinks from './views/blogLinks';

const Router = Backbone.Router.extend({
    routes: {
      '': 'renderBlogForm',
      'blogtopia': 'renderUser',
      'blogLinks': 'renderBlogLinks',
    },
    renderBlogForm: function() {
      let newBlog = renderBlogForm();
      $('.container').empty().append(newBlog);
    },
    renderUser: function () {
      let newUser = renderUserInfo(users);
      console.log('newUser',newUser);
      $('.container').empty().append(newUser);
    },
    renderBlogLinks: function() {
      let newBlogLinks = renderBlogLinks();
      $('.container').empty().append(newBlogLinks);
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
