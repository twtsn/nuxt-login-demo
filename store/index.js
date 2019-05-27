import API from '../api'
export const state = () => ({
    isLogin: false,
    loginInfo: {
        name: ''
    },
    tagsList: [],
    categoryList: []
})

export const mutations = {
    setName (state, text) {
        state.loginInfo.name = text;
    },
    setLoginAuth(state, trueOrFalse){
        state.isLogin = trueOrFalse;
    },
    setLoginInfo(state, loginInfo){
        state.loginInfo = loginInfo;
    },
    setTagsList(state, list){
        state.tagsList = list;
    },
    setCategoryList(state, list){
        state.categoryList = list;
    },
}
export const actions = {
    async nuxtServerInit({commit, state}, {$axios, req, resp}) {
        // 服务端初始化
        let {data} = await $axios.get(API.get_login_info_url);
        if(data.code === 200) {
            commit('setLoginAuth', true);
            commit('setLoginInfo', data.result);
        } else {
            commit('setLoginAuth', false);
        }
    },
    async queryImgList({commit, state}){
        let {data} = await this.$axios.get(API.get_tags_url);
        commit('setTagsList', data.result);
    },
    async queryCategoryList({commit, state}){
        let {data} = await this.$axios.get(API.get_category_url);
        commit('setCategoryList', data.result);
    }
}