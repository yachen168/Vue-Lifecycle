export default {
    template: `
            <div class="componentWithKeepAlive">
                <button @click="updateData" class="updateButton">點擊更新 component 數據</button>
                <h3>{{componentMsg}}</h3>
            </div>
    `,
    data() {
        return {
            componentMsg: 0
        };
    },
    methods: {
        updateData() {
            this.componentMsg++;
        }
    },
    beforeCreate() {
        console.log('組件創建之前，componentMsg 為：', this.$data.componentMsg); // 組件創建之前，componentMsg 為 undefined
    },
    created() {
        console.log('組件創建完成，componentMsg 為：', this.$data.componentMsg); // 組件創建完成，componentMsg 為： 0
    },
    beforeMount() {
        const h3Tag = document.querySelector('.componentWithKeepAlive h3');
        console.log('DOM 掛載之前，<h3> 為：', h3Tag); // DOM 掛載之前，<h3> 為：null
    },
    mounted() {
        const h3Tag = document.querySelector('.componentWithKeepAlive h3');
        console.log('DOM 掛載完成，<h3> 為：', h3Tag); // DOM 掛載完成，<h3> 為： <h3>​0</h3>​
    },
    beforeUpdate() {
        const h3Tag = document.querySelector('.componentWithKeepAlive h3');
        console.log('DOM 更新之前的 <h3> 內容為：', h3Tag.innerText); // DOM 更新之前的 <h3> 內容為： num
    },
    updated() {
        const h3Tag = document.querySelector('.componentWithKeepAlive h3');
        console.log('DOM 更新之後的 <h3> 內容為：', h3Tag.innerText); // DOM 更新之後的 <h3> 內容為： num+1
    },
    // 有使用 <keep-alive>
    activated() {
        console.log('組件被激活了');
    },
    deactivated() {
        console.log('組件被停用了');
    }
};