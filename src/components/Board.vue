<template>
    <transition name="fade">
        <div class="content">
            <p class="title">留言板</p>
            <div v-for="(item, i) in stars" class="circle"
                 :class="{blink_1: item.blink === 'blink_1', blink_2: item.blink === 'blink_2', blink_3: item.blink === 'blink_3', blink_4: item.blink === 'blink_4', blink_5: item.blink === 'blink_5', scaleUp: i === index}"
                 :style="{left: item.left, top: item.top, width: item.width, height: item.height}">
                <p v-show="i === index">{{item.message}}</p>
            </div>
            <div class="input">
                <input type="text" v-model="message" placeholder="继续留言..."/>
                <button @click="submit" v-show="message.length > 0">发送</button>
            </div>

        </div>
    </transition>
</template>

<script>
    function random(start, end, unit) {
        console.log(arguments);
        let randNum = start + Math.floor(Math.random() * (end - start)) + 1;
        console.log(randNum);
        return `${randNum}${unit}`;
    }

    export default {
        data() {
            return {
                stars: [],
                show: false,
                message: '',
                index: -1,
            }
        },
        methods: {
            async submit() {
                try {
                    const response = await this.axios.post('/comments', {
                        comment: this.message
                    });
                    if (response.status === 200) {
                        let circle = {};

                        let randRange5 = Math.floor(Math.random() * 5) + 1;
                        circle.blink = (`blink_${randRange5}`);

                        let widthAndHeight = random(1, 5, 'px');
                        circle.height = circle.width = widthAndHeight;

                        circle.left = random(0, window.innerWidth, 'px');
                        circle.top = random(300, window.innerHeight, 'px');
                        circle.message = this.message;

                        this.stars.push(circle);
                        this.index = this.stars.length - 1;
                        this.message = '';
                    }
                } catch (e) {
                    this.$notify({
                        text: '发生了错误, 请稍后再试!',
                        type: 'error'
                    });
                }
            }
        },
        async mounted() {
            const response = await this.axios.get('/comments');
            for (let i = 0; i < response.data.list.length; i++) {
                let circle = {};

                let randRange5 = Math.floor(Math.random() * 5) + 1;
                circle.blink = (`blink_${randRange5}`);

                let widthAndHeight = random(1, 5, 'px');
                circle.height = circle.width = widthAndHeight;

                circle.left = random(0, window.innerWidth, 'px');
                circle.top =  random(250, window.innerHeight, 'px');
                circle.message = response.data.list[i].comment;

                this.stars.push(circle);
            }

            const self = this;

            setInterval(() => {
                self.index = Math.floor(Math.random() * self.stars.length)
            }, 5000)
        }
    }
</script>

<style scoped lang="less">
    .content {
        background: linear-gradient(0deg, rgb(25, 25, 112), rgb(33, 20, 0) 30%), rgb(0, 0, 0) 80%;
        height: 100vh;
        .title {
            margin: 0 auto;
            width: 80%;
            height: 60px;
            padding: 16px;
            background-color: white;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            font-size: larger;
            font-weight: 600;
            text-align: center;
        }
        .input {
            position: fixed;
            bottom: 0;
            width: 100%;
            display: flex;
            flex-direction: row;
            input {
                flex-grow: 1;
                padding: 10px 20px;
                border: none;
                outline: none;
                font-size: 20px;
            }
            button {
                background-color: white;
                color: black;
                border: none;
                font-size: 24px;
            }
        }
    }

    .circle {
        position: absolute;
        background-color: white;
        border-radius: 5px;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        transition: all 0.8s ease-in-out;
        overflow: hidden;

        p {
            font-size: 20px;
            padding: 0 20px;
            max-width: 80vw;
            word-break: break-all;
            max-lines: 4;
        }
    }

    .scaleUp {
        left: 10% !important;
        top: 80px !important;
        width: 80% !important;
        height: 150px !important;
        animation: none !important;
    }

    .message {
        background-color: white;
        color: darkgray;
        border-radius: 60px;
        position: absolute;
        padding: 20px 40px;
    }

    .blink_1 {
        animation-name: blink10;
    }

    .blink_2 {
        animation-name: blink20;
    }

    .blink_3 {
        animation-name: blink30;
    }

    .blink_4 {
        animation-name: blink40;
    }

    .blink_5 {
        animation-name: blink50;
    }

    @keyframes blink10 {
        0%, 100% {
            background-color: white;
        }
        20% {
            background-color: transparent;
        }
    }

    @keyframes blink20 {
        0%, 100% {
            background-color: white;
        }
        40% {
            background-color: transparent;
        }
    }

    @keyframes blink50 {
        0%, 100% {
            background-color: white;
        }
        50% {
            background-color: transparent;
        }
    }

    @keyframes blink30 {
        0%, 100% {
            background-color: white;
        }
        60% {
            background-color: transparent;
        }
    }

    @keyframes blink40 {
        0%, 100% {
            background-color: white;
        }
        80% {
            background-color: transparent;
        }
    }
</style>
