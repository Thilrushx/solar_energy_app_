import Card from 'react-bootstrap';
const ProductCard = ({   }) => {
    return (
        <Card>
            <Card.Img variant="top" src={ProductCard.image} />
            <Card.Body>
                <Card.Title>{Product.name}</Card.Title>
                <Card.Text>{Product.description}</Card.Text>
                <Card.Text>{Product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};