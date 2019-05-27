module.exports = {
    '/api/category': {
        "code": 200,
        "message": "SUCCESS",
        "result": (() => {
            let data  = [];
            for(let i = 1 ; i < 10 ; i++){
                let data2 = [];
                for(let j = 10 ; j < 22 ; j++){
                    data2.push({
                        id: j,
                        name: '复古' + j
                    });
                }
                data.push({
                    id: i,
                    name: '标签' + i,
                    list: data2
                });
            }
            return data;
        })()
    },
    '/api/tags': {
        "code": 200,
        "message": "SUCCESS",
        "result": (() => {
            let data  = [];
            for(let i = 1 ; i < 10 ; i++){
                let data2 = [];
                for(let j = 10 ; j < 22 ; j++){
                    data2.push({
                        id: j,
                        name: '复古' + j
                    });
                }
                data.push({
                    id: i,
                    name: '标签' + i,
                    list: data2
                });
            }
            return data;
        })()
    },
    '/api/imgList': {
        "code": 200,
        "message": "SUCCESS",
        "result": (() => {
            var data = [];
            for(var i = 0 ; i < 50 ; i ++){
                var url = 'https://nos.netease.com/cloud-website-bucket-test/5caf265ac09b83487651315c2faaff97.png';
                if(i > 5){
                    url = 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2927027193,1582031243&fm=26&gp=0.jpg';
                }
                data.push({
                    url: url,
                    width: 200,
                    top: null,
                    left: null,
                    height: getHeight()
                });
            }
            function getHeight(){
                var minHeight = 100;
                var height = Math.floor(Math.random()*250);
                while( height < minHeight){
                    height = Math.floor(Math.random()*250);
                }
                return height;
            }
            return data;
        })()
    },
}

