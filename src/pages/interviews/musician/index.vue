<script setup lang="ts">
useHead({
  title: 'Musician: Interview with Camryn Rothenbury',
  meta: [
    {
      name: 'description',
      content: 'Michael from Oh Silence sits with Camryn Rothenbury to discuss their debut full-lenght release \'Musician\''
    }
  ]
})
</script>

<template>
  <div class="blog-entry">
    <content-doc :path="'/interviews/musician'" />
  </div>
</template>

<style>
.blog-entry .hgroup {
  display: block;
  margin: 10em 0;
  text-align: center;
}

.blog-entry p {
  --font-size: 1.25rem;
  font-size: var(--font-size);
}

.blog-entry p>abbr {
  font-weight: bold;
}

.blog-entry h1,
.blog-entry h2,
.blog-entry h3,
.blog-entry h4,
.blog-entry h5,
.blog-entry h6 {
  color: rgb(40, 40, 40);
}

.blog-entry p>span.question {
  --font-size: 2rem;
  --typography-spacing-vertical: 3rem;

  color: rgb(0, 102, 211);
  font-size: var(--font-size);
  font-family: "Dela Gothic One", sans-serif;
  display: inline-block;
  margin-top: calc(var(--typography-spacing-vertical) * 2);
  margin-bottom: calc(var(--typography-spacing-vertical) * 2);
}

.blog-entry h1.musician-header span:not(.musician-char) {
  display: block;
  color: rgb(0, 124, 255);
}

.blog-entry h1.musician-header span:not(.musician-span) {
  /* font-size: 5rem; */
  font-size: 8rem;
  text-shadow:
    20px -20px 0 rgb(255, 180, 180),
    40px -40px 0 rgb(0, 124, 255);
  color: #fff0f1;
  letter-spacing: 50px;
}

.blog-entry h1.musician-header .musician-char {
  display: inline-block;
  transition: 0.4s ease;
}

.blog-entry .musician-char:nth-child(2) {
  animation: musician 2.5s ease 0.1s infinite forwards;
}

.blog-entry .musician-char:nth-child(3) {
  animation: musician 2.5s ease 0.3s infinite forwards;
}

.blog-entry .musician-char:nth-child(4) {
  animation: musician 2.5s ease 0.4s infinite forwards;
}

.blog-entry .musician-char:nth-child(5) {
  animation: musician 2.5s ease 0.5s infinite forwards;
}

.blog-entry .musician-char:nth-child(6) {
  animation: musician 2.5s ease 0.6s infinite forwards;
}

.blog-entry .musician-char:nth-child(7) {
  animation: musician 2.5s ease 0.7s infinite forwards;
}

.blog-entry .musician-char:nth-child(8) {
  animation: musician 2.5s ease 0.8s infinite forwards;
}

.blog-entry .musician-char:nth-child(9) {
  animation: musician 2.5s ease 0.9s infinite forwards;
}

@keyframes musician {

  0%,
  100% {
    transform: translateY(0);
    text-shadow:
      20px -20px 0 rgb(255, 180, 180),
      40px -40px 0 rgb(0, 124, 255);
    color: #fff0f1;
  }

  50% {
    transform: translateY(-15px);
    text-shadow:
      10px 10px 0 rgb(255, 162, 162),
      30px -15px 0 rgb(0, 102, 211);
    color: #fedcde;
  }
}

.blog-entry figcaption {
  max-width: 390px;
}

@media screen and (min-width: 888px) {
  .blog-entry img {
    min-width: 666px;
  }

  .blog-entry figcaption {
    max-width: unset;
  }
}

@media screen and (min-width: 992px) {

  .blog-entry .container figure:nth-of-type(1),
  .blog-entry .container figure:nth-of-type(3) {
    float: right;
    padding-left: 2rem;
  }
}

@media screen and (min-width: 888px) {
  .blog-entry .container figure:nth-of-type(2) {
    float: left;
    padding-right: 2rem;
  }
}

.blog-entry blockquote {
  font-style: italic;
  font-size: 1.6rem;
  border-left-color: var(--color);
}
</style>
