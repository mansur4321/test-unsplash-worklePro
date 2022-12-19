<template>
    <footer class="footer">
        <div class="footer__pagination">
            <pagination-c 
                :rangePage="rangePage"
                @openNewPage="openNewPage"
            />
        </div>
    </footer>
</template>

<script>
import paginationC from './pagination-c.vue'
export default {
    components: { paginationC },

    props: {
        rangePage: Number,
    },

    emits: {
        openNewPage: Number,
    },

    methods: {
        openNewPage(newPage) {
            this.$emit('openNewPage', newPage);
        }
    }
}
</script>

<style>

</style>