import $ from 'jquery';
import Backbone from 'backbone';

// import Blog from '../model/blog';

function renderForm (blogs) {
  // let blog = new Blog();
  // console.log('blog', blog);

  // console.log('blogs', blogs);

  const $element = $(`
  <form class="new-blog">
    <input type="text" name="name" value="" placeholder="blog title">
      <textarea name="blogpost" rows="8" cols="40" placeholder="Empty mind here"></textarea>
     <input type="submit" name="button" value="save">Namaste</button>
   </form>
   `);
 $element.on('submit',function(e){
   e.preventDefault();
   const title = $(this).find('input[type="text"]').val();
   const body = $(this).find('textarea').val();
   blogs.create({title, body}, {
     success: (response) => {
       console.log('goood', response);
       location.hash = 'blogtopia';
    },
      error: function(response) {
        console.log('ERROR', response);
      }
   });
 });
 return $element;
 }
export default renderForm;
