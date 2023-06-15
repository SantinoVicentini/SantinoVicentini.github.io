const popButton = document.getElementById('popButton');
const rockButton = document.getElementById('rockButton');
const popList80 = document.getElementById('80pop');
const billieJean = document.getElementById('BillieJean');
const whenDovesCry = document.getElementById('WhenDovesCry');

const iframeContainer = document.getElementById('iframeContainer');

popButton.addEventListener('click', function() {
    popList80.style.display = 'block';
});

billieJean.addEventListener('click', function() {
    iframeContainer.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/5ChkMS8OtdzJeqyybCc9R5?utm_source=generator&theme=0" width="40%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
});

whenDovesCry.addEventListener('click', function() {
    iframeContainer.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/51H2y6YrNNXcy3dfc3qSbA?utm_source=generator&theme=0" width="40%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
});

rockButton.addEventListener('click', function() {
  iframeContainer.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7snQQk1zcKl8gZ92AnueZW?utm_source=generator&theme=0" width="40%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
});

