import TagName from './TagName';
import Collapse from './Collapse';

const productDetails = ({ productDetails }) => {
  const title = productDetails?.title;
  const Location = productDetails?.location;
  const name = productDetails?.host?.name;
  const pictureHoster = productDetails?.host?.picture;
  const tags = productDetails?.tags;
  const description = productDetails?.description
  const equipments = productDetails?.equipments;



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
      <div className="productDetailsCollapse">
        <Collapse title={'Description'} key="desc" descrition={description} />
        <Collapse title={'Equipements'} key="equip" equipments={equipments} />
      </div>
    </div>
  );
};

export default productDetails;
