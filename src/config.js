import axios from 'axios'
import { Toast } from 'antd-mobile'

axios.interceptors.request.use(config=>{
    Toast.show('加载中')
    return config
})

axios.interceptors.response.use(config=>{
    Toast.hide()
    return config
})