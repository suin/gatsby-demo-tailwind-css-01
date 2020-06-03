import React from "react"
import tw, { css, styled } from "twin.macro"

// Using `tw` prop:
const Title = ({ children }) => <h1 tw="text-3xl font-bold py-2">{children}</h1>

// Using `css` prop:
const Description = ({ children }) => (
  <p
    css={[
      tw`py-2 italic`,
      css`
        text-decoration: underline;
      `,
    ]}
  >
    {children}
  </p>
)

// Conditional styles:
const Link = styled.a(({ small }) => [
  tw`text-white bg-black px-8 py-2 rounded`,
  small ? tw`text-sm` : tw`text-lg`,
])

// Create and style new elements using tw
const Quote = tw.p`border-l-2 border-gray-400 text-gray-600 pl-4 ml-2 my-4`

const IndexPage = () => (
  <>
    <Title>Tailwind CSS + Gatsby demo</Title>
    <Description>
      This demo uses twin.macro and gatsby-plugin-emotion.
    </Description>
    <Quote>twin - Use Tailwind classes within css-in-js libraries</Quote>
    <Link small href="http://">
      See GitHub
    </Link>
  </>
)

export default IndexPage
