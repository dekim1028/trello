import { createGlobalStyle, css } from "styled-components";

const ResetStyle = createGlobalStyle`
  a,
  abbr,
  acronym,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  blockquote,
  body,
  canvas,
  caption,
  center,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  output,
  p,
  pre,
  q,
  ruby,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  tt,
  u,
  ul,
  var,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    line-height:1.4;
  }

  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
    font-family: 'Poppins-Regular', 'NotoSansKR-Regular';
    outline: none;
    ::-webkit-scrollbar {
      height: 4px;
      width: 3px;
    }
    ::-webkit-scrollbar-track {
        background: #333333;
    }
    ::-webkit-scrollbar-thumb {
        background: #4d4d4d;
    }
    ::-webkit-scrollbar-track:horizontal {
        background: #333333;
    }
    ::-webkit-scrollbar-thumb:horizontal {
        background: #4d4d4d;
    }
  }
  
  ul,
  ol {
    list-style: none;
  }

  a,
  a:visited {
    text-decoration: none;
  }

  textarea,
  input{
    -webkit-appearance: none;
    border-radius: 0;
  }
`;

export default ResetStyle;
