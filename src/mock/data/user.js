import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

const MenuList=[
  {
    name:'导航一',
    view:'',
    hidden:false,
    iconCls:'el-icon-message',
    children:[
        {
          name:'表格型demo',
          view: 'table',
          hidden:false
        },
        {
          name: '表单型demo',
          view: 'form',
          hidden:false
        },
        {
          name: '用户列表',
          view: 'user',
          hidden:false
        }
    ]
  },
  {
    name: '导航二',
    view: '',
    hidden:false,
    iconCls:'fa fa-id-card-o',
    children:[
      {
        name:'vuex测试页面',
        view:'page4',
        hidden:false
      }
    ]
  },
  {
    name: '导航三',
    view:'',
    hidden:false,
    iconCls:'fa fa-bar-chart',
    children:[
      {
        name: '图表echarts',
        view: '/echarts',
        hidden:false
      }
    ]
  }
]

export { LoginUsers, Users ,MenuList};
