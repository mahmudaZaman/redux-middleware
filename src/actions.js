const asyncFunc = postId =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

export function changeInput(postId) {
  return {
    type: "CHANGE_INPUT",
    payload: {
      postId,
      asyncFunc
    }
  };
}
