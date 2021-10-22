import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

const Cancel = () => {
  return (
    <div>
      <SEO title="Cancel Purchase" />
      <Purchase>
        <h2>Compra Cancelada 😭</h2>
        <p>Sentimos que no hayas comprato tu nuevo swag.</p>
        <p>Siempre estaremos aquí si deseas volver.</p>
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

export default Cancel
