import Login1 from "./../views/login.vue"
import Main from "./../views/main.vue"
import Help from "./../views/head/help.vue"
import Message from "./../views/head/message.vue"
import Information from "./../views/head/personal_information.vue"
import Setting from "./../views/head/setting.vue"
// 医疗数据管理
import Stand_data_managment from "./../views/head/stand_data_managment.vue"
import Topic_data_admission from "./../views/medicalDataManagement/topic_data_admission.vue"
import EditorItem from "./../views/head/editorItem.vue"
import DataQualityChecking from "./../views/medicalDataManagement/dataQualityChecking.vue"
import ReportContent from "./../views/medicalDataManagement/reportContent.vue"
import DataNormalization from "./../views/medicalDataManagement/dataNormalization.vue"
import DataRinse from "./../views/medicalDataManagement/dataRinse.vue"
import DataSearch from "./../views/medicalDataManagement/dataSearch.vue"
//疾病诊断分析
import Diagnose from "./../views/CDC/diagnose.vue"
import Source from "./../views/CDC/source.vue"
// 医疗数据统计分析
import AnalyzeSystem from "./../views/analyze/analyzeSystem.vue"
import Analyze from "./../views/analyze/analyze.vue"
import DefinedAnalyze from "./../views/analyze/definedAnalyze.vue"

//医疗数据科研管理
import ProjectSystem from "./../views/scientificSystem/projectSystem.vue"
import DocumentSystem from "./../views/scientificSystem/documentSystem.vue"
import InformationSystem from "./../views/scientificSystem/informationSystem.vue"
import SampleSystem from "./../views/scientificSystem/sampleSystem.vue"
import FinancialSystem from "./../views/scientificSystem/financialSystem.vue"
//疾病知识管理
import Classify1 from "./../views/KMS/classify1.vue"
import Classify2 from "./../views/KMS/classify2.vue"
import Keyword from "./../views/KMS/keyword.vue"
//标准管理
import InternationalSTD from "./../views/STDM/internationalSTD.vue"
import StateSTD from "./../views/STDM/stateSTD.vue"
import TermSTD from "./../views/STDM/termSTD.vue"
import DefinedSTD from "./../views/STDM/definedSTD.vue"
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
            path:"/",
            component:Help,
          },
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
            name:"dataQualityChecking",
            path:"/dataQualityChecking",
            component:DataQualityChecking,
          },
          {
            name:"reportContent",
            path:"/reportContent",
            component:ReportContent,
          },
          {
            name:"dataNormalization",
            path:"/dataNormalization",
            component:DataNormalization,
          },
          {
            name:"dataRinse",
            path:"/dataRinse",
            component:DataRinse,
          },
          {
            name:"dataSearch",
            path:"/dataSearch",
            component:DataSearch,
          },
          {
            name:"topic_data_admission",
            path:"/topic_data_admission",
            component:Topic_data_admission,
          },
          {
            name:"editorItem",
            path:"/editorItem",
            component:EditorItem,
          },
          {
            name:"diagnose",
            path:"/diagnose",
            component:Diagnose,
          },
          {
            name:"source",
            path:"/source",
            component:Source,
          },
          {
            name:"analyzeSystem",
            path:"/analyzeSystem",
            component:AnalyzeSystem,
          },
          {
            name:"analyze",
            path:"/analyze",
            component:Analyze,
          },
          {
            name:"definedAnalyze",
            path:"/definedAnalyze",
            component:DefinedAnalyze,
          },
          {
            name:"projectSystem",
            path:"/projectSystem",
            component:ProjectSystem,
          },
          {
            name:"documentSystem",
            path:"/documentSystem",
            component:DocumentSystem,
          },
          {
            name:"informationSystem",
            path:"/informationSystem",
            component:InformationSystem,
          },
          {
            name:"sampleSystem",
            path:"/sampleSystem",
            component:SampleSystem,
          },
          {
            name:"financialSystem",
            path:"/financialSystem",
            component:FinancialSystem,
          },
          {
            name:"classify1",
            path:"/classify1",
            component:Classify1,
          },
          {
            name:"classify2",
            path:"/classify2",
            component:Classify2,
          },
          {
            name:"keyword",
            path:"/keyword",
            component:Keyword,
          },
          {
            name:"internationalSTD",
            path:"/internationalSTD",
            component:InternationalSTD,
          },
          {
            name:"stateSTD",
            path:"/stateSTD",
            component:StateSTD,
          },
          {
            name:"termSTD",
            path:"/termSTD",
            component:TermSTD,
          },
          {
            name:"definedSTD",
            path:"/definedSTD",
            component:DefinedSTD,
          },
        ]
    },
]
export default routers
