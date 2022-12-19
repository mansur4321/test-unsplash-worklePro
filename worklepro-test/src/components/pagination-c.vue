<template>
    <ul class="pagination">
        <li class="pagination__elem"
            v-for="page in listViewPages"
            :key="page"
            :class="{
                '_active-page': page === currentPage
            }"
            @click="changeCurrentPage(page)"
        >
            {{ page }}
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        rangePage: Number,
    },

    emits: {
        openNewPage: Number,
    },

    data() {
        return {
            listPages: [],
            currentPage: 1,
        }
    },

    mounted() {
        for (let i = 1; i <= this.rangePage; i++) {
            this.listPages.push(i);
        }
    },

    computed: {
        listViewPages() {
            let viewList = [];

            if(this.currentPage > this.listPages[0] + 3) {
                viewList.push(1);
                viewList.push('...');
                viewList.push(this.currentPage - 1);
            } else if(this.currentPage !== 1) {
                for (let i = 1; i < this.currentPage; i++) {
                    viewList.push(i);
                }
            }

            viewList.push(this.currentPage);

            if(this.currentPage < this.listPages[this.listPages.length - 1] - 3) {
                viewList.push(this.currentPage + 1);
                viewList.push('...');
                viewList.push(this.listPages[this.listPages.length - 1]);
            } else if(this.currentPage !== this.listPages[this.listPages.length - 1]) {
                for (let i = this.currentPage + 1; i <= this.listPages[this.listPages.length - 1]; i++) {
                    viewList.push(i);
                }
            }

            this.$emit('openNewPage', this.currentPage);


            return viewList;
        }
    },

    methods: {
        changeCurrentPage(page) {
            if (typeof page !== 'number' || isNaN(page)) return;

            this.currentPage = page;
        }
    }
}
</script>

<style>

</style>