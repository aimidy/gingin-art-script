import { createApp } from 'vue';

const app = createApp({
    data() {
        return {
            message: '歡迎來到範例網站'
        };
    },
    methods: {
        showAlert() {
            alert('按鈕被點擊了！');
        }
    }
});

app.mount('#app');
