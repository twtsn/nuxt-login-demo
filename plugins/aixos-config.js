export default function ({ $axios, redirect }) {
    $axios.onRequest(request => {});
    $axios.onResponse(response => {
        // 浏览器端没登录'
        if(process.browser && !process.env.isMock && response.status === 200 && response.data.code === 401) {
            console.info(33333)
            // window.location.href = '/auth/login?redirectTo=/'
            redirect('/auth/login?redirectTo=/');
        }
    });
}