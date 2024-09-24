import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import gatoImg from '../assets/mascota1.jpeg';
import conejoImg from '../assets/mascota2.jpg';
import perroSiberianoImg from '../assets/mascota3.jpg';
import { ReactComponent as Huella } from '../assets/huella.svg'; // Ruta al archivo SVG de huella
// Estilos personalizados usando styled-components
const StyledSection = styled.section`
    background-color: ${(props) => props.bg || 'transparent'};
    padding: 3rem 1rem;
    border-radius: 15px;
    margin-bottom: 3rem;
`;

const StyledTitle = styled.h2`
    color: #00509d; /* Azul pastel */
    font-weight: bold;
    text-align: center;
`;

const StyledParagraph = styled.p`
    color: #004085;
    text-align: center;
    font-size: 1.1rem;
`;

const StyledCarouselImage = styled.img`
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 15px;
`;

const StyledCarouselCaption = styled(Carousel.Caption)`
  background: #8576766e;
  border-radius: 40px;
  padding: 10px;
  color: white;
  backdrop-filter: blur(5px); /* Opcional: Añade un poco de desenfoque */
`;
const HuellaStyled = styled(Huella)`
  width: 50px; /* Ajusta el tamaño si es necesario */
  height: 50px; /* Ajusta el tamaño si es necesario */
  fill: #ffffff; /* Cambia el color del SVG aquí */
  filter: opacity(0.5);
`;


const DefaultPage = () => {
    return (
        <Container >
            {/* Sección "Sobre Nosotros" */}
            <StyledSection bg="#FFEB99"> {/* Amarillo pastel de fondo */}
                <HuellaStyled/>
                <StyledTitle>Sobre Nosotros</StyledTitle>
                <StyledParagraph>
                    En nuestra tienda de mascotas, nos dedicamos a ofrecer lo mejor para tus amigos peludos.
                    Contamos con una amplia variedad de productos y servicios para garantizar el bienestar y la felicidad de tus mascotas.
                </StyledParagraph>
                <StyledParagraph>
                    Ubicados en el corazón de la ciudad, somos tu destino único para encontrar todo lo que tu mascota necesita.
                    ¡Visítanos y descubre por qué somos la tienda preferida por los amantes de los animales!
                </StyledParagraph>
            </StyledSection>

            {/* Sección "Ubicación" */}
            <StyledSection bg="#BEE3F8"> {/* Azul pastel de fondo */}
                <StyledTitle>Ubicación</StyledTitle>
                <StyledParagraph>Estamos ubicados en Calle 100, Bogota, Colombia. ¡Ven a conocernos!</StyledParagraph>
            </StyledSection>

            {/* Sección "Galería de Mascotas" */}
            <StyledSection>
                <StyledTitle>Galería de Mascotas</StyledTitle>
                <Carousel>
                    <Carousel.Item>
                        <StyledCarouselImage
                            src={gatoImg}
                            alt="Gato con ojos de color diferente"
                        />
                        <StyledCarouselCaption>
                            <h3>Gato con Ojos de Color Diferente</h3>
                            <p>Este fascinante gato tiene ojos de colores diferentes, una característica rara y hermosa que lo hace único.</p>
                        </StyledCarouselCaption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <StyledCarouselImage
                            src={conejoImg}
                            alt="Conejo Miniatura"
                        />
                        <StyledCarouselCaption>
                            <h3>Conejo Miniatura</h3>
                            <p>El conejo miniatura es conocido por su tamaño compacto y su dulce personalidad, ideal para familias y hogares pequeños.</p>
                        </StyledCarouselCaption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <StyledCarouselImage
                            src={perroSiberianoImg}
                            alt="Perro Siberiano"
                        />
                        <StyledCarouselCaption>
                            <h3>Perro Siberiano</h3>
                            <p>El perro Siberiano es una raza robusta y resistente, conocida por su pelaje denso y su lealtad inquebrantable.</p>
                        </StyledCarouselCaption>
                    </Carousel.Item>
                </Carousel>
            </StyledSection>

            {/* Sección "Accesorios para Mascotas" */}
            <StyledSection bg="#FFEB99"> {/* Amarillo pastel de fondo */}
                <StyledTitle>Accesorios para Mascotas</StyledTitle>
                <Row>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src="https://virtualmuebles.com/cdn/shop/products/71VuiBfehwL._AC_SL1500.jpg?v=1723032620" />
                            <Card.Body>
                                <Card.Title>Collar Reflectante</Card.Title>
                                <Card.Text>
                                    Un collar esencial para la seguridad de tu mascota durante los paseos nocturnos.
                                    Con material reflectante que asegura la visibilidad en condiciones de baja luz.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src="https://www.tierragro.com/cdn/shop/products/103580_e28c14d5-3dc3-4808-b005-bdeb7e018ad7_800x.jpg?v=1596332679" />
                            <Card.Body>
                                <Card.Title>Comedero Antideslizante</Card.Title>
                                <Card.Text>
                                    Un comedero que evita los deslizamientos durante la hora de la comida. Ideal para mascotas que comen con entusiasmo.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src="https://silyconpet.net/cdn/shop/products/1_8242e3c6-b7b4-47c8-8646-0fc5c7f20cdd_1024x1024@2x.jpg?v=1603927508" />
                            <Card.Body>
                                <Card.Title>Juguete Interactivo</Card.Title>
                                <Card.Text>
                                    Un juguete que estimula la mente de tu mascota y la mantiene entretenida durante horas. Perfecto para el desarrollo mental y físico.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </StyledSection>
        </Container>
    );
};

export default DefaultPage;