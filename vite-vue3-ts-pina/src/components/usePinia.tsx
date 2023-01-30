import { defineComponent, ref } from 'vue';
import { useUserStore } from '@/store/user';
export default defineComponent({
    setup() {
        const useStore = useUserStore();
        console.log(useStore);
        const name = ref('');
        function changeName(name: string): void {
            console.log('name: ', name);
            useStore.updateName(name);
        }
        function onInput(e: any): void {
            const val = e.target.value;
            name.value = val;
        }
        return () => {
            return (
                <>
                    <p> {useStore.name}</p>
                    <p> 111</p>
                    <input
                        type="text"
                        placeholder="请输入姓名"
                        value={name.value}
                        onInput={(e) => onInput(e)}
                    />
                    <button onClick={() => changeName(name.value)}>修改</button>
                </>
            );
        };
    },
});
