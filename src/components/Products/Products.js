import Item from "./item";
import "./Products.css";


// Get Products data
function getProducts(items, filter){
  return items.map((product) => {
        return <Item key={product.id} item={product}/>;
      }).filter((value) => {
        // Filter Products based on chosen Category
        return filter === "all products"
            ? true
            : value.props.item.category === filter;
      });
}

//  Sort by Price from lower to higher, to change direction pass bool = true
function sortByPrice (products, toReverse = false){
  products.sort((a, b) => {
    return a.props.item.price - b.props.item.price;
  })
  if (toReverse){
    products.reverse();
  }
  return products
}

// Sort by Title (abc), to change direction pass bool = true
function sortByTitle (products, toReverse = false){
  products.sort((a, b) => {
    return a.props.item.title.localeCompare(b.props.item.title);
  })
  if (toReverse){
    products.reverse();
  }
  return products
}

// Sort by Rating, to change direction pass bool = true
function sortByRating (products, toReverse = false){
  products.sort((a, b) => {
    return a.props.item.rating.rate - b.props.item.rating.rate;
  })
  if (toReverse){
    products.reverse();
  }
  return products
}

// Sort by Count
function sortByCount(products){
  products.sort((a, b) => {
    return a.props.item.rating.count - b.props.item.rating.count;
  })
  return products
}

//  Sort switch case
function sortByCase(categorySort, products){
  switch (categorySort){
    case "Price, low to high":
      sortByPrice(products)
      break
    case "Price, high to low":
      sortByPrice(products, true)
      break
    case "Alphabetically, A-Z":
        sortByTitle(products)
          break
    case "Alphabetically, Z-A":
      sortByTitle(products, true)
          break
    case "Rating, low to high":
      sortByRating(products)
          break
    case "Rating, high to low":
      sortByRating(products, true)
      break
    case "Best Selling":
      sortByCount(products)
          break
    default:
      break
  }
}

// Main Function
const Products = (props) => {
  //   Display Products, pass Items state and Filter State
  const products = getProducts(props.passItems, props.passFilter)
  // Sort Products, using Sort State
  sortByCase(props.passSort, products)
  // create element
  return <section className="products">{products}</section>;
};
export default Products;
