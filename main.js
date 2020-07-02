Vue.component('component', {
    template: `
                <div class="component">
                    <h1>{{componentMsg}}</h1>
                    <button @click="updateData" class="updateButton">更新 component 數據</button>
                </div>
            `,
    data() {
        return {
            componentMsg: '我是來自 component 的數據'
        };
    },
    methods: {
        updateData() {
            this.componentMsg = '被更改後的 component 數據！'
        }
    },
    beforeCreate() {
        console.log('組件創建之前，componentMsg 為：', this.$data.componentMsg); // 組件創建之前，componentMsg 為 undefined
    },
    created() {
        console.log('組件創建完成，componentMsg 為：', this.$data.componentMsg); // 組件創建完成，componentMsg 為： 我是來自 component 的數據
    },
    beforeMount() {
        const h1Tag = document.querySelector('h1');
        console.log('DOM 掛載之前，<h1> 為：', h1Tag); // DOM 掛載之前，<h1> 為：null
    },
    mounted() {
        const h1Tag = document.querySelector('h1');
        console.log('DOM 掛載完成，<h1> 為：', h1Tag); // DOM 掛載完成，<h1> 為： <h1>​我是來自 component 的數據​</h1>​
    },
    beforeUpdate() {
        const h1Tag = document.querySelector('h1');
        console.log('更新之前的 <h1> 內容為：', h1Tag.innerText); // 更新之前的 <h1> 內容為： 我是來自 component 的數據
    },
    updated() {
        const h1Tag = document.querySelector('h1');
        console.log('更新之後的 <h1> 內容為：', h1Tag.innerText); // 更新之後的 <h1> 內容為： 被更改後的 component 數據！
    },
    beforeDestroy() {
        console.log('銷毀之前');
    },
    destroyed() {
        console.log('銷毀完成');
    },
    activated() {
        console.log('組件被激活了');
    },
    deactivated() {
        console.log('組件被停用');
    },

});

const vm = new Vue({
    el: '#app',
    data: {
        isDisplay: true,
    },
    template: `
                <div>
                    <keep-alive> 
                        <component v-if="isDisplay"></component>
                    </keep-alive> 
                    <button @click="toggleComponent" class="toggleComponentButton"> 創建 / 銷毀 component</button>
                    <p>註：在 console 中觀察</p>
                </div>
            `,
    methods: {
        toggleComponent() {
            this.isDisplay = !this.isDisplay;
        }
    }
});