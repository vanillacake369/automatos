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
    xhr.open('POST', '/');
    // xhr.open('POST', '/markdown');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      console.log(xhr.status);
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        // update the page with the response
        console.log(response);
        renderedInput.innerHTML = response.renderedInput;
      }
    };
    xhr.send(JSON.stringify({ text: text }));
  });
};
