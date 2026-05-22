export default function decorate(block) {
  const config = {
  }
  ;
  // Iterate over each child div (row) of the block
  [...block.children].forEach((row) => {
    // Each row is expected to have two children: a key and a value
    if (row.children.length === 2) {
      const key = row.children[0].textContent.trim().toLowerCase();
      const valueEl = row.children[1];
      // The element containing the value
      if (key === 'title') {
        config.title = valueEl.textContent.trim();
      }
      else if (key === 'description') {
        config.description = valueEl.textContent.trim();
      }
      else if (key === 'image') {
        config.image = valueEl.querySelector('picture');
        // Get the picture element
      }
    }
    row.remove();
    // Remove the original row after processing
  }
  );
  // Reconstruct the block content based on the extracted config
  if (config.image) {
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('root-image');
    imageWrapper.append(config.image);
    block.append(imageWrapper);
  }
  if (config.title) {
    const h1 = document.createElement('h1');
    h1.classList.add('root-title');
    h1.textContent = config.title;
    block.append(h1);
  }
  if (config.description) {
    const p = document.createElement('p');
    p.classList.add('root-description');
    p.textContent = config.description;
    block.append(p);
  }
}