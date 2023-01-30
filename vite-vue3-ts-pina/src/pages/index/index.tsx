import { defineComponent } from 'vue';
import Pina from '@/components/usePinia';
export default defineComponent({
    setup() {
        return () => {
            return (
                <div class="container">
                    <div className="title">我是首页</div>
                    <Pina></Pina>
                </div>
            );
        };
    },
});
