import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:null
  },
  mutations: {
    setUser(state,user){
      console.log(user);
      state.user=user;
    }
  },
  actions: {

  },
  modules: {
  }
})
/*Principal": {
    "userId": 7,
    "username": "pxg",
    "realname": "彭晓刚",
    "password": "123",
    "sex": 0,
    "company": "塔里木油田公司",
    "department": "工程技术处钻井管理科",
    "position": "副科长",
    "phone": "18609967112",
    "email": "pengxiaogang@msn.com",
    "createBy": "root",
    "createTime": "2020-02-19 00:00:00",
    "updateBy": "root",
    "updateTime": "2020-02-19 00:00:00",
    "locked": false,
    "expired": false,
    "lastLogin": "2020-02-19 00:00:00",
    "comments": "彭晓刚",
    "authorities": [
  {
    "roleId": 4,
    "role": "dbo",
    "comments": "操作员，可以操作字典",
    "authority": "dbo"
  },
  {
    "roleId": 5,
    "role": "aduitor",
    "comments": "审查者,可以审批审查设计和报告",
    "authority": "aduitor"
  },
  {
    "roleId": 2,
    "role": "admin",
    "comments": "管理员，除了角色授权以外所有权限",
    "authority": "admin"
  },
  {
    "roleId": 3,
    "role": "dbm",
    "comments": "数据管理员，可以修改删除设计和报告，以及审定数据入库",
    "authority": "dbm"
  }
],
    "enabled": true,
    "credentialsNonExpired": true,
    "accountNonExpired": true,
    "accountNonLocked": true
}*/
