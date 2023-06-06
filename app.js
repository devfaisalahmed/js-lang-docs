fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    id:1,
    title: 'fooma',
    body: 'bar',
    userId: 1,
  })
})
  .then((res) => {
    if (!res.ok) {
      const msg = `${res.status}`;      
      throw new Error(msg);
    }
    return res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
