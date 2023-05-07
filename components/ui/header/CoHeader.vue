<template>
  <header>
    <div class="container">
      <client-only>
        <nav>
          <nuxt-link v-for="(link, i) in links" :key="i"
                     :to="link.link"
                     @click.native="setFocus"
                     :class="['link', {'hover': link.child}]">
            {{ link.name }}
            <div class="child" v-if="link.child">
              <nuxt-link v-for="(child, j) in link.child" :key="j"
                         :to="child.link"
                         @click.native="setFocus"
                         class="link child-link">
                {{ child.name }}
              </nuxt-link>
            </div>
          </nuxt-link>
        </nav>
      </client-only>
    </div>
  </header>
</template>

<script lang="ts">
import {ILink} from "~/types/link.interface";

export default {
  name: "CoHeader",

  setup() {
    const links: ILink[] = [
      {
        name: "СРО ОЮЛ НАК",
        link: "/",
        child: null
      },
      {
        name: "ОБ АССОЦИАЦИИ",
        link: "/o-nas",
        child: [
          {
            name: "ДОКУМЕНТЫ",
            link: "/o-nas/documentation",
          },
          {
            name: "КОМУ ИНТЕРЕСНО",
            link: "/o-nas/who-is-interested",
          },
          {
            name: "РУКОВОДСТВО",
            link: "/o-nas/management",
          },
          {
            name: "Международное сотрудничество",
            link: "/o-nas/international-cooperation",
          }
        ]
      },
      {
        name: "СЕРТИФИКАЦИЯ",
        link: "/sertifikaciya",
        child: null
      },
      {
        name: "ОБУЧЕНИЕ",
        link: "/obuchenie",
        child: [
          {
            name: "Корпоративное предпринимательство",
            link: "/obuchenie/cooperative-enterpreneurship",
          },
          {
            name: "Вермифермеры",
            link: "/obuchenie/vermifarmers",
          }
        ]
      },
      {
        name: "НОВОСТИ",
        link: "/novosti",
        child: null
      },
      {
        name: "ФОТОГАЛЕРЕЯ",
        link: "/fotogalereya",
        child: null
      },
      {
        name: "КОНТАКТЫ",
        link: "/contacts",
        child: null
      },
    ]

    const setFocus = () => {}

    return {links, setFocus}
  }
}
</script>

<style scoped lang="scss">
header {
  background-color: #0c3c60;
  padding: 1.2rem 0;
  z-index: 999;
  position: sticky;
  top: 0;
  width: 100%;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .link {
      color: #FFFFFF;
      font-size: clamp(10px, 12px, 12px);
      padding: .3rem 0;

      &.hover:hover {
        position: relative;

        .child {
          display: flex;
        }
      }

      .child {
        display: none;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 100%;
        right: 0;
        z-index: 1000;
        background-color: #0c3c60;
        padding: 10px;
        width: max-content;
      }
    }
  }
}

.nuxt-link-exact-active {
  color: #D1E0EB !important;
}
</style>
