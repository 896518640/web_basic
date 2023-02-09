import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
export default defineComponent({
    setup() {
        return () => {
            <a-layout>
                <a-layout-header>Header</a-layout-header>
                <a-layout>
                    <a-layout-sider>Sider</a-layout-sider>
                    <a-layout-content>
                        <RouterView />
                    </a-layout-content>
                </a-layout>
                <a-layout-footer>Footer</a-layout-footer>
            </a-layout>;
        };
    },
});
