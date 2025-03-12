<template>
  <div>
    <h1>Blog</h1>
    <router-link to="/blog/create">Create a new post</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Blog',
};
</script>
