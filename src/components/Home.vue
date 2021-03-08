<template>
  <div class="home">
    <nav class="navbar">
      <div id="navMenu" class="navbar-brand">
        <div class="navbar-end">
          <div class="buttons">
            <a
              v-for="(link, index) in links"
              :key="index"
              :href="link.url"
              target="_blank"
              rel="noopener"
              class="button is-small is-ghost"
            >
              <span>
                {{ link.title }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div>
          <h1 class="subtitle has-text-success">
            {{ subtitle }}
          </h1>
          <h2 class="title">
            {{ title }}
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    title: 'Henry Bugajski',
    subtitle: '// Application Developer @ IBM iX',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/hjbugajski'
      },
      {
        title: 'GitLab',
        url: 'https://gitlab.com/hjbugajski-college'
      },
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/henrybugajski/'
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_colors.scss';

.home {
  .navbar {
    background-color: transparent !important;

    .buttons {
      padding: 6px;
      padding-left: 0;

      .button {
        margin-bottom: 0;
      }
    }
  }

  .hero-body {
    padding: 24px 12px;
  }

  .subtitle {
    font-style: italic;
    font-size: 0.75rem;
  }

  .title {
    font-size: 3.5rem;
  }
}

@media (min-width: 375px) {
  .home {
    .subtitle {
      font-size: 1rem;
    }

    .title {
      font-size: 4rem;
    }
  }
}

@media (min-width: 768px) {
  .home {
    .navbar {
      .buttons {
        padding: 12px;
        padding-left: 12px;
      }
    }

    .hero-body {
      padding: 24px;
    }

    .subtitle {
      font-size: 2rem;
    }

    .title {
      font-size: 8rem;
    }
  }
}
</style>
