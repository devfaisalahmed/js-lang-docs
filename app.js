/**
 * event - onload , onerror
 * response- response, responseText, responseType, responseUrl, status, statusText
 * function - open(), send(),setRequestHeader()
 */
const makeRequest = (method, url, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      let data = xhr.response;
      console.log(JSON.parse(data));
    };
    xhr.onerror = () => {
      console.log("error is here");
    };
    xhr.setRequestHeader( 'Content-type', 'application/json')
    xhr.send(JSON.stringify(data));
  });
};

const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts")
  .then((res) => console.log(res));
}
getData();


const sendData = () => {
  makeRequest("POST", "https://jsonplaceholder.typicode.com/posts",{
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
  .then((res) => console.log(res));
}
sendData();
