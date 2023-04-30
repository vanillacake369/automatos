/**
 * running js at the begin of index.hbs does not work,
 * since rest of the page has not rendered
 */
window.onload = () => {
  const input = document.getElementById('inputMarkdown');
  const renderedInput = document.getElementById('renderedInput');
  input.addEventListener('input', function () {
    const text = input.value;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/newnote');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      console.log(xhr.status);
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        /* update the page with the response */
        console.log(response); // 잘 뜸
        console.log(response.renderedInput); // X
        console.log(renderedInput.innerHTML); // X
        renderedInput.innerHTML = response.renderedInput;
        console.log(response.renderedInput); // X
        console.log(renderedInput.innerHTML); // X
      }
    };
    xhr.send(JSON.stringify({ text: text }));
  });
};
