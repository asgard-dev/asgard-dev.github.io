function getQueryParam(name) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(name);
}

const youtubeLink = getQueryParam('youtubeLink');

if (youtubeLink) {
    const iframeHTML = `
        <iframe width="560" height="315" src="${youtubeLink}" frameborder="0" allowfullscreen></iframe>
    `;
    document.getElementById('easterEgg').innerHTML = iframeHTML;
}
