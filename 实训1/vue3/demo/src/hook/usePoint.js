import {reactive,onMounted,onBeforeUnmount} from 'vue'
  function usePoint(){
    const point=reactive({
        x:0,
        y:0
      })
      const savePoint=(event)=>{
        console.log(event);
        point.x=event.pageX
        point.y=event.pageY
      
      }
      // 挂载后
      onMounted(()=>{
        window.addEventListener('click',savePoint)
      })
      // 销毁后
      onBeforeUnmount(()=>{
        window.addEventListener('click',savePoint)
      })
      return point
  }
  export default usePoint
