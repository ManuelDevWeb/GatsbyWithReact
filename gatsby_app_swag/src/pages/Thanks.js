import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

const Thanks = () => {
  return (
    <div>
      <SEO title="Compra Exitosa" />
      <Purchase>
        <h2>Gracias por tu compra 😀</h2>
        <p>Espero que disfrutes tu swag, lucelo con orgullo</p>
        <p>Te esperamos por aca, nos vemos!</p>
        <span rol="img" aria-label="emoji">
          💚
        </span>
        <Link to="/">
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}

export default Thanks
