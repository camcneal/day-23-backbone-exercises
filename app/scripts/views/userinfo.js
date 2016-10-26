import $ from 'jquery';

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
        const first = $(this).find('.first');
        const last = $(this).find('.last');
        const address = $(this).find('.address');
        const phone = $(this).find('.phone');

      });
      return userContent;

}


export default renderUserInfo;
