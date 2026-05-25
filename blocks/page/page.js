export default function decorate(block) {
  const children = [...block.children];
  // Extract title
  const titleWrapper = children[0];
  const titleEl = titleWrapper ? titleWrapper.querySelector('h1, h2, h3, h4, h5, h6') || titleWrapper.firstElementChild || titleWrapper : null;
  const titleText = titleEl ? titleEl.textContent.trim() : '';
  // Extract description
  const descriptionWrapper = children[1];
  const descriptionEl = descriptionWrapper ? descriptionWrapper.querySelector('p') || descriptionWrapper.firstElementChild || descriptionWrapper : null;
  const descriptionText = descriptionEl ? descriptionEl.textContent.trim() : '';
  // Extract image
  const imageWrapper = children[2];
  const imageEl = imageWrapper ? imageWrapper.querySelector('picture, img') : null;
  // Clear the block's original content
  block.innerHTML = '';
  // Add title
  if (titleText) {
    const h1 = document.createElement('h1');
    h1.classList.add('page-title');
    h1.textContent = titleText;
    block.append(h1);
  }
  // Add description
  if (descriptionText) {
    const p = document.createElement('p');
    p.classList.add('page-description');
    p.textContent = descriptionText;
    block.append(p);
  }
  // Add image
  if (imageEl) {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('page-image');
    imageContainer.append(imageEl);
    // Move the actual image/picture element
    block.append(imageContainer);
  }
}