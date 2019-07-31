<!--suppress HtmlRequiredAltAttribute -->
<template>
    <transition name="fade">
        <div class="content">
            <div class="first" v-if="slide.first">
                <div class="thanks">
                    <h1>SAVE THE DATE</h1>
                    <h2 v-scroll-reveal.reset>感谢你的出席与见证!</h2>
                    <h5 v-scroll-reveal.reset>向下滑动</h5>
                    <img class="arrow"
                         v-scroll-reveal.reset
                         src="https://wedding-store.oss-cn-chengdu.aliyuncs.com/arrow_downward_black_18dp.png"
                    >
                    <div class="placeholder"></div>
                    <h4 v-scroll-reveal.reset>旋转手机90度</h4>
                </div>
                <div class="landscape">
                    <div class="divider white"></div>
                    <img
                            v-scroll-reveal.reset
                            src="https://wedding-store.oss-cn-chengdu.aliyuncs.com/32611564399986_pic_hd.jpg"
                    >
                    <div class="divider">
                        <p
                                v-scroll-reveal.reset
                        >Sans toi les émotions d'aujourd'hui ne seraient que la peau morte des émotions d'autrefois.</p>
                        <span v-scroll-reveal.reset>--- Le fabuleux destin d'Amélie Poulai</span>
                    </div>
                    <img
                            v-scroll-reveal.reset
                            src="https://wedding-store.oss-cn-chengdu.aliyuncs.com/32431564399658_pic_hd.jpg"
                    >
                    <div class="divider">
                        <p v-scroll-reveal.reset>You had me at hello
                            <br>
                        </p>
                        <span v-scroll-reveal.reset>--- Jerry Maguire</span>
                    </div>
                    <img
                            v-scroll-reveal.reset
                            src="https://wedding-store.oss-cn-chengdu.aliyuncs.com/32461564399681_pic_hd.jpg"
                    >
                    <div class="divider">
                        <p
                                v-scroll-reveal.reset
                        >Take me away from this big bad world, and agree to marry me.</p>
                        <span v-scroll-reveal.reset>--- Coffee & TV by Blur</span>
                    </div>
                    <img
                            v-scroll-reveal.reset
                            src="https://wedding-store.oss-cn-chengdu.aliyuncs.com/31971564396702_pic_hd.jpg"
                    >
                    <div class="divider">
                        <p v-scroll-reveal.reset>I promise you, sing to you when all the music die.</p>
                        <span v-scroll-reveal.reset>--- Marry me by Train</span>
                    </div>
                    <img
                            v-scroll-reveal.reset
                            src="https://wedding-store.oss-cn-chengdu.aliyuncs.com/18871561469146_pic_hd.jpg"
                    >
                    <div class="divider">
                        <p v-scroll-reveal.reset>She's the one that gonna save me</p>
                        <span v-scroll-reveal.reset>--- And I love her by Passenger</span>
                    </div>
                    <img
                            v-scroll-reveal.reset
                            src="https://wedding-store.oss-cn-chengdu.aliyuncs.com/32621564399991_pic_hd.jpg"
                    >
                    <div class="divider small"></div>
                    <img
                            v-scroll-reveal.reset
                            class="portrait"
                            src="https://wedding-store.oss-cn-chengdu.aliyuncs.com/22361563083088_pic_hd.jpg"
                    >
                    <div class="divider">
                        <p>AND</p>
                    </div>
                    <img
                            v-scroll-reveal.reset
                            class="portrait"
                            src="https://wedding-store.oss-cn-chengdu.aliyuncs.com/32311564397857_pic_hd.jpg"
                    >
                    <div class="divider large">
                        <p class="last grow" v-scroll-reveal.reset>ARE GONNA BE THE ONE</p>
                        <transition name="fade">
                            <img
                                    :class="{fullUp: fullUp, heart: true}"
                                    v-show="message.length > 0"
                                    @click="submit"
                                    src="https://wedding-store.oss-cn-chengdu.aliyuncs.com/heart.png"
                            >
                        </transition>
                        <div class="message">
                            <input v-model="message" type="text" placeholder="留下你的祝福">
                        </div>
                    </div>
                </div>
            </div>
            <audio
                    id="audio"
                    ref="audio"
                    hidden
                    loop
                    autoplay
                    src="https://wedding-store.oss-cn-chengdu.aliyuncs.com/marryme.mp3"
            ></audio>
            <img
                    alt="Marry Me"
                    class="music"
                    src="https://wedding-store.oss-cn-chengdu.aliyuncs.com/audiotrack_white_18dp.png"
                    @click="play"
            >
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Photos",
        data() {
            return {
                slide: {
                    first: true
                },
                message: "",
                fullUp: false
            };
        },
        methods: {
            play() {
            },
            async submit() {
                try {
                    const response = await this.axios.post('/comments', {
                        comment: this.message
                    });
                    if (response.status === 200) {
                        this.$router.push('/board');
                    } else {
                        alert(response.data.message);
                    }
                } catch (err) {
                    alert('发生了错误, 请稍后再试吧.');
                }
            }
        }
    };
</script>

<style scoped lang="less">
    div.content {
        div.first {
            div.thanks {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                justify-items: center;
                height: 150vh;
                margin: 0;

                div.placeholder {
                    height: 50vh;
                }

                div.corner {
                    top: 0;
                    position: absolute;
                    width: 100%;

                    img.left-corner {
                        width: 100px;
                        height: 100px;
                    }

                    img.right-corner {
                        float: right;
                        width: 100px;
                        height: 100px;
                        transform: rotateY(180deg);
                    }
                }


                img.arrow {
                    padding: 4px;
                    width: 36px;
                    height: 36px;
                    border-radius: 32px;
                    border: 2px solid black;
                }
            }

            div.landscape {
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: black;
                overflow-x: hidden;

                .divider {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    justify-items: center;
                    height: 40vh;
                    width: 100%;
                    background-color: black;

                    p {
                        color: white;
                        padding: 40px;
                        font-family: fantasy;
                    }

                    span {
                        padding: 2px 20px;
                        align-self: flex-end;
                        color: gray;
                    }
                }

                .small {
                    height: 20vh;
                }

                .large {
                    height: 100vh;
                }

                .white {
                    background-color: white;
                }

                .gradient {
                    background: linear-gradient(black, white);
                    height: 60vh;
                }

                .grow {
                    flex-grow: 1;
                }

                img {
                    display: block;
                    line-height: 0;
                    height: 110vh;
                    object-fit: cover;
                    margin: -2px 0;
                    padding: 0;
                    border: none;
                    animation: scaleUp 15s alternate infinite ease-in-out;
                }

                img.portrait {
                    width: 100vw;
                    height: auto;
                }

                p.last {
                    line-height: 20;
                }

                div.message {
                    input {
                        margin-bottom: 50px;
                        padding: 10px 20px;
                        font-size: 20px;
                        outline: none;
                    }
                }

                img.heart {
                    width: 100px;
                    height: 100px;
                    animation: 1.2s infinite beatHeart;
                    margin: 15px;
                }
            }
        }

        img.music {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 36px;
            height: 36px;
            padding: 8px;
            border: 2px solid white;
            border-radius: 36px;
            animation: rotate 2s infinite ease-in-out;
        }
    }

    @keyframes scaleUp {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.1);
        }
    }

    @keyframes rotate {
        0% {
            transform: rotateZ(0);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }

    @keyframes beatHeart {
        0% {
            transform: scale(1);
        }
        25% {
            transform: scale(1.1);
        }
        40% {
            transform: scale(1);
        }
        60% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
