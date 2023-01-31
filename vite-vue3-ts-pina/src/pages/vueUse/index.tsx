import { defineComponent } from 'vue';
import { useMouse } from '@vueuse/core';
const { x, y, sourceType } = useMouse();
// console.log('x y', x, y, sourceType);
export default defineComponent({
    name: 'VueUse',
    setup() {
        return () => (
            <>
                <h1> 测试 vueuse 的鼠标坐标 </h1>
                <h3>
                    Mouse: x {x} y {y}
                </h3>
                <p>type: {sourceType}</p>
            </>
        );
    },
});
