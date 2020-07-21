import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const CardStyle = styled.div`
  display: flex;
`

const Column = styled.div`
  width: 100%;
  border: dashed;
  position: relative;
  // text-align: center;
  `
const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `

const Price = styled.p`
  text-align: center;
  color: grey;
  font-size: 1.2rem;
`

const isReverse = (i) => {
  if ((i + 1) % 2 === 0) {
    return 'row-reverse';
  } else {
    return '';
  }
}

const Card = (props) => (
  <CardStyle style={{
    flexDirection: isReverse(props.index),
  }} >
    <Column>
      <Content>
        <img
          src={props.img}
          alt={props.titulo}
        />
        <Price>$ {props.precio}</Price>
      </Content>
    </Column>
    <Column>
      {/* <p>{props.descripcion}</p> */}
      <h2>{props.titulo}</h2>
      <table>
        <tbody>
          {Object.keys(props.caracteristicas).map(k => (<tr >
            <td>
              <span>{k}</span>
            </td>
            <td>
              <span >{props.caracteristicas[k]}</span>
            </td>
          </tr>))}
        </tbody></table>
    </Column>
  </CardStyle >


)

Card.propTypes = {
  siteTitle: PropTypes.string,
}

Card.defaultProps = {
  siteTitle: ``,
}

export default Card
