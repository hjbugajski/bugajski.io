<template>
  <div id="app" class="main">
    <Home />
    <div v-for="(section, index) in sections" :key="index">
      <Section :title="section.title" :items="section.items" />
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Section from './components/Section.vue';

export default {
  name: 'App',
  components: {
    Home,
    Section
  },
  data: () => ({
    sections: [
      {
        title: 'Experience',
        items: [
          {
            title: '// Application Developer @ IBM iX',
            subtitle: '// April 2020 - Present',
            tags: ['Angular', 'Vue.js', 'UI/UX', 'Python'],
            class: 'info',
            body:
              // eslint-disable-next-line quotes
              "At IBM, I am currently developing Angular based micro-apps for the new online trading platform at PNC Financial Services. Previous projects include working on a Vue.js web application for UPS and analyzing data for Kroger's curbside pickup using Python and pandas.",
            footer: {
              isFooter: true,
              links: [
                {
                  text: 'IBM iX',
                  link: 'https://www.ibm.com/services/ibmix'
                }
              ]
            }
          }
        ]
      },
      {
        title: 'Projects',
        items: [
          {
            title: '// ApplicationTrackr',
            subtitle: '// August 2019 - Present',
            tags: ['Vue.js', 'Vuetify', 'Firebase'],
            class: 'link',
            body:
              'ApplicationTrackr helps you organize your ever growing list of job or internship applications. It was developed to be a better—and more visually appealing—alternative to tracking applications in a spreadsheet.',
            footer: {
              isFooter: true,
              links: [
                {
                  text: 'Application',
                  link: 'https://applicationtrackr.io/'
                }
              ]
            }
          },
          {
            title: '// Graduate Clinician Portfolio',
            subtitle: '// December 2020 - Present',
            tags: ['Vue.js', 'Vuetify', 'Firebase'],
            class: 'warning',
            body:
              'A Graduate Clinician portfolio for Jesse Reichenbaum. The website includes a short bio and pages with supporting documentation, which covers work done while in graduate school.',
            footer: {
              isFooter: true,
              links: [
                {
                  text: 'Portfolio',
                  link: 'https://jessereichenbaum.com/'
                }
              ]
            }
          },
          {
            title: '// Photography Portfolio',
            subtitle: '// September 2020 - Present',
            tags: ['Vue.js', 'Bootstrap', 'Firebase'],
            class: 'primary',
            body:
              'A photography portfolio for Marco Santana, which serves as a sectioned gallery based on the subject of the photos.',
            footer: {
              isFooter: true,
              links: [
                {
                  text: 'Portfolio',
                  link: 'https://marco-santana.com/'
                }
              ]
            }
          }
        ]
      },
      {
        title: 'Academics',
        items: [
          {
            title: '// The University of Alabama',
            subtitle: '// B.S. Computer Science, 2015',
            tags: ['ACM', 'UADM'],
            class: 'danger',
            body:
              'While at The University of Alabama, I was a member of the Association for Computing Machinery (ACM) for two years and then led the development team my third year. I also was a member of The University of Alabama Dance Marathon (UADM), and, in my third year, I was the Director of Entertainment and productions.',
            footer: {
              isFooter: true,
              links: [
                {
                  text: 'ACM',
                  link: 'https://ua-acm-student-chapter.github.io/'
                },
                {
                  text: 'UADM',
                  link: 'https://www.uadm.org/'
                }
              ]
            }
          },
          {
            title: '// Academic Projects',
            subtitle: '// September 2016 - May 2019',
            tags: ['C', 'Java', 'Scheme', 'SQL'],
            class: 'link',
            body:
              'All major programming assignments completed in college. Projects include my own programming language, functional programming assignments written in Scheme, data structures written in C, programs for operating systems written in C, and a project for relational databases.',
            footer: {
              isFooter: true,
              links: [
                {
                  text: 'Repositories',
                  link: 'https://gitlab.com/hjbugajski-college'
                }
              ]
            }
          }
        ]
      }
    ]
  })
};
</script>

<style lang="scss">
.main {
  padding-bottom: 48px;
}

@media (min-width: 2560px) {
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;

    .home,
    .my-section {
      width: 1500px;
    }

    .my-section {
      margin: 48px;
      padding: 48px;

      .item-deck {
        grid-template-columns: repeat(auto-fit, minmax(325px, 32%));
      }
    }
  }
}
</style>
