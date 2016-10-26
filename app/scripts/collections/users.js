import Backbone from 'backbone';
import userInfo from '../model/user';

const UserCollection = Backbone.Collection.extend({
  model: userInfo,
  url: 'http://tiny-za-server.herokuapp.com/collections/chris_userInfo'
});

let info = new UserCollection();

export default info;
