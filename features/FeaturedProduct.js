import SectionTitle from "../components/SectionTitle";
import bird from "../assets/icon/bird.svg";
import turtle from "../assets/icon/turtle.svg";
import Slider from "../containers/Slider";
import { ProductCard } from "../containers";

const FeaturedProduct = ({...props}) => {
  const { products, shoesSizes } = props;
  return (
    <section className="pb-32">
      <SectionTitle
        icon={bird}
        teaser="Fin de stock"
        title="Les chaussons en promotion !"
        linkIcon1="sandals"
        linkLabel1="Trouver chausson à son pied"
        url1="/promotions"
        linkClass="button-accent"
      />
      <Slider>
        {products.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              shoesSizes={shoesSizes}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default FeaturedProduct;

export const RelatedProduct = ({...props}) => {
  const { products, shoesSizes } = props;
  return (
    <section className="pb-32">
      <SectionTitle
        icon={turtle}
        teaser="Chaussons similaires"
        title="Vous pourriez aussi aimer..."
        linkIcon1="sandals"
        linkLabel1="Trouver chausson à son pied"
        url1="/produits"
        linkClass="button-accent"
      />
      <Slider>
        {products.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              shoesSizes={shoesSizes}
            />
          );
        })}
      </Slider>
    </section>
  );
};
