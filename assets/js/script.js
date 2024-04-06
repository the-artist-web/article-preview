const btnShare = document.querySelector("[data-btn-share]"),
articlePreviewBox = document.querySelector("[data-article-preview-box]");

btnShare.addEventListener("click", () => {
    articlePreviewBox.classList.toggle("active");
});