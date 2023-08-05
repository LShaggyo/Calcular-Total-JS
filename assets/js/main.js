// Seleccion de precios

document.getElementById('espec').addEventListener('change', function() {
    let select = this.value;
    let price;
  
    switch (select) {
      case 'gama baja':
        price = 600000;
        break;
      case 'gama media':
        price = 800000;
        break;
      case 'gama alta':
        price = 1200000;
        break;
      case 'gama extrema':
        price = 2500000;
        break;
      case 'gama diseno':
        price = 3500000;
        break;
      default:
        return; 
    }
  
    document.getElementById('price-text').style.display = 'block';
    document.getElementById('price').style.display = 'block';
    document.getElementById('total').style.display = 'block';
    document.getElementById('color-text').style.display = 'block';
    document.getElementById('color').style.display = 'block';

    let priceClp = price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
    document.getElementById('price').innerText = priceClp;
    document.getElementById('price').dataset.priceValue = price;
    
  });
  
// Calculo de total
  document.getElementById('total').addEventListener('click', function() {
    let quantity = document.getElementById('cantidad').value;
    let colorSelected = document.getElementById('color').value;
    let priceSelected = Number(document.getElementById('price').dataset.priceValue);
    
    let priceTotal = quantity * priceSelected;
    let priceTotalClp = priceTotal.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
    document.getElementById('price-total').textContent = priceTotalClp;
    document.getElementById('total-num').textContent = quantity;
    document.getElementById('color-selected').style.backgroundColor = colorSelected;
    
    document.getElementById('card-2').classList.remove('hidden');
  });

