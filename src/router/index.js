import {
    ControlOutlined,
    UserOutlined,
    OrderedListOutlined,
    UserAddOutlined,
    TagOutlined,
    WalletOutlined
} from '@ant-design/icons'

const routes = [
    {
        path: '/home/control',
        name: '控制台',
        icon:  ControlOutlined,
        component: ''
    },
    {
        path: '/home/user',
        name: '用户管理',
        icon: UserOutlined,
        component: '',
        children: [
            {
                path: '/home/user/default',
                name: '用户首页',
                icon:  OrderedListOutlined,
                component: ''
            },
            {
                path: '/home/user/list',
                name: '用户列表',
                icon:  OrderedListOutlined,
                component: ''
            },
            {
                path: '/home/user/add',
                name: '添加用户',
                icon:  UserAddOutlined,
                component: ''
            }
        ]
    },
    {
        path: '/home/department',
        name: '部门管理',
        icon:  TagOutlined,
        component: '',
        children: [
            {
                path: '/home/department/default',
                name: '增加部门',
                icon:  TagOutlined,
                component: ''
            },
            {
                path: '/home/department/list',
                name: '部门列表',
                icon:  TagOutlined,
                component: ''
            }
        ]
    },
    {
        path: '/home/position',
        name: '职位管理',
        icon: WalletOutlined,
        component: ''
    }
]

export default routes
