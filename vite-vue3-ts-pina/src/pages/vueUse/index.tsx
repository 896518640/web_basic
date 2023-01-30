import { defineComponent } from 'vue';
import { useMouse } from '@vueuse/core';
defineComponent({
    name: 'VueUse',
    setup() {
        const { x, y } = useMouse();
        console.log('x y', x, y);
        return (
            <>
                <h1> 测试 vueues 的鼠标坐标 </h1>
                <h3>
                    Mouse:x {x} y {y}
                </h3>
            </>
        );
    },
});
