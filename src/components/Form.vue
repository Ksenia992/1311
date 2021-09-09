<template>
<div class="form">
  <div class="form-content py-7 px-5 d-flex flex-column align-center">
    <textarea v-model="text" @keyup.enter.ctrl="addComment"></textarea>
    <v-btn
        color="#FDD639"
        elevation="2"
        rounded
        class="mt-6"
        width="281"
        @click="addComment"
    >Написать консультанту</v-btn>
  </div>
</div>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
   text:''
}),
  methods: {
    addComment () {
      console.log(this.comment)
      const comment = {
        text: this.text,
        id: Date.now()
      }
      this.$store.commit("SET_COMMENT", comment)
      this.text = ''
    }
  }
}
</script>

<style lang="scss">
.form {
  .form-content {
    textarea {
      width: 100%;
      resize: none;
      height: 63px;
      border: 1px solid #000000;
      border-radius: 2px;
      outline:none;
      background: #fff;
    }
  }
}
.v-btn {
  letter-spacing: unset !important;
}
.v-btn__content  {
  font-family: PT Sans !important;
  font-weight: bold !important;
  font-size: 16px !important;
  text-transform:none !important;
  padding:13px 48px 11px 43px !important;
}
</style>