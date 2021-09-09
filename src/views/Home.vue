<template>
  <div>
  <v-row class="wrapper">
    <v-col class="px-0 py-0 ml-0">
      <Header />
      <Content  />
    </v-col>
  </v-row>
   <v-row class="full-width mt-5">
     <v-col class="px-0 py-0">
       <Form />
     </v-col>
   </v-row>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Content from '@/components/Content.vue'
import Form from '@/components/Form.vue'
export default {
  name: "Home",
  components: {
    Header,
    Content,
    Form
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 450px;
  margin: 0 auto;
  @media (max-width: 767px) {
    padding-left:20px;
  }
}
.full-width {
  width:489px;
  margin:0 auto;
  background: #F2F2F2;
  @media (max-width: 767px) {
    width:102%;
  }
  @media (max-width: 530px) {
    width:139%;
  }
}
</style>
