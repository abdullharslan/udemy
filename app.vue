<template>
    <div>
        <Main />
    </div>
</template>

<script>
   export default {
        created() {
            useHead({
                title: 'Online Courses - Learn Anything, On Your Schedule | Udemy',
                link: [
                    { rel: 'icon', type: 'image/x-icon', sizes: '32x32', href: '/_nuxt/assets/images/favicon.ico' },
                    { rel: 'preload', as: 'font', type: 'font/woff2', href: '/_nuxt/assets/fonts/Udemy-Sans-Regular-v1.woff2' },
                    { rel: 'preload', as: 'font', type: 'font/woff2', href: '/_nuxt/assets/fonts/Udemy-Sans-Bold-v1.woff2' },
                    { rel: 'stylesheet', type: 'text/css', href: '/_nuxt/assets/css/style.css' }
                ]
            });
        },
   }
</script>
