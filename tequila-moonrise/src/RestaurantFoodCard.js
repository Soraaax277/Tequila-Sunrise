import Card from 'react-bootstrap/Card';

function RestaurantFoodCard({ imageSrc, foodname, fooddescription}) {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={imageSrc} alt={foodname} />
      <Card.Body>
        <Card.Title>{foodname}</Card.Title>
        <Card.Text>{fooddescription}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RestaurantFoodCard;