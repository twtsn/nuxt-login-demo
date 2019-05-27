<template>
    <div class="score-index">
        <el-popover :visible-arrow="false" popper-class	="score-popover" v-model="visiable"
                    placement="bottom"
                    width="200"
                    trigger="click">
            <div class="score-box">
                <div class="score-body">
                    <div class="score-item">
                        <ul>
                            <li> <el-checkbox>全部</el-checkbox></li>
                            <li v-for="(item, index) in scoreList" :key="index">
                                <el-checkbox v-model="item.checked" @change="(v) => {onChecked(v, item)}">{{item.score}}分</el-checkbox>
                                <div class="score-stars"><i class="el-icon-star-on" v-for="i in item.score" :key="`start${i}`"></i></div>
                            </li>
                        </ul>
                    </div>
                    <div class="score-item-desc">
                        <h3>{{activeItem.title}}</h3>
                        <p>{{activeItem.desc}}</p>
                    </div>
                </div>
                <footer class="score-footer">
                    <el-button size="small" @click="visiable = false">取消</el-button> <el-button size="small">确定</el-button>
                </footer>
            </div>
            <label  slot="reference">评分</label>
        </el-popover>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                visiable: false,
                activeItem:{title: '', desc: ''},
                scoreList: [
                    {
                        score: 5,
                        title: '5分标准',
                        desc: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                        checked: false,
                    },
                    {
                        score: 4,
                        title: '4分标准',
                        desc: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                        checked: false,
                    },
                    {
                        score: 3,
                        title: '3分标准',
                        desc: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                        checked: false,
                    },
                    {
                        score: 2,
                        title: '2分标准',
                        desc: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                        checked: false,
                    },
                    {
                        score: 1,
                        title: '1分标准',
                        desc: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                        checked: false,
                    }
                ],
            };
        },
        created(){
          this.activeItem = this.scoreList[0];
        },
        methods:{
            onChecked(checked, item){
                this.activeItem = item;

                let checkedList = [];
                this.scoreList.forEach((item) => {
                    if(item.checked){
                        checkedList.push(item.score);
                    }
                });
                this.$emit('onChange', checkedList);
            }
        }
    }
</script>