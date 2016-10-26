import Backbone from 'backbone';

const userInfoConfig = Backbone.Model.extend({
    idAttribute: '_id',
    defaults: {
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
    },
    url: 'http://tiny-za-server.herokuapp.com/collections/chris_userInfo'
});

export default userInfoConfig;
