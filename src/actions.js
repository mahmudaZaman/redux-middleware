const asyncFunc2 = (postId, next) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(json => {
      next({ type: "CHANGE_INPUT", payload: { postId, postDetails: json } });
    });

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

export function changeInput2(postId) {
  return next => asyncFunc2(postId, next);
}
