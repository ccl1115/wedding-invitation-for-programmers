<!--suppress HtmlRequiredAltAttribute -->
<template>
    <div class="content">
        <transition name="fade">
            <div class="first" v-if="slide.first">
                <div class="thanks">
                    <h2>感谢你的出席与见证!</h2>
                    <h5>向下滑动</h5>
                    <img src="../images/arrow_downward_black_18dp.png"/>
                    <div class="placeholder"></div>
                    <h4>旋转手机90度</h4>
                </div>
                <div class="landscape">
                    <div class="divider white"></div>
                    <img src="../images/32611564399986_pic_hd.jpg"/>
                    <div class="divider">
                        <p>Sans toi les émotions d'aujourd'hui ne seraient que la peau morte des émotions d'autrefois.</p>
                        <span>--- Le fabuleux destin d'Amélie Poulai</span>
                    </div>
                    <img src="../images/32431564399658_pic_hd.jpg"/>
                    <div class="divider">
                        <p>You had me at hello <br></p>
                        <span>--- Jerry Maguire</span>
                    </div>
                    <img src="../images/32461564399681_pic_hd.jpg"/>
                    <div class="divider">
                        <p>Take me away from this big bad world, and agree to marry me.</p>
                        <span>--- Coffee & TV by Blur</span>
                    </div>
                    <img src="../images/31971564396702_pic_hd.jpg"/>
                    <div class="divider">
                        <p>I promise you, sing to you when all the music die.</p>
                        <span>--- Marry me by Train</span>
                    </div>
                    <img src="../images/18871561469146_pic_hd.jpg"/>
                    <div class="divider">
                        <p>She's the one that gonna save me</p>
                        <span>--- And I love her by Passenger</span>
                    </div>
                    <img src="../images/32621564399991_pic_hd.jpg"/>
                    <div class="divider small"></div>
                    <img class="portrait" src="../images/22361563083088_pic_hd.jpg"/>
                    <div class="divider">
                        <p>AND</p>
                    </div>
                    <img class="portrait" src="../images/32311564397857_pic_hd.jpg"/>
                    <div class="divider large">
                        <p>ARE GONNA BE THE ONE</p>
                    </div>
                </div>
            </div>
        </transition>
        <audio id="audio" ref="audio" hidden loop autoplay src="/audios/marryme.mp3"></audio>
        <img alt="Marry Me" class="music" src="../images/audiotrack_white_18dp.png" @click="play"/>
    </div>
</template>

<script>
    export default {
        name: "Photos",
        data() {
            return {
                slide: {
                    first: true
                }
            }
        },
        methods: {
            play() {

            }
        }
    }
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
                p {
                }
                img {
                    display: block;
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
                background-color: transparent;
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
        0%   {transform: scale(1);}
        100% {transform: scale(1.1);}
    }
    @keyframes rotate {
        0%   {transform: rotateZ(0);}
        100% {transform: rotateZ(360deg);}
    }
</style>
