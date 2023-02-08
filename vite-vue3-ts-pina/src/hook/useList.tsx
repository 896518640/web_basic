import { ref } from "vue";
export default function useList<ItemType extends object>(listReqFn: Function) {
    const list = ref<ItemType[]>([]);
    const total = ref(0);
    const curPage = ref(1);
    const pageSize = ref(10);
    const loading = ref(false);

    const loadData = async (page = curPage.value) => {
        // 设置加载中
        loading.value = true;
        try {
            const {
                data,
                meta: { total: count },
            } = await listReqFn(pageSize.value, page);
            list.value = data;
            total.value = count;
        } catch (error) {
            console.log('请求出错了');
        } finally {
            // 关闭加载中
            loading.value = false;
        }
    };
}
