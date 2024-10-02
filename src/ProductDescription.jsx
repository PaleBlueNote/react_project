export default function ProductDescription(props) {
  // props.product = {
  //   id: 1,
  //   title: "product1",
  //   content: "content1",
  //   price: 10000,
  // };
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.product.id}.jpg`}
        width="80%"
      />
      <h4>{props.product.title}</h4>
      <p>{props.product.content}</p>
      <p>{props.product.price}</p>
    </div>
  );
}
