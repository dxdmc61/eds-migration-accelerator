export default function decorate(block) {
  const children = [...block.children];
  // Assuming the block structure is: <div>[title]</div> <div>[description]</div> <div>[image]</div>
  const titleElWrapper = children[0];
  const descriptionElWrapper = children[1];
  const imageElWrapper = children[2];
  // Create a container for text content
  const textContentWrapper = document.createElement('div');
  textContentWrapper.classList.add('root-text-content');
  // Process Title
  if (titleElWrapper) {
    // Find the actual title element (h1-h6 or p) within its wrapper, or use the wrapper itself
    const titleEl = titleElWrapper.querySelector('h1, h2, h3, h4, h5, h6, p') || titleElWrapper;
    titleEl.classList.add('root-title');
    textContentWrapper.append(titleEl);
  }
  // Process Description
  if (descriptionElWrapper) {
    // Find the actual description element (p) within its wrapper, or use the wrapper itself
    const descriptionEl = descriptionElWrapper.querySelector('p') || descriptionElWrapper;
    descriptionEl.classList.add('root-description');
    textContentWrapper.append(descriptionEl);
  }
  // Process Image
  if (imageElWrapper) {
    imageElWrapper.classList.add('root-image');
    const img = imageElWrapper.querySelector('img');
    if (img) {
      img.setAttribute('loading', 'lazy');
      // Optimize image loading
      // Set alt text from the title if available, otherwise a generic fallback
      img.setAttribute('alt', titleElWrapper?.textContent.trim() || 'Root block image');
    }
  }
  // Clear the block and re-append elements in the desired order
  block.innerHTML = '';
  // Clear existing content
  if (imageElWrapper) {
    block.append(imageElWrapper);
    // Image first
  }
  block.append(textContentWrapper);
  // Then text content
}