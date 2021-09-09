<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-space-between">
        <div class="d-flex align-baseline">
          <p class="total mb-0">Последние отзывы</p>
          <a href="#" class="ml-4">Все отзывы</a>
        </div>
        <div>
          <a href="#" class="numbers mr-3 icon-link">
            <v-icon color="#73B4D5" size="16">mdi-cards-heart</v-icon>
            131
          </a>
          <a href="#" class="numbers icon-link">
            <v-icon color="#73B4D5" size="16">mdi-comment</v-icon>
            14</a>
        </div>
      </v-col>
    </v-row>
    <div class="comment-block mt-3">
      <div class="d-flex align-baseline">
        <p class="comment-block-name">Самуил</p>
        <span class="ml-2 comment-block-date">13 октября 2011</span>
      </div>
      <div class="comment-area">
        <p>Привет, Верунь! ниче себе ты крутая. фотка класс!!!! </p>
      </div>
    </div>
    <div class="comment-block mt-4">
      <div class="d-flex align-baseline">
        <p class="comment-block-name">Лилия Семёновна</p>
        <span class="ml-2 comment-block-date">14 октября 2011</span>
      </div>
      <div class="comment-area">
        <p>Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и
          есть всемирно известный центр огранки алмазов и торговли бриллиантами?</p>
      </div>
    </div>
    <div class="comment-block mt-3">
      <div class="d-flex align-baseline">
        <p class="comment-block-name">Лилия Семёновна</p>
        <span class="ml-2 comment-block-date">14 октября 2011</span>
      </div>
      <div class="comment-area">
        <p>Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?</p>
      </div>
    </div>
    <div class="comment-block mt-3" v-if="showComment.length" v-for="(comment, index) of showComment" :key="comment.id">
      <div class="d-flex align-baseline">
        <p class="comment-block-name">Лилия Семёновна</p>
        <span class="ml-2 comment-block-date">14 октября 2011</span>
      </div>
      <div class="comment-area">
        <p>{{ comment.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  computed: {
    showComment () {
      return this.$store.getters.comments
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: #005DA1;
  font-size: 14px;
}

.numbers {
  font-size: 12px;
}

.icon-link {
  text-decoration: none;
  color: #333333;
}

.comment-block {
  &-name {
    font-size: 14px;
    font-weight: 700;
  }

  &-date {
    font-size: 11px;
  }

  .comment-area {
    background: #F2FBFF;
    border: 1px solid #C4CBCF;
    box-shadow: 0px 4px 10px rgba(128, 128, 128, 0.1);
    width: 100%;
    position: relative;

    p {
      font-size: 14px;
      padding: 10px 0 10px 20px;
      margin-bottom: 0;
    }
  }

  .comment-area::before, .comment-area::after {
    content: '';
    position: absolute;
    left: 20px;
    top: -20px;
    border: 10px solid transparent;
    border-width: 9px 16px 0 5px;
    border-bottom: 10px solid #C4CBCF;
  }

  .comment-area::after {
    border-bottom: 10px solid #F2FBFF;
    top: -19px;
  }
}
</style>