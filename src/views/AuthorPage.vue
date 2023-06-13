<template>
  <div class="body">
    <div class="author-info"></div>
    <div class="img-show">
      <div class="body-leftmargin">
        <div style="display: flex;flex-wrap: wrap;">
          <img-item class="body-item" v-for="photo in image" :key="photo.no" :value="photo.url" :name="photo.name"
            :author="photo.author" :time="photo.time" v-show="photo.type === attr.tagKey" @click="gotoPhotoPage(photo)">
          </img-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgItem from '@/components/ImgItem.vue';

export default {
  components: {
    ImgItem
  },

  data() {

  },
  methods: {
    gotoPhotoPage(img) {
      // console.log(img);
      this.$store.commit("setPhotoPageImgData", img)
      this.$router.push(`/PhotoPage/${img.no}`)
    },
    gotoAuthorPage(author){
      this.$store.commit("setPhotoPageImgData",author)
      this.$router.push()
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.body {
    width: 100%;
    min-height: 1000px;
    background-color: #e6ecf0;
}
</style>