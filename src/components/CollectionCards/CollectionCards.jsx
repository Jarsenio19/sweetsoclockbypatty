import "./CollectionCards.css";
import CardsBox from "../../common/CardsBox/CardsBox";
import GiftBox from "../../common/GiftBox/GiftBox";
import { cards } from "../../data/Data";


const CollectionCards = () => {
  return (
    <section className="container">
      <div className="cards-content">
        <h1 className="text-primary-400 fs-1100">
          Explore Sweets O'clock by Patty
        </h1>

        <CardsBox cards={cards} />
        <GiftBox giftCards={cards} />


      </div>
    </section>
  );
};

export default CollectionCards;