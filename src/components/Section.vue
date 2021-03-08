<template>
  <div class="my-section">
    <h1 class="title">
      {{ title }}
    </h1>
    <div class="item-deck">
      <div class="item" v-for="(item, index) in items" :key="index">
        <div class="item-title">
          <h1 :class="`has-text-${item.class}`">
            {{ item.title }}
          </h1>
          <h1 :class="`has-text-${item.class}`">
            {{ item.subtitle }}
          </h1>
        </div>
        <div class="item-tags">
          <span class="tag is-dark" v-for="(tag, index) in item.tags" :key="index">
            {{ tag }}
          </span>
        </div>
        <div class="item-body">
          <p>
            {{ item.body }}
          </p>
        </div>
        <div class="item-footer" v-if="item.footer.isFooter">
          <a
            v-for="(link, index) in item.footer.links"
            :key="index"
            :class="`button is-${item.class} is-small`"
            :href="link.link"
            target="_blank"
            rel="noopener"
          >
            <span>
              {{ link.text }}
            </span>
            <span class="icon is-small">
              <i class="fas fa-external-link-square-alt"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section',
  props: ['title', 'items'],
  data: () => ({
    // data
  })
};
</script>

<style lang="scss" scoped>
@import '@/scss/_colors.scss';
@import '@/scss/_fonts.scss';

.my-section {
  background-color: $color-gray-900;
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 24px 12px;

  .item-deck {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(296px, 1fr));
    gap: 12px;

    .item {
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: $color-black;
      border-radius: 8px;
      padding: 12px;

      .item-title {
        font-style: italic;
        margin-bottom: 6px;
      }

      .item-tags {
        .tag {
          font-family: $font-mono !important;
          margin-bottom: 4px;

          &:not(:last-of-type) {
            margin-right: 4px;
          }
        }
      }

      .item-body {
        flex: 1 1 auto;
        padding: 6px 0;
      }

      .item-footer {
        padding-top: 10px;

        .button {
          width: 100% !important;

          &:not(:last-of-type) {
            margin-bottom: 12px;
          }

          .icon {
            margin-left: 4px !important;
            margin-right: -3px !important;
          }
        }
      }
    }
  }
}

@media (min-width: 425px) {
  .my-section .item-deck .item .item-footer .button {
    width: fit-content !important;

    &:not(:last-of-type) {
      margin-bottom: 0;
      margin-right: 12px;
    }
  }
}

@media (min-width: 768px) {
  .my-section {
    margin: 24px;
    padding: 24px;
  }
}

@media (min-width: 1024px) {
  .my-section {
    .item-deck {
      grid-template-columns: repeat(auto-fit, minmax(325px, 49%));

      .item {
        padding: 24px;

        .item-title {
          margin-bottom: 12px;
        }

        .item-body {
          padding: 12px 0;
        }
      }
    }
  }
}
</style>
