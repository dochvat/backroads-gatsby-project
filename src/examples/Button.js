//tento soubor byl pouze pro testovani jak priradit props
import styled from "styled-components" //import jen style component, bez podpory react funkci, muzeme ale kombinovat oboje

const color = "blue"

const Button = styled.button`
  color: ${props => props.color};
  background: ${color};
  /* font-size: 1rem; */
  font-size: ${props => (props.big ? "3rem" : "1rem")};
  padding: 1rem;
  margin: 1rem;
`

export default Button
