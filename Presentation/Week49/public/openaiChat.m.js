class OpenaiChat {
  #apiKeyInput;
  #responseElem;
  #formatterUrls = [
    'https://cdn.jsdelivr.net/npm/marked/marked.min.js',
    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'];

  constructor(rootElement) {
    const apiKey0 = "sk-proj-oYqikrTlntO2tyVJHrC5LsNZkPWGnde83cqBw1zvzAhLXylBgNfXr5W_mzGsPSEuiSt8UWbuppT3BlbkFJvNDnSnsp_";
    const apiKey1 = "E41E1LxGnB_9ZEAaAVqycbf1dnTu8OKf6hZIRj0TRX2zaMRUkanMS7bqVpcjvmWwA";
    const apiKeyCombined = apiKey0 + apiKey1;

    for (const url of this.#formatterUrls) {
      const script = document.createElement('script');
      script.src = url;
      document.head.appendChild(script);
    }

    const heading = document.createElement('h1');
    heading.textContent = 'Ask OpenAI';

    // Create the text input element
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'api-key';
    input.name = 'api-key';
    input.placeholder = 'Your API key';
    input.value = apiKeyCombined;
    this.#apiKeyInput = input;

    // Create textarea element
    const textarea = document.createElement('textarea');
    textarea.id = 'prompt';
    textarea.rows = 4;
    textarea.cols = 50;
    textarea.placeholder = 'Enter your prompt here...';

    // Create button element
    const button = document.createElement('button');
    button.id = 'submitBtn';
    button.textContent = 'Submit';
    button.addEventListener("click", () => { this.onSubmit() });

    // Create h2 element
    const responseHeading = document.createElement('h2');
    responseHeading.textContent = 'Response:';

    // Create pre element
    const pre = document.createElement('pre');
    pre.id = 'responseOutput';

    // Style pre element directly using JavaScript
    Object.assign(pre.style, {
      backgroundColor: '#f5f5f5',
      padding: '15px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap',
      maxWidth: '1000px'
    });
    this.#responseElem = pre;

    // Append all elements to body in order
    rootElement.appendChild(heading);
    rootElement.appendChild(this.#apiKeyInput);
    rootElement.appendChild(document.createElement('br'));
    rootElement.appendChild(textarea);
    rootElement.appendChild(document.createElement('br'));
    rootElement.appendChild(button);
    rootElement.appendChild(responseHeading);
    rootElement.appendChild(pre);
  }

  async onSubmit() {
    console.log("submit clicked");
    const apiKey = this.#apiKeyInput.value;
    if (!apiKey) {
      window.alert("Please input api key first");
      return;
    }
    const prompt = document.getElementById("prompt").value;
    this.#responseElem.textContent = "Loading...";

    try {
      const question = prompt;
      const response = await fetch("http://127.0.0.1/ask", { // Update this URL if necessary
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const markdownContent = data.choices[0].message.content;
      this.#responseElem.innerHTML = marked.parse(markdownContent);
    } catch (error) {
      console.error("Error calling OpenAI:", error);
      this.#responseElem.textContent = "Error: " + error.message;
    }
  }
}

export default OpenaiChat;
