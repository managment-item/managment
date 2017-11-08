import Login1 from "./../views/login.vue"
import Main from "./../views/main.vue"
import Help from "./../views/head/help.vue"
import Message from "./../views/head/message.vue"
import Information from "./../views/head/personal_information.vue"
import Setting from "./../views/head/setting.vue"
// 标准数据项管理
import Stand_data_managment from "./../views/head/stand_data_managment.vue"
// 课题数据录取
import Topic_data_admission from "./../views/medicalDataManagement/topic_data_admission.vue"

const routers=[
    {
        path:"/",
        component:Login1,
    },
    {
        name:"main",
        path:"/main",
        component:Main,
        children:[
          {
            name:"help",
            path:"/help",
            component:Help,
          },
          {
            name:"message",
            path:"/message",
            component:Message,
          },
          {
            name:"information",
            path:"/information",
            component:Information,
          },
          {
            name:"setting",
            path:"/setting",
            component:Setting,
          },
          {
            name:"stand_data_managment",
            path:"/stand_data_managment",
            component:Stand_data_managment,
          },
          {
            name:"topic_data_admission",
            path:"/topic_data_admission",
            component:Topic_data_admission,
          },
        ]
    },
]

export default routers
