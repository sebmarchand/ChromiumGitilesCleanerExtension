function hideElements() {
  const listItems = document.querySelectorAll('.CommitLog-item');

  const regexPatterns = [
    /Roll .* PGO Profile/i,
    /Roll .* AFDO/i,
    /Incrementing VERSION to .*/i,
    /Automatic update from google3.*/i,
    /Automated Commit.*/i
  ];

  listItems.forEach((item) => {
    const textContent = item.textContent;
    for (let regex of regexPatterns) {
      if (regex.test(textContent)) {
        item.style.display = 'none';
        break;
      }
    }
  });
}

window.addEventListener('load', function() {
  hideElements();
});
