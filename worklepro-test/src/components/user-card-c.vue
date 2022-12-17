<template>
    <div class="user-card">
        <div class="user-card__header">
            <author-c 
                :imgUrl="userData.urlProfileImage"
                :nameUser="userData.name"
                :userInst="userData.linkInst"
            />
        </div>

        <div class="user-card__main">
            <img 
                :src="userData.urlImage" :alt="userData.alt" :class="{
                    'user-card__image-mw': userData.imageStyle,
                    'user-card__image-mh': !userData.imageStyle,
                }"
            >
        </div>

        <div class="user-card__footer">
            <views-amount-c 
                :views="userData.views"
            />
        </div>
    </div>
</template>

<script>
import AuthorC from './author-c.vue'
import viewsAmountC from './views-amount-c.vue'
export default {
  components: { viewsAmountC, AuthorC },

  props: {
    userData: Object,
  }
}
</script>

<style>
</style>