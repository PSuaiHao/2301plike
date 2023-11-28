let contents = {
    state: {
        list: [
            {
                flag: false,
                name: '抽烟',
                id: 1
            },
            {
                flag: false,
                name: '喝酒',
                id: 2
            }
        ],
        checked:false
    },
    mutations: {
        // 添加
        SETADD(state, val) {
            if (!state.list.find(item => item.name == val)) {
                state.list.push({
                    flag: false,
                    name: val,
                    id: +new Date()
                })
            }
        },
        // 删除单个
        HANDLDEL(state, val) {
            state.list = state.list.filter(item => item.id != val)
        },
        // 删除已完成
        DELCHECKED(state) {
            state.list = state.list.filter(item => !item.flag)
        },
        // 全选
        CHECKEDTRUE(state,val){
            state.list.forEach((item) => {
                item.flag=val
            })
        },
        // 反选
        CHANGEFX(state){
           state.checked= state.list.every(item=>item.flag)
        }
    },
    actions: {}
}
export default contents