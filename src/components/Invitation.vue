<template>
    <div class="wedding-invitation" :class="{ 'invitation-bounce':canOpen }">
        <div class="invitation-container" :class="{ 'invitation-down':isOpening }">
            <div class="invitation-cover">
                <div class="cover-content" :class="{'invitation-up':isOpening}">
                    <swiper :options="swiperOptions" ref="swiper">
                        <swiper-slide class="swiper-content swiper-no-swiping">
                            <div class="content-inside">
                                <img class="content-inside-photo" src="../images/photo001.jpeg">
                                <h1>我们结婚啦!</h1>
                                <p><b>李思颖 & 禹璐</b></p>
                                <p>时间：2019年8月25日下午6点</p>
                                <p>地点：<b>凯里市半山酒店3楼</b></p>
                                <button class="attend" @click="attend">我要出席</button>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="swiper-content swiper-no-swiping">
                            <div class="content-inside">
                                <img src="../images/baseline_arrow_back_black_18dp.png" @click="back"/>
                                <h1>出席婚礼</h1>
                                <form>
                                    <div>
                                        <label for="name"> 姓名 </label>
                                        <input v-model="form.name" id="name" type="text"/>
                                    </div>
                                    <div>
                                        <label for="count"> 人数 </label>
                                        <input v-model="form.count" id="count" type="number"/>
                                    </div>
                                    <div>
                                        <label for="phone"> 电话 </label>
                                        <input v-model="form.phone" id="phone" type="number"/>
                                    </div>

                                    <button type="submit" @click="submit">提交</button>
                                </form>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="cover-inside-left" :class="{'opening':isOpening}"></div>
                <div class="cover-inside-right" :class="{'opening':isOpening}"></div>
                <img class="cover-inside-seal" src="../images/seal.png" @click="openInvitation"
                     :class="{'invitation-flight':isOpening}">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['canOpen'],
        data() {
            return {
                isOpening: false,
                wish: '',
                isFocused: false,
                hasEntered: false,
                imgSwiperOptions: {
                    loop: true,
                    effect: 'cube'
                },
                swiperOptions: {
                    effect: 'cube',
                    activeIndex: 0
                },
                form: {
                    name: '',
                    count: 1,
                    phone: '',
                }
            }
        },
        methods: {
            // 打开邀请函
            openInvitation() {
                this.isOpening = true
            },
            // 发送弹幕
            sendBarrage() {
                this.$nextTick(() => {
                    this.hasEntered = true
                    if (!this.wish) {
                        return
                    }
                    this.isOpening = false
                    this.$refs.wishInput.blur()
                    setTimeout(() => {
                        this.$emit('sendBarrage', this.wish)
                    }, 660)
                })
            },
            submit() {
                this.$router.push('/photos');
            },
            attend() {
                this.$refs.swiper.swiper.slideTo(1);
            },
            back() {
                this.$refs.swiper.swiper.slideTo(0);
            }
        }
    }
</script>

<style lang="less">
    button {
        outline: none;
    }
    .wedding-invitation {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 30px 20px;
        padding-top: 60px;
        z-index: 4;
        transform: scale(0.05);
        -webkit-transform: scale(0.05);
        opacity: 0;
        transition: transform 0.8s cubic-bezier(.26, 1.84, .39, .61), opacity 0.5s linear;
        -webkit-transition: -webkit-transform 0.8s cubic-bezier(.26, 1.84, .39, .61), opacity 0.5s linear;
        background-size: 100%;
        overflow: hidden;

        &.invitation-bounce {
            opacity: 1;
            transform: scale(1);
            -webkit-transform: scale(1);
        }

        .invitation-container {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s cubic-bezier(0.4, 0, 1, 1);
            -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.4, 0, 1, 1);

            &.invitation-down {
                transform: translateY(20px);
                -webkit-transform: translateY(20px);
            }

            .invitation-cover {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #D65047;
                border-radius: 10px;
                perspective: 500px;
                box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.15);

                .cover-content {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    padding: 10px 20px;
                    transition: transform 0.6s cubic-bezier(0.4, 0, 1, 1);
                    -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.4, 0, 1, 1);

                    .swiper-content {
                        height: 100%;
                    }

                    &.invitation-up {
                        transform: translateY(-60px);
                        -webkit-transform: translateY(-60px);
                    }

                    .content-inside {
                        height: 90vh;
                        padding: 20px;
                        color: #a9895d;
                        background-color: #FFF1DE;
                        border-radius: 8px;
                        text-align: center;
                        overflow: auto;

                        .content-inside-photo {
                            width: 100%;
                            margin-bottom: 10px;
                            padding: 3px;
                            border: 1px solid #f7debb;
                            height: 300px;
                            object-fit: cover;
                        }

                        h1 {
                            color: #ff5b34;
                        }

                        p {
                            margin-top: 0;
                            margin-bottom: 5px;
                        }

                        .content-inside-input {
                            width: 100%;
                            height: 35px;
                            margin-top: 10px;
                            outline: none;
                            border: none;
                            border-bottom: 1px solid #f7debb;
                            color: #a9895d;
                            background: transparent;

                            &::-webkit-input-placeholder {
                                color: #E8D1B1;
                                font-size: 12px;
                            }

                            &::-moz-placeholder {
                                color: #E8D1B1;
                                font-size: 12px;
                            }

                            &:-ms-input-placeholder {
                                color: #E8D1B1;
                                font-size: 12px;
                            }

                            &:-moz-placeholder {
                                color: #E8D1B1;
                                font-size: 12px;
                            }
                        }

                        button.attend {
                            background-color: #a9895d;
                            border: 0;
                            margin: 20px;
                            border-radius: 32px;
                            padding: 8px 32px;
                            color: white;
                            font-size: 18px;
                        }

                        form {
                            h1 {
                                color: #ff5b34;
                            }

                            label {
                                margin: 4px 8px;
                                font-size: 20px;
                            }

                            input {
                                margin: 4px;
                                font-size: 18px;
                                padding: 2px 8px;
                            }

                            button {
                                background-color: #a9895d;
                                border: 0;
                                margin: 20px;
                                border-radius: 32px;
                                padding: 8px 32px;
                                color: white;
                                font-size: 18px;
                            }
                        }
                    }
                }

                .cover-inside-left {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 70%;
                    height: 100%;
                    border-radius: 10px;
                    background-color: #D65047;
                    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2);
                    z-index: 6;
                    transition: transform 0.5s;
                    -webkit-transition: -webkit-transform 0.5s;
                    transform-origin: 0 50%;
                    -webkit-transform-origin: 0 50%;

                    &.opening {
                        transform: rotate3d(0, 1, 0, -140deg);
                        -webkit-transform: rotate3d(0, 1, 0, -140deg);
                    }
                }

                .cover-inside-right {
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 40%;
                    height: 100%;
                    border-radius: 10px;
                    background-color: #D65047;
                    box-shadow: -5px 0 10px rgba(0, 0, 0, 0.2);
                    z-index: 5;
                    transition: transform 0.5s;
                    -webkit-transition: -webkit-transform 0.5s;
                    transform-origin: 100% 50%;
                    -webkit-transform-origin: 100% 50%;

                    &.opening {
                        transform: rotate3d(0, 1, 0, 140deg);
                        -webkit-transform: rotate3d(0, 1, 0, 140deg);
                    }
                }

                .cover-inside-seal {
                    position: absolute;
                    left: 70%;
                    bottom: 100px;
                    width: 80px;
                    height: 80px;
                    margin-left: -40px;
                    z-index: 7;
                    transform-origin: 50% 50%;
                    -webkit-transform-origin: 50% 50%;
                    transition: all 0.8s cubic-bezier(0.4, 0, 1, 1);
                    -webkit-transition: all 0.8s cubic-bezier(0.4, 0, 1, 1);

                    &.invitation-flight {
                        opacity: 0;
                    }
                }
            }
        }
    }
</style>
