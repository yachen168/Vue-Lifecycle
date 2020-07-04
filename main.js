const vm = new Vue({
    el: '#app',
    data: {
        isComponentWithOutKeepAliveDisplay: false,
        isComponentWithKeepAliveDisplay: false
    },
    components: {
        componentWithOutKeepAlive: () =>
            import ('./componentWithOutKeepAlive.js'),
        componentWithKeepAlive: () =>
            import ('./componentWithKeepAlive.js')
    },
    template: `
                <div>
                    <h1>在 console 中觀察二種 case 的 lifecycle</h1>
                    <section>
                        <h2>無 keep-alive：</h2>
                        <button @click="toggleComponentWithOutKeepAlive" class="toggleComponentButton">點擊觸發<br>創建 / 銷毀 component</button>
                        <componentWithOutKeepAlive v-if="isComponentWithOutKeepAliveDisplay"></componentWithOutKeepAlive>
                    </section>
                    
                    <section>
                        <h2>有 keep-alive：</h2>
                        <button @click="toggleComponentWithKeepAlive" class="toggleComponentButton">點擊觸發<br>激活 / 停用 component</button>
                        <keep-alive> 
                            <componentWithKeepAlive v-if="isComponentWithKeepAliveDisplay"></componentWithKeepAlive>
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