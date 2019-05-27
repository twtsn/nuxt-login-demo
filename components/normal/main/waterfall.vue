<template>
   <div class="waterfall-index" @scroll="onScroll">
       <div class="waterfall">
           <div v-for="(item, index) in dataList" class="img-item" :key="index"
                :style="{width: item.width + 'px',left: item.left + 'px',top: item.top + 'px', height: item.height + 'px'}">
               <img :src="item.url" @click="onImgClick(index)"/>
           </div>
       </div>
       <div class="waterfall-footer">
           <div v-loading="true"></div>
       </div>
   </div>
</template>
<script>
    import API from '../../../api/index'
    export default {
        props:{
            initData: {
                type: Array, default(){return [];}
            }
        },
        data(){
            return {
                pageNum: 1,
                pageSize: 20,
                dataList: [],
                colWidth: 200,
                margin: 10,
                colLength:4,
                topRowList:{},
                imgMargin:{}
            };
        },
        created(){
            this.init();
        },
        methods:{
            init(){
                if(this.initData){
                    this.setPosition(this.initData, this.colLength);
                }
            },
            onScroll(e){
                if(this.timeoutVal){
                    window.clearTimeout(this.timeoutVal);
                }
                this.timeoutVal = window.setTimeout(() => {
                    let scrollHeight = e.target.scrollHeight - e.target.offsetHeight;
                    let scrollTop = e.target.scrollTop;
                    if(scrollHeight - scrollTop < 20) {
                        this.loadData();
                    }
                    this.timeoutVal = null;
                }, 500);
            },
            loadData(){
                this.getImgList().then(({data}) => {
                    this.setPosition(data.result, this.colLength);
                });
            },
            getDefaultHeightList(colLength){
                var heightList = [];
                for(var i = 0 ; i < colLength ; i++){
                    heightList.push(0);
                }
                return heightList;
            },
            setPosition(dataList, colLength){ // 每次添加数据时 所有数据重新计算位置
                dataList = this.dataList.concat(dataList);
                var heightList = this.getDefaultHeightList(colLength);
                var min = 0;
                var minIdx = 0;
                var topRowList = [];
                for(var k = 0 ; k < dataList.length ; k++){
                    var h = dataList[k].height;
                    min = Math.min.apply(null, heightList);
                    minIdx = heightList.findIndex(function (item) {
                        return item === min;
                    });
                    if(topRowList[minIdx]) { //计算每张图片所在的行数,通过数组下标来记录行数
                        var arr = topRowList[minIdx];
                        arr.push(k);
                    } else {
                        topRowList[minIdx] = [k];
                    }
                    dataList[k].top = min;
                    dataList[k].left = minIdx * dataList[k].width;
                    heightList[minIdx] += h;
                }
                this.dataList = this.calcMargin(dataList, topRowList);
            },
            getMargin(imgIndex, topRowList){
                for(let key in topRowList){
                    var itemArr = topRowList[key];
                    for(var i = 0 ; i < itemArr.length ; i++){
                        if(itemArr[i] === imgIndex){
                            return {row: i, col: +key};
                        }
                    }
                }
            },
            calcMargin(imgList, topRowList){
                var self = this;
                var margin = this.margin;
                imgList.forEach(function(item, index){
                    if(item.top === 0){
                        item.left = item.left + index * margin;
                    } else {
                       let mItem = self.getMargin(index, topRowList);
                        if(mItem){
                            item.top = mItem.row * margin + item.top;
                            item.left = mItem.col * margin + item.left
                        }
                    }
                });
                return imgList;
            },
            getImgList(){
               return this.$axios.get(API.get_img_list_url);
            },
            onImgClick(index){
                this.$emit('onImgClick', {dataList: this.dataList, index})
            }
        }
    }
</script>
<style lang="scss" scoped>
    .waterfall-index{
        height:100%;
        padding: 20px 0px 20px 20px;
        .waterfall{
            overflow: auto;
            height:100%;
            position: relative;
            .img-item{
                position:absolute;
                border: 1px solid #ccc;
                img{
                    cursor: pointer;
                    max-width: 100%;
                    max-height: 100%;
                }
            }
        }
        .waterfall-footer{
            position: fixed;
            bottom: 20px;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>