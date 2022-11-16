import TagName from './TagName';

const productDetails = ({ productDetails }) => {
  const title = productDetails?.title;
  const Location = productDetails?.location;
  const name = productDetails?.host?.name;
  const pictureHoster = productDetails?.host?.picture;
  const tags = productDetails?.tags;




  return (
    <div className="ProductDetails">
      <div className="productDetailsHead">
        <div className="productDetailsTitle">
          <h2 className="title">{title}</h2>
          <h3 className="subtitle">{Location}</h3>
          <div className="tagWrapper">
            <TagName tags={tags} />
          </div>
        </div>
        <div className="productDetailsRating">
          <div className="productDetailsHost">
            <span>{name}</span>
            <img src={pictureHoster} alt="pic-user" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDetails;
