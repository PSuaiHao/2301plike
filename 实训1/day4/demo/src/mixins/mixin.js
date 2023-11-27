const querydate = {
    data() {
        return {
            list: [{
                flag: false,
                txt: '抽烟',
                id: new Date().getTime()
            }],
            txt: '',
        }
    },
    methods: {
        // 添加
        add() {
            if (this.txt && this.txt != 'null') {
                if (!this.list.find(item => item.txt == this.txt)) {
                    this.list.push({
                        flag: false,
                        txt: this.txt,
                        id: new Date().getTime()
                    })
                    console.log(this.list);
                } else {
                    alert('已经存在')
                }

            } else {
                alert('不能为空或不能为null')
            }
            this.txt = ''
        },
        // 删除
        deleteItem(val) {
            this.list = this.list.filter(item => item.id != val)
        },
        // 清除已完成数据
        clearFinishng() {
            this.list = this.list.filter(item => !item.flag)
        },
    },
    computed: {
        finishing() {
            return this.list.filter(item => item.flag).length
        },


        allChecked: {
            get() {
                return this.list.every(item => item.checked)
            },
            set(value) {
                this.list.forEach(item => item.checked = value)
            },
        }
    }
}
export default querydate