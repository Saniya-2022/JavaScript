let sampleSpan = document.getElementById("sam");
sampleSpan.style.color="red";
sampleSpan.textContent="I LOVE U";
let divTag = document.createElement("div");
let spanTag =document.createElement("span");

divTag.textContent="This is a paragraph inside the div tag.";
divTag.style.color="blue";
spanTag.textContent="This is a span tag inside the div tag.";
spanTag.style.color="yellow";
document.body.append(spanTag);
divTag.innerHTML='<p>This is a paragraph inside the div tag.</p> <span style="color: pink;">This is a span tag inside the div tag.</span>';
document.body.append(divTag);

