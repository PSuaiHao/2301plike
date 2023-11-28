let getters={
      headers : state =>state.headers,
      contents: state =>state.contents,
      footers : state =>state.footers,      
    //   反选
    allcheck:state =>state.contents.list.every(item=>item.flag),
    //   已完成长度
    flagtrue:state=>state.contents.list.filter(item=>item.flag).length,
    // 数组的总长度
    listlength:state=>state.contents.list.length
}
export default getters