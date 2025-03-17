var result = document.querySelector(".output");
function toggleHelp() {
  var discussion = document.querySelector(".help-discussion");
  discussion.style.display =
    discussion.style.display === "none" || discussion.style.display === ""
      ? "block"
      : "none";
  result.style.display =
    discussion.style.display === "none" || discussion.style.display === ""
      ? "block"
      : "none";
}

function hideHelp() {
  var help_d = document.querySelector(".help-discussion");
  help_d.style.display = "none";
  if (helpBox) {
    result.style.display = "none";
  }
}

// Speech-to-text

function startConverting() {
  var result = document.getElementById("input");

  if ("webkitSpeechRecognition" in window) {
    var speechRecognizer = new webkitSpeechRecognition();
    speechRecognizer.continuous = true;
    speechRecognizer.interimResults = true;
    speechRecognizer.lang = "en-US";
    speechRecognizer.start();

    var finalTranscripts = "";

    speechRecognizer.onresult = function (event) {
      var interimTranscripts = "";
      for (var i = event.resultIndex; i < event.results.length; i++) {
        var transcript = event.results[i][0].transcript;
        transcript = transcript.replace("\n", " "); // Ensure line breaks are removed
        if (event.results[i].isFinal) {
          finalTranscripts += transcript + " ";
        } else {
          interimTranscripts += transcript;
        }
      }

      if (result) {
        result.value = finalTranscripts + interimTranscripts;
      }
    };

    speechRecognizer.onerror = function (event) {
      console.error("Speech recognition error:", event.error);
    };
  } else {
    alert(
      "Your browser does not support speech recognition. Please use Google Chrome."
    );
  }
}

// API response
async function getAIResponse() {
  let userInput = document.getElementById("input").value;
  let output = document.getElementById("output");

  if (!userInput) {
    output.textContent = "Please enter your interests.";
    return;
  }

  output.textContent = "Thinking..."; // Show loading message

  const response = await fetch(
    "https://api-inference.huggingface.co/models/google/flan-t5-large", // Change to your preferred model
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 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", // Replace with your actual API token
      },
      body: JSON.stringify({
        inputs: `Based on my interest in ${userInput}, what professions would suit you?`,
      }),
    }
  );

  let data = await response.json();

  if (data && data[0] && data[0].generated_text) {
    output.textContent = "AI Suggests: " + data[0].generated_text;
  } else {
    output.textContent = "Sorry, I couldn't determine a profession.";
  }
}
