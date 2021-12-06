import { computed } from "@vue/reactivity"

const state = ref({ post: {}})

const setPost = (post) => {
  state.value.post = post
}

const loadPost = async (id) => {
  const post = await fetchPost(id)
  setPost(post)
}

const getPost = computed(() => state.value.post)

export {
  loadPost,
  getPost
}
