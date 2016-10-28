import $ from 'jquery';
import Backbone from 'backbone';
import blogCollection from '../collections/blogs';

function renderBlogLinks(){
  blogCollection.fetch();

  const blogContent = $(`
    <ul>

    </ul>
`);


  function addBlogToList(blog) {
    let li = (`<li id=${blog.get('_id')}>${blog.get('title')}</li>`);
    blogContent.append(li);

    blogContent.find('li').on('click', function(e){
      console.log('clicking', e.target.id);
      let targetId = e.target.id;
      let model = blogCollection.findWhere({'_id':targetId});
      let singleView = $(`
          <div class="bw">
            <h1>${model.get('title')}</h1>
            <p>${model.get('body')}</p>
          </div>
        `);
      $('.container').prepend(singleView);

    });
  }

  blogCollection.map(addBlogToList);
  blogCollection.on('add', addBlogToList);






  return blogContent;
// blogContent.on('submit', function(e) {
//   e.preventDefault();

// });
}
export default renderBlogLinks;
