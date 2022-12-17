<template>
    <div class="user-card">
        <div class="user-card__header">
            <author-c />
        </div>

        <div class="user-card__main">
            <img src="../assets/Photo.png" alt="" class="user-card__image">
        </div>

        <div class="user-card__footer">
            <views-amount-c />
        </div>
    </div>
</template>

<script>
import AuthorC from './author-c.vue'
import viewsAmountC from './views-amount-c.vue'
export default {
  components: { viewsAmountC, AuthorC },

}
</script>

<style>
</style>