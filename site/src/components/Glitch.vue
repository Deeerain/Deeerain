<script setup lang="ts">
defineProps<{
    text: String
}>()

</script>

<template>
    <div class="glitch">
        <span class="glitch__content" :data-text="text">{{ text }}</span>
    </div>
</template>

<style scoped lang="scss">
.glitch {
    display: inline;

    .glitch__content {
        position: relative;
        display: inline-block;

        &::after, &::before {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        &::before {
            left: 2px;
            text-shadow: -2px 0 #49FC00;
            clip: rect(24px, 550px, 90px, 0);
            animation: glitch-anim-2 2.5s infinite linear alternate-reverse;
        }

        &::after {
            left: -2px;
            text-shadow: -2 px 0 #b300fc;
            clip: rect(85px, 550px, 140px, 0);
            animation: glitch-anim 2.5s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
            0% {
                clip: rect(110px, 9999999px, 74px, 0);
            }
            4.16666667% {
                clip: rect(135px, 9999999px, 143px, 0);
            }
            8.33333333% {
                clip: rect(100px, 9999999px, 100px, 0);
            }
            12.5% {
                clip: rect(38px, 9999999px, 24px, 0);
            }
            16.66666667% {
                clip: rect(125px, 9999999px, 83px, 0);
            }
            20.83333333% {
                clip: rect(149px, 9999999px, 63px, 0);
            }
            25% {
                clip: rect(12px, 9999999px, 104px, 0);
            }
            29.16666667% {
                clip: rect(68px, 9999999px, 7px, 0);
            }
            33.33333333% {
                clip: rect(77px, 9999999px, 20px, 0);
            }
            37.5% {
                clip: rect(99px, 9999999px, 6px, 0);
            }
            41.66666667% {
                clip: rect(27px, 9999999px, 99px, 0);
            }
            45.83333333% {
                clip: rect(58px, 9999999px, 107px, 0);
            }
            50% {
                clip: rect(108px, 9999999px, 77px, 0);
            }
            54.16666667% {
                clip: rect(58px, 9999999px, 87px, 0);
            }
            58.33333333% {
                clip: rect(142px, 9999999px, 112px, 0);
            }
            62.5% {
                clip: rect(124px, 9999999px, 125px, 0);
            }
            66.66666667% {
                clip: rect(61px, 9999999px, 53px, 0);
            }
            70.83333333% {
                clip: rect(117px, 9999999px, 74px, 0);
            }
            75% {
                clip: rect(21px, 9999999px, 74px, 0);
            }
            79.16666667% {
                clip: rect(117px, 9999999px, 70px, 0);
            }
            83.33333333% {
                clip: rect(87px, 9999999px, 122px, 0);
            }
            87.5% {
                clip: rect(95px, 9999999px, 9px, 0);
            }
            91.66666667% {
                clip: rect(121px, 9999999px, 75px, 0);
            }
            95.83333333% {
                clip: rect(121px, 9999999px, 115px, 0);
            }
            100% {
                clip: rect(101px, 9999999px, 72px, 0);
            }
        }

        @keyframes glitch-anim-2 {
            6.66666667% {
                clip: rect(76px, 9999999px, 132px, 0);
            }
            10% {
                clip: rect(13px, 9999999px, 82px, 0);
            }
            13.33333333% {
                clip: rect(97px, 9999999px, 2px, 0);
            }
            16.66666667% {
                clip: rect(1px, 9999999px, 147px, 0);
            }
            20% {
                clip: rect(113px, 9999999px, 124px, 0);
            }
            23.33333333% {
                clip: rect(132px, 9999999px, 130px, 0);
            }
            26.66666667% {
                clip: rect(120px, 9999999px, 32px, 0);
            }
            30% {
                clip: rect(2px, 9999999px, 10px, 0);
            }
            33.33333333% {
                clip: rect(76px, 9999999px, 46px, 0);
            }
            36.66666667% {
                clip: rect(140px, 9999999px, 79px, 0);
            }
            40% {
                clip: rect(37px, 9999999px, 67px, 0);
            }
            43.33333333% {
                clip: rect(133px, 9999999px, 95px, 0);
            }
            46.66666667% {
                clip: rect(6px, 9999999px, 16px, 0);
            }
            50% {
                clip: rect(98px, 9999999px, 123px, 0);
            }
            53.33333333% {
                clip: rect(42px, 9999999px, 88px, 0);
            }
            56.66666667% {
                clip: rect(77px, 9999999px, 110px, 0);
            }
            60% {
                clip: rect(22px, 9999999px, 145px, 0);
            }
            63.33333333% {
                clip: rect(47px, 9999999px, 75px, 0);
            }
            66.66666667% {
                clip: rect(109px, 9999999px, 135px, 0);
            }
            70% {
                clip: rect(118px, 9999999px, 40px, 0);
            }
            73.33333333% {
                clip: rect(74px, 9999999px, 141px, 0);
            }
            76.66666667% {
                clip: rect(59px, 9999999px, 100px, 0);
            }
            80% {
                clip: rect(14px, 9999999px, 32px, 0);
            }
            83.33333333% {
                clip: rect(22px, 9999999px, 28px, 0);
            }
            86.66666667% {
                clip: rect(106px, 9999999px, 74px, 0);
            }
            90% {
                clip: rect(33px, 9999999px, 97px, 0);
            }
            93.33333333% {
                clip: rect(94px, 9999999px, 29px, 0);
            }
            96.66666667% {
                clip: rect(108px, 9999999px, 87px, 0);
            }
            100% {
                clip: rect(5px, 9999999px, 14px, 0);
            }
        }
    }
}
</style>