import $ from 'jquery';

function rednerUserInfo(){

  let userInfo = $('.User');
  let userContent = $(`
    <div class="user">
      <form class="Userinfo">


    <input class="first" type="text" name="name" value="">
    <input class="last" type="text" name="name" value="">
    <input class="address" type="text" name="name" value="">
    <input class="phone" type="text" name="name" value="">
    </form>
    </div>
    `);
}
