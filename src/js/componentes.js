import '../css/componentes.css';
//import wepacklogo from '../assets/img/webpack-logo.png'

export const saludar = (nombre) => {
    console.log('Creando etiqueta H1');
    const h1 = document.createElement('h1');
    h1.innerText = `hola, ${nombre}!!!`;
    document.body.append(h1);

    //img
    // console.log(wepacklogo);
    // const img = document.createElement('img');
    // img.src = wepacklogo;
    // document.body.append(img);
}
