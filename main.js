Vue.component('component', {
    template: `
                <div class="component">
                    <button @click="updateData" class="updateButton">點擊更新 component 數據</button>
                    <p>{{componentMsg}}</p>
                </div>
            `,
    data() {
        return {
            componentMsg: '我是來自 component 的數據'
        };
    },
    methods: {
        updateData() {
            const num = Math.floor(Math.random() * 100);
            this.componentMsg = `component 的數據被更改了！ ${num}`;
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
        console.log('DOM 掛載之前，<p> 為：', h1Tag); // DOM 掛載之前，<p> 為：null
    },
    mounted() {
        const h1Tag = document.querySelector('h1');
        console.log('DOM 掛載完成，<p> 為：', h1Tag); // DOM 掛載完成，<p> 為： <p>​我是來自 component 的數據​</p>​
    },
    beforeUpdate() {
        const h1Tag = document.querySelector('h1');
        console.log('更新之前的 <p> 內容為：', h1Tag.innerText); // 更新之前的 <p> 內容為： 我是來自 component 的數據
    },
    updated() {
        const h1Tag = document.querySelector('h1');
        console.log('更新之後的 <p> 內容為：', h1Tag.innerText); // 更新之後的 <p> 內容為： 更新之後的 <p> 內容為： component 的數據被更改了！
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
    }
});

const vm = new Vue({
    el: '#app',
    data: {
        isComponentWithOutKeepAliveDisplay: false,
        isComponentWithKeepAliveDisplay: false
    },
    template: `
                <div>
                    <h1>在 console 中觀察二種 case 的 lifecycle</h1>
                    <section>
                        <h2>無 keep-alive：</h2>
                        <button @click="toggleComponentWithOutKeepAlive" class="toggleComponentButton">點擊觸發<br>創建 / 銷毀 component</button>
                        <component v-if="isComponentWithOutKeepAliveDisplay"></component>
                    </section>
                    
                    <section>
                        <h2>有 keep-alive：</h2>
                        <button @click="toggleComponentWithKeepAlive" class="toggleComponentButton">點擊觸發<br>激活 / 停用 component</button>
                        <keep-alive> 
                            <component v-if="isComponentWithKeepAliveDisplay"></component>
                        </keep-alive>
                    </section>
                </div>
            `,
    methods: {
        toggleComponentWithOutKeepAlive() {
            this.isComponentWithOutKeepAliveDisplay = !this.isComponentWithOutKeepAliveDisplay;
        },
        toggleComponentWithKeepAlive() {
            this.isComponentWithKeepAliveDisplay = !this.isComponentWithKeepAliveDisplay;
        },
    }
});