import React from "react";
import hotel1 from "../img/hotel-1.jpg";
import hotel2 from "../img/hotel-2.jpg";
import hotel3 from "../img/hotel-3.jpg";
import Overview from "./Overview";
import user1 from "../img/user-1.jpg";
import user2 from "../img/user-2.jpg";
import user3 from "../img/user-3.jpg";
import user4 from "../img/user-4.jpg";
import user5 from "../img/user-5.jpg";
import user6 from "../img/user-6.jpg";
import Review from "../shared/Review";

const reviews = [
  {
    id: "1",
    profileImage: user1,
    name: "Carlos Torres",
    date: "23 Feb, 2021",
    review: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
    doloremque architecto dicta animi, totam, itaque officia ex.
`,
    rating: "7.8",
  },
  {
    id: "2",
    profileImage: user2,
    name: "Melina García",
    date: "13 Set, 2021",
    review: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi, totam, itaque officia ex.
    `,
    rating: "9.3",
  },
];

const HotelView = () => {
  return (
    <main className="hotel-view">
      <div className="gallery">
        <figure className="gallery__item">
          <img src={hotel1} alt="Photoofhotel 1" className="gallery__photo" />
        </figure>
        <figure className="gallery__item">
          <img src={hotel2} alt="Photoofhotel 2" className="gallery__photo" />
        </figure>
        <figure className="gallery__item">
          <img src={hotel3} alt="Photoofhotel 3" className="gallery__photo" />
        </figure>
      </div>

      <Overview />

      <div className="detail">
        <div className="description">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
            dignissimos debitis ratione sapiente saepe. Accusantium cumque,
            quas, ut corporis incidunt deserunt quae architecto voluptate.
          </p>
          <p className="paragraph">
            Accusantium cumque, quas, ut corporis incidunt deserunt quae
            architecto voluptate delectus, inventore iure aliquid aliquam.
          </p>
          <ul className="list">
            <li className="list__item">Cercanía a la playa</li>
            <li className="list__item">Desayuno incluído</li>
            <li className="list__item">Transporte gratis al aeropuerto</li>
            <li className="list__item">Wifi gratis en toda habitación </li>
            <li className="list__item">Aire acondicionado y calefaccion</li>
            <li className="list__item">Mascotas permitidas</li>
            <li className="list__item">Hablamos todos los idiomas</li>
            <li className="list__item">Perfecto para familias</li>
          </ul>
          <div className="recommend">
            <p className="recommend__count">
              Lucy y 3 amigos más recomiendan este hotel
            </p>
            <div className="recommend__friends">
              <img src={user3} alt="Friend 1" className="recommend__photo" />
              <img src={user4} alt="Friend 2" className="recommend__photo" />
              <img src={user5} alt="Friend 3" className="recommend__photo" />
              <img src={user6} alt="Friend 4" className="recommend__photo" />
            </div>
          </div>
        </div>

        <div className="user-reviews">
          {reviews.map(({ id, profileImage, name, date, review, rating }) => (
            <Review
              id={id}
              profileImage={profileImage}
              name={name}
              date={date}
              review={review}
              rating={rating}
            />
          ))}
          <button className="btn-inline">
            Ver todos <span>&rarr;</span>
          </button>
        </div>

        <div className="cta">
          <h2 className="cta__book-now">
            ¡Buenas noticias! Nos quedan 4 habitaciones para tus fechas selectas
          </h2>
          <button className="btn">
            <span className="btn__visible">Agendar ahora</span>
            <span className="btn__invisible">Quedan 4 habitaciones</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default HotelView;
