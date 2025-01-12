document.querySelector("button").onclick = () =>{
    let produto1 = Number(prompt('Digite o valor do 1° produto'));
    let produto2 = Number(prompt('Digite o valor do 2° produto'));
    let produto3 = Number(prompt('Digite o valor do 3° produto'));

    let total = (produto1 + produto2 + produto3).toFixed(2);
    alert(`O valor total da compra é ${total}`);
}

