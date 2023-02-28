import React, {useEffect, useState} from 'react';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';

const tools = [
    {
        "id": 1,
        "img": "/assets/images/1.jpg",
        "alt": "Taladro percutor DeWalt",
        "name": "Taladro Percutor",
        "brand": "DeWalt",
        "price": 360000,
        "description":
          "Taladro percutor 20V DCD985L2-B2",
        "stock": 10,
        "category": "electricas"
      },
      {
        "id": 2,
        "img": "/assets/images/2.jpg",
        "alt": "Pala telescopica Stanley ",
        "name": "Pala telescopica",
        "brand": "Stanley",
        "price": 9990,
        "description":
          "Pala punta huevo mango telescopico",
        "stock": 20,
        "category": "manuales"
      },
      {
        "id": 3,
        "img": "/assets/images/3.jpg",
        "alt": "Sierra de banco DeWalt",
        "name": "Sierra banco",
        "brand": "DeWalt",
        "price": 409990,
        "description":
          "Sierra banco 1800W DWE7470 + sierra caladora 500W DW300",
        "stock": 5,
        "category": "electricas"
      },
      {
        "id": 4,
        "img": "/assets/images/4.jpg",
        "alt": "Mascarilla respirador Karson",
        "name": "Mascarilla respirador",
        "brand": "Karson",
        "price": 26900,
        "description":
          "Mascarilla respirador filtro doble",
        "stock": 40,
        "category": "epp"
      },
      {
        "id": 5,
        "img": "/assets/images/5.jpg",
        "alt": "Picota Redline",
        "name": "Picota",
        "brand": "Redline",
        "price": 28900,
        "description":
          "Picota de acero mango fibra de vidrio",
        "stock": 20,
        "category": "manuales"
      },
      {
        "id": 6,
        "img": "/assets/images/6.jpg",
        "alt": "Overol Redline",
        "name": "Overol",
        "brand": "Redline",
        "price": 52900,
        "description":
          "Overol azul talla M Canvas",
        "stock": 50,
        "category": "epp"
      },
      {
        "id": 7,
        "img": "/assets/images/7.jpg",
        "alt": "Casco arnés Karson",
        "name": "Casco arnés",
        "brand": "Karson",
        "price": 3990,
        "description":
          "Casco arnés tela 6 puntas V11245",
        "stock": 40,
        "category": "epp"
      },
      {
        "id": 8,
        "img": "/assets/images/8.jpg",
        "alt": "Llave inglesa Stanley",
        "name": "Llave inglesa",
        "brand": "Stanley",
        "price": 17500,
        "description":
          "LLave inglesa ajustable",
        "stock": 70,
        "category": "manuales"
      },
      {
        "id": 9,
        "img": "/assets/images/9.jpg",
        "alt": "Sierra circular DeWalt",
        "name": "Sierra circular",
        "brand": "DeWalt",
        "price": 178900,
        "description":
          "Sierra circular eléctrica inalámbrica DCS571B 115mm negro/amarillo",
        "stock": 20,
        "category": "electricas"
      }
    ];


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detailId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(tools);
            }, 2000);
        });

        getData.then(res => setData(res.find(tools => tools.id === parseInt(detailId))));
    },[])
    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;