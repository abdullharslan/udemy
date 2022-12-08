<template>
    <div style="cursor:pointer;">
        <div class="card-img-wrapper">
            <img width="240" height="135" :src="`/_nuxt/assets/images/${cover}`">
        </div>
        <div>
            <h3 class="card-title">{{ title }}</h3>
            <p class="card-instructor">{{ instructor }}</p>
            <div class="d-flex align-center cmb-04">
                <span class="rating-number">{{ star }}</span>
                <v-rating class="rating-star" v-model="this.star" color="#e59819" disabled></v-rating>
                <span class="ud-text-xs">({{ rating }})</span>
            </div>
            <div class="d-flex align-center cmb-04">
                <span class="card-price">₺{{ price }}</span>
                <span class="card-real-price">₺{{ realprice }}</span>
            </div>
            <div v-if="bestseller" class="card-bs">
                <span class="card-bs-badge">Bestseller</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'cover',
        'title',
        'instructor',
        'star',
        'rating',
        'price',
        'realprice',
        'bestseller'
    ]
}
</script>