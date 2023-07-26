// Function to reset font styles to be better for Neurodivergent Reading
function fontReset() {
  const elements = document.querySelectorAll('*');
  for (const element of elements) {
    element.style.fontWeight = '400';
    if (element.style.textTransform === 'uppercase') {
      element.style.textTransform = 'capitalize';
    }
    if (element.classList.contains('uppercase')) {
      element.classList.remove('uppercase');
    }
    if (element.tagName !== 'h1' && element.tagName !== 'h2' && element.tagName !== 'h3' && element.tagName !== 'h4' && element.tagName !== 'h5' && element.tagName !== 'h6') {
      element.style.fontSize = '1rem';
    }
    element.style.letterSpacing = '0.35px';
    element.style.lineHeight = '2.5';
  }
}
fontReset();


// Function to apply Neurodivergent Reading text formatting to the entire document body
function applyTextFormatting(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const words = node.textContent.split(/\s+/);
    const formattedWords = words.map(word => {
      // Maybe include option for font family change
      const weightCss = 'font-weight: 800; font-size: 0.96;'
      if (word.length >= 12) {
        return `<span style="${weightCss}">${word.slice(0, (Math.ceil(word.length / 2)))}</span>${word.slice((Math.ceil(word.length / 2)))}`;
      } else if (word.length >= 10) {
        return `<span style="${weightCss}">${word.slice(0, 4)}</span>${word.slice(4)}`;
      } else if (word.length >= 8) {
        return `<span style="${weightCss}">${word.slice(0, 3)}</span>${word.slice(3)}`;
      } else if (word.length >= 4) {
        return `<span style="${weightCss}">${word.slice(0, 2)}</span>${word.slice(2)}`;
      } else if (word.length > 1) {
        return `<span style="${weightCss}">${word.charAt(0)}</span>${word.slice(1)}`;
      }
      return word;
    });

    const formattedText = formattedWords.join(' ');
    const spanElement = document.createElement('span');
    spanElement.innerHTML = formattedText;

    node.parentNode.replaceChild(spanElement, node);
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    for (const childNode of node.childNodes) {
      applyTextFormatting(childNode);
    }
  }
}
applyTextFormatting(document.body);