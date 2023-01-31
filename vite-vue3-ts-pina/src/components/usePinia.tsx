import { defineComponent, Ref, ref } from 'vue';
import { useUserStore } from '@/store/user';
export default defineComponent({
    setup() {
        const useStore = useUserStore();
        console.log('useStore', useStore);
        const name = ref('');
        function changeName(name: Ref): void {
            console.log('name: ', name);
            useStore.updateName(name.value);
            name.value = '';
        }
        function onInput(e: any): void {
            const val = e.target.value;
            name.value = val;
        }
        return () => {
            return (
                <>
                    <p> pinaStore: {useStore.name}</p>
                    <p> name: {name.value}</p>
                    <input
                        type="text"
                        placeholder="请输入姓名"
                        value={name.value}
                        onInput={(e) => onInput(e)}
                    />
                    <button onClick={() => changeName(name)}>修改</button>
                </>
            );
        };
    },
});
