import $ from 'jquery';
import Backbone from 'backbone';

function renderUserInfo(user) {
    const userContent = $(`
      <form class="userinfo">
        <input class="first" type="text" placeholder="first name" value="">
        <input class="last" type="text" placeholder="last name" value="">
        <input class="address" type="text" placeholder="address" value="">
        <input class="phone" type="text" placeholder="phonenumber" value="">
        <input class="button" type="submit" name="name" value="Manifest">
      </form>
    `);
      userContent.on('submit', function(e){
        e.preventDefault();
        const firstName = $(this).find('.first').val();
        const lastName = $(this).find('.last').val();
        const address = $(this).find('.address').val();
        const phoneNumber = $(this).find('.phone').val();
        console.log(user);
        user.create({firstName ,lastName,address,phoneNumber
        },{
          success: (response) =>{
            console.log(response);
            location.hash = 'blogLinks';
          },
          error: function(response) {
            console.log('ERRR',response);
          }
        });

      });
      return userContent;

}


export default renderUserInfo;
