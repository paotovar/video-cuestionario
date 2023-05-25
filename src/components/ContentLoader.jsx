import React from "react"
import ContentLoader from "react-content-loader"

const LoaderContent = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="38" cy="394" r="15" /> 
    <rect x="79" y="376" rx="2" ry="2" width="300" height="21" /> 
    <rect x="77" y="410" rx="2" ry="2" width="299" height="20" /> 
    <rect x="18" y="54" rx="2" ry="2" width="364" height="306" />
  </ContentLoader>
)

export default LoaderContent

