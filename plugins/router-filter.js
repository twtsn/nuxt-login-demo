// import Cookie from 'js-cookie';
// export default ({ app }) => {
//     app.router.beforeEach((to, from, next) => {
//         if(!process.browser){
//             let isLogin = app.store.state.isLogin;
//             if(isLogin) {
//                 Cookie.set('isLogin', true);
//                 next();
//             } else {
//                 app.$axios.get('api/users/uibt').then(({data}) => {
//                     if(data.code === 200) {
//                         Cookie.set('isLogin', true);
//                     } else {
//                         Cookie.set('isLogin', false);
//                     }
//                 });
//                 next();
//             }
//         } else {
//         }
//         next();
//     })
// }