<template>
  <div>
    <h2>Create a New Post</h2>
    <form @submit.prevent="createPost">
      <input v-model="title" placeholder="Title" required>
      <textarea v-model="content" placeholder="Content" required></textarea>
      <button type="submit">Create Post</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreatePost',
  data() {
    return {
      title: '',
      content: '',
    };
  },
  methods: {
    createPost() {
      // Add your post creation logic here
      console.log('Post created:', this.title, this.content);
    },
  },
};
</script>
