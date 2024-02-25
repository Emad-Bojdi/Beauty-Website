


const MenuItems = [{
    title:'Home',
    url:'/',
},
{
    title:`Pages`,
    url:'/pages',
    submenu: [{
        title: 'Team',
        url: 'team',
        key:0,
    },
    {
        title: 'Team Single',
        url: 'team-single',
        key:1,
    },
    {
        title: 'Blog',
        url: 'blog',
        key:2,
    },
    {
        title:'Blog Single',
        url:'blog-single',
        key:3,
    },
    {
        title:'Locations',
        url:'locations',
        key:4,
    }
    ]
},
{
    title:'About',
    url:'/about',
    
},
{
    title:'Services',
    url:'/services',
    
},
{
    title:'Contact',
    url:'/contact',
    
},

]

export default MenuItems;