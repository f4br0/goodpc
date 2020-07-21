import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
`

const Price = styled.p`
color: grey;
font-size: 22px;
`

const Button = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
`

// .card button:hover {
//   opacity: 0.7;
// }


const Card = (props) => (
  <div style={{ padding: '20px' }}>
    <Container>
      <img
        style={{ maxWidth: '200px' }}
        src={props.img} />
      <h3>{props.titulo}</h3>
      <Price>{props.precio}</Price>
      <p>{props.descripcion}</p>
    </Container>
  </div>
)

Card.propTypes = {
  siteTitle: PropTypes.string,
}

Card.defaultProps = {
  siteTitle: ``,
}

export default Card
