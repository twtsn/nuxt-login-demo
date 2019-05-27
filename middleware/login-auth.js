import Cookie from "js-cookie";

export default function ({$axios, store, redirect }) {
    console.info(2222222)
    // 服务端没登录
    if(!process.browser && !store.state.isLogin && !process.env.isMock){
        redirect('/auth/login?redirectTo=/');
    }
}