<template>
    <div>
        <div class="top">
            <div class="gsgk">公司概况 <span>更新时间：2035年6月19日 12:35:59</span></div>
            <ul>
                <li>
                    <i class="el-icon-collection"></i>
                    <div class="rig">
                        <p>资产数量</p>
                        <h2>7654</h2>
                    </div>
                </li>
                <li>
                    <i class="el-icon-collection"></i>
                    <div class="rig">
                        <p>资产总价值</p>
                        <h2>6988</h2>
                    </div>
                </li>
                <li>
                    <i class="el-icon-collection"></i>
                    <div class="rig">
                        <p>应收账款</p>
                        <h2>548</h2>
                    </div>
                </li>
                <li>
                    <i class="el-icon-collection"></i>
                    <div class="rig">
                        <p>应付账款</p>
                        <h2>26937</h2>
                    </div>
                </li>
                <li>
                    <i class="el-icon-collection"></i>
                    <div class="rig">
                        <p>账户余额</p>
                        <h2>8698</h2>
                    </div>
                </li>
                <li>
                    <i class="el-icon-collection"></i>
                    <div class="rig">
                        <p>在职员工数</p>
                        <h2>7383</h2>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bottom">
            <!-- 左边 -->
            <div class="left">
                <!-- 上面账户余额和项目收入 -->
                <div class="left-top">
                    <ul>
                        <li id="main">

                        </li>
                        <li id="xmsr">

                        </li>
                    </ul>
                </div>
                <!-- 资产总价值和在职员工数 -->
                <div class="left-right">
                    <div class="zcjz" id="zcjz">

                    </div>

                    <div class="zyrs" id="zyrs"></div>

                </div>
            </div>

            <!-- 右边 -->
            <div class="right">
                <div class="right-top">
                    <div class="gg">
                        <h3>公告</h3>
                        <p>查看更多 <i class="el-icon-arrow-right"></i></p>
                    </div>
                    <ul>
                        <li>
                            <el-button type="success" plain round size="mini">消息</el-button>
                            <p>系统新版本升级通知，新介绍</p>
                        </li>
                        <li>
                            <el-button type="danger" plain round size="mini">消息</el-button>
                            <p>系统新版本升级通知，新介绍</p>
                        </li>
                        <li>
                            <el-button type="success" plain round size="mini">消息</el-button>
                            <p>系统新版本升级通知，新介绍</p>
                        </li>
                        <li>
                            <el-button type="danger" plain round size="mini">消息</el-button>
                            <p>系统新版本升级通知，新介绍</p>
                        </li>
                        <li>
                            <el-button type="danger" plain round size="mini">消息</el-button>
                            <p>系统新版本升级通知，新介绍</p>
                        </li>
                        <li>
                            <el-button type="danger" plain round size="mini">消息</el-button>
                            <p>系统新版本升级通知，新介绍</p>
                        </li>
                    </ul>
                </div>
                <div class="yjwcd" id="yjwcd">

                </div>
            </div>
        </div>
    </div>
</template>

<script>

import * as echarts from 'echarts';


export default {
    data() {
        return {};
    },
    methods: {
        // 账户余额
        queryzhye() {
            var chartDom = document.getElementById('main');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                title: {
                    text: '账户余额'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['账户D', '账户C', '账户B', '账户A']
                },
                series: [
                    {
                        type: 'bar',
                        data: [2368, 2100, 1685, 3480]
                    }
                ]
            };

            option && myChart.setOption(option);
        },
        // 项目收入
        queryxmsr() {
            var chartDom = document.getElementById('xmsr');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                title: {
                    text: '项目收入'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['项目D', '项目C', '项目B', '项目A']
                },
                series: [
                    {
                        type: 'bar',
                        data: [2368, 2100, 1685, 3480],
                        showBackground: true,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                { offset: 0, color: '#fee1ca' },
                                { offset: 0.5, color: '#fcae6f' },
                                { offset: 1, color: '#fb7b13' }
                            ])
                        },
                        emphasis: {
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    { offset: 0, color: '#fee1ca' },
                                    { offset: 0.7, color: '#fcae6f' },
                                    { offset: 1, color: '#fb7b13' }
                                ])
                            }
                        },
                    }
                ]
            };

            option && myChart.setOption(option);

        },
        // 资产总价值
        queryzcjz() {
            var chartDom = document.getElementById('zcjz');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['06/16', '06/17', '06/18', '06/19', '06/20', '06/21', '06/22']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        color: '#2ac857',
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgb(253, 254, 254)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(214, 244, 223)'
                                }
                            ])
                        }
                    }
                ]
            };

            option && myChart.setOption(option);
        },
        // 在职员工数
        queryzyrs() {
            var chartDom = document.getElementById('zyrs');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['06/16', '06/17', '06/18', '06/19', '06/20', '06/21', '06/22']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        color: '#fb7b13',
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgb(255, 254, 254)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(255, 244, 237)'
                                }
                            ])
                        }
                    }
                ]
            };

            option && myChart.setOption(option);
        },
        queryyjwcd() {
            var chartDom = document.getElementById('yjwcd');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    bottom: '5%',
                    left: 'center',
                    icon: 'circle'
                },
                series: [
                    {
                        name: '本月业绩',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: true,
                            position: 'center',
                            formatter: "{total|" + "89%" + "}" + "\n\r" + "{active|完成度}",
                            rich: {
                                total: {
                                    fontSize: 35,
                                    fontFamily: "微软雅黑",
                                    color: "#454c5c",
                                },
                                active: {
                                    fontFamily: "微软雅黑",
                                    fontSize: 16,
                                    color: "#6c7a89",
                                    lineHeight: 30,
                                },
                            },
                        },

                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 20,
                                fontWeight: 'bold'
                            }
                        },

                        labelLine: {
                            show: true,
                        },
                        data: [
                            { value: 89, name: '已完成', itemStyle: { color: '#1890ff' } },
                            { value: 11, name: '未完成', itemStyle: { color: '#e9eaee' } }
                        ]

                    }
                ]
            };

            option && myChart.setOption(option);

        }

    },
    created() {
        this.$nextTick(() => {
            this.queryzhye()
            this.queryxmsr()
            this.queryzcjz()
            this.queryzyrs()
            this.queryyjwcd()
        })

    }
};
</script>

<style lang="scss" scoped>
.top {
    padding: 25px 15px;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 15px;

    span {
        font-size: 14px;
        color: #bbb;
    }

    ul {
        width: 100%;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        li {
            width: 15%;
            display: flex;
            align-items: center;
            background-color: #1890ff;
            border-radius: 5px;
            height: 90px;
            color: #fff;

            i {
                font-size: 30px;
                margin: 0 10px;
            }

            &:nth-child(2) {
                background-color: #ff8e8e;
            }

            &:nth-child(3) {
                background-color: #8e7bfc;
            }

            &:nth-child(4) {
                background-color: #ffb700;
            }

            &:nth-child(5) {
                background-color: #92dd8b;
            }

            &:nth-child(6) {
                background-color: #5dcce5;
            }
        }
    }
}

.bottom {
    width: 100%;
    display: flex;
    height: 800px;

    .left {
        width: 80%;
        margin-right: 2%;
        height: 100%;

        ul {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            li {
                width: 49%;
                height: 200px;
                background-color: #fff;
                border-radius: 5px;
                padding: 10px;
            }
        }

        .zcjz,
        .zyrs {
            width: 100%;
            height: 300px;
            background-color: #fff;
            padding: 10px;
            margin-top: 10px;
            border-radius: 5px;
        }
    }

    .right {
        width: 18%;
        height: 100%;

        .right-top {
            width: 100%;
            background-color: #fff;
            padding: 10px;
            border-radius: 5px;

            .gg {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                h3 {
                    font-weight: normal;
                }

                p {
                    color: #1890ff;
                }
            }

            ul li {
                width: 100%;
                display: flex;
                align-items: center;
                margin-top: 20px;

                p {
                    width: 180px;
                    font-size: 14px;
                    margin-left: 10px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;

                }
            }
        }

        .yjwcd {
            width: 100%;
            height: 300px;
            margin-top: 20px;
            background-color: #fff;
        }
    }
}</style>