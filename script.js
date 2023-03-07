function carregarDados() {
  fetch('https://docs.google.com/spreadsheets/d/e/1aKYRQVRQGn0C0HjA4zvBLoBOxbwPoIrAsMu0tPoJX1s/pub?output=csv')
    .then(response => response.text())
    .then(data => {
      const linhas = data.split('\n');
      const dados = linhas[1].split(',');
      const marquee = document.getElementById('dados-marquee');
      marquee.innerHTML = dados.join(' - ');
    });
}

carregarDados();
setInterval(carregarDados, 5000);
