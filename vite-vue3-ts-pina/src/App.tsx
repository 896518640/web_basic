import Pina from '@/components/usePinia';
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
console.log('pina', Pina);
// ways 1

// export default defineComponent({
//   setup(props){
//     return () => {
//       return <>
//       <div class="app-container">
//         通过setup 函数编写

//       </div>
//     </>
//     }
//   }
// })

// ways 2
// export default function (){
//   return <>
//     <div class="container">
//       通过默认导出组件形式书写
//     </div>
//   </>
// }

// ways 3
export default defineComponent({
    render() {
        return (
            <>
                <div class="app-container">
                    <RouterView />
                </div>
            </>
        );
    },
});
