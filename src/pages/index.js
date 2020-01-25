import React from "react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <div>
        <h1>
          “The original vision was everyone has their own space and made things.
          Then the silos formed and attracted people because it was easier.” --
          Aaron Pareki
        </h1>
        <p>
          I am interested in the{" "}
          <a href="https://boffosocko.com/2017/07/28/an-introduction-to-the-indieweb/">
            indieweb
          </a>
          , this is my place to explore what it has to offer.
        </p>
      </div>
    </Layout>
  )
}
