import Hello from "./../components/HelloWorld.vue"
import Login1 from "./../views/login.vue"
import Main from "./../views/main.vue"


const routers=[
    {
        path:"/",
        component:Login1,
    },
    {
        name:"main",
        path:"/main",
        component:Main,
    }
]

export default routers