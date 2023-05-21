import { GoodsItem } from "./goodsItem";

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return <h5>К сожалению, ничего не найдено :(</h5>;
    }

    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.imdbID} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    );
}

export { GoodsList };