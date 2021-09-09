<template>
  <v-card flat class="d-flex">
    <v-avatar size="124" class="mt-4">
      <img src="@/assets/avatar.jpg" alt="avatar"/>
    </v-avatar>
    <div class="d-flex flex-column pt-5">
      <div class="header-text ml-4">
        <p class="title my-0">Вероника Ростова</p>
        <p class="mb-1 subtitle">Менеджер по продажам</p>
      </div>
      <div class="card-description">
        <p class="mb-0 card-text">
          Подберу для вас самые лучшие предложения.<br/>Мои услуги абсолютно
          бесплатны
        </p>
      </div>
      <div class="text-end card-container">
        <p class="services-header mb-2">Услуг</p>
        <v-divider/>
      </div>
      <div class="card-container mt-4">
        <div class="table">
          <div class="column mb-1">
            <span class="pr-8 font-weight-bold">11</span>
            <div class="background">
              <p class="table-text mb-0">Ручное бронирование</p>
            </div>
          </div>
          <div class="column mb-1">
            <span class="pr-9 font-weight-bold">3</span>
            <div class="background-second">
              <p class="table-text mb-0">Пакетные туры</p>
            </div>
          </div>
          <div class="column">
            <span class="pr-9 font-weight-bold">1</span>
            <div class="background-third">
              <p class="table-text mb-0">Отели</p>
            </div>
          </div>
        </div>
        <div class="pt-4">
          <v-divider/>
          <div class="mt-2 d-flex justify-space-between">
            <p class="total">Всего</p>
            <span class="total pr-9">15</span>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<style lang="scss">
.v-avatar {
  z-index: 3 !important;
}

.title {
  font-size: 16px;
  font-weight: bold;
}

.subtitle {
  color: #808080;
  font-size: 12px;
}

.card-description {
  width: 364px;
  height: 54px;
  background: #fffbc8;
  border: 1px solid #dadada;
  border-radius: 5px;
  position: relative;
  right: 30px;

  .card-text {
    padding: 5px 0 0 45px;
    font-size: 14px;
    color: #333333;
  }
}

.card-container {
  width: 332px;
  padding-left: 16px;
}

.services-header {
  padding: 13px 22px 0 0;
}

.table {
  font-size: 13px;
  position: relative;

  .column {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }

  .background {
    width: 219px;
    background: #B1E19B;
  }

  .background-second {
    width: 55px;
    background: #87CEFA;
  }

  .background-third {
    width: 37px;
    background: #87CEFA;
  }

  &-text {
    width: 219px;
    padding: 2px 0 0 6px;
  }
}

.table:before {
  content: '';
  width: 1px;
  height: 100%;
  background-color: rgba(51, 51, 51, 0.2);
  position: absolute;
  top: 0;
  left: -1px;
}

.total {
  font-size: 16px;
  font-weight: 700;
}

</style>
