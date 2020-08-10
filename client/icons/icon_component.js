import React from 'react'

export const Search = ({color, size}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size || '13px'}
      height={size || '13px'}
      fill={color || 'gray'}
      viewBox="0 0 32 32"
    >
      <title>search</title>
      <path d="M19.427 20.427c-1.39 0.99-3.090 1.573-4.927 1.573-4.694 0-8.5-3.806-8.5-8.5s3.806-8.5 8.5-8.5c4.694 0 8.5 3.806 8.5 8.5 0 1.837-0.583 3.537-1.573 4.927l5.585 5.585c0.55 0.55 0.546 1.431-0 1.976l-0.023 0.023c-0.544 0.544-1.431 0.546-1.976 0l-5.585-5.585zM14.5 20c3.59 0 6.5-2.91 6.5-6.5s-2.91-6.5-6.5-6.5c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5v0z" />
    </svg>
  )
}

export const Shop = ({color, size}) => {
  return (
    <svg
      width={size || '13px'}
      height={size || '13px'}
      fill={color || 'gray'}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <title>shop</title>
      <path d="M6.123 7.25l0.791-5.25h-4.114l-1.719 4.5c-0.053 0.16-0.081 0.326-0.081 0.5 0 1.104 1.15 2 2.571 2 1.31 0 2.393-0.764 2.552-1.75zM10 9c1.42 0 2.571-0.896 2.571-2 0-0.041-0.003-0.082-0.005-0.121l-0.509-4.879h-4.114l-0.51 4.875c-0.002 0.041-0.004 0.082-0.004 0.125 0 1.104 1.151 2 2.571 2zM15 10.046v3.954h-10v-3.948c-0.438 0.158-0.92 0.248-1.429 0.248-0.195 0-0.384-0.023-0.571-0.049v6.349c0 0.77 0.629 1.4 1.398 1.4h11.202c0.77 0 1.4-0.631 1.4-1.4v-6.348c-0.188 0.025-0.376 0.049-0.571 0.049-0.506-0.001-0.99-0.093-1.429-0.255zM18.92 6.5l-1.721-4.5h-4.113l0.79 5.242c0.154 0.99 1.237 1.758 2.553 1.758 1.42 0 2.571-0.896 2.571-2 0-0.174-0.028-0.34-0.080-0.5z" />
    </svg>
  )
}

export const ShopingCard = ({color, size}) => {
  return (
    <svg
      width={size || '13px'}
      height={size || '13px'}
      fill={color || 'gray'}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <title>shopping-cart</title>
      <path d="M13 17c0 1.104 0.894 2 2 2 1.104 0 2-0.896 2-2 0-1.106-0.896-2-2-2-1.106 0-2 0.894-2 2zM3 17c0 1.104 0.895 2 2 2 1.103 0 2-0.896 2-2 0-1.106-0.897-2-2-2-1.105 0-2 0.894-2 2zM6.547 12.172l11.068-3.162c0.211-0.061 0.385-0.289 0.385-0.51v-5.5h-14v-1.6c0-0.22-0.181-0.4-0.399-0.4h-3.202c-0.219 0-0.399 0.18-0.399 0.4v1.6h2l1.91 8.957 0.090 0.943v1.649c0 0.219 0.18 0.4 0.4 0.4h13.2c0.22 0 0.4-0.182 0.4-0.4v-1.549h-11.248c-1.15 0-1.174-0.551-0.205-0.828z" />
    </svg>
  )
}

export const Users = ({color, size}) => {
  return (
    <svg
      width={size || '13px'}
      height={size || '13px'}
      fill={color || 'gray'}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <title>users</title>
      <path d="M15.989 19.129c0-2.246-2.187-3.389-4.317-4.307-2.123-0.914-2.801-1.684-2.801-3.334 0-0.989 0.648-0.667 0.932-2.481 0.12-0.752 0.692-0.012 0.802-1.729 0-0.684-0.313-0.854-0.313-0.854s0.159-1.013 0.221-1.793c0.064-0.817-0.398-2.56-2.301-3.095-0.332-0.341-0.557-0.882 0.467-1.424-2.24-0.104-2.761 1.068-3.954 1.93-1.015 0.756-1.289 1.953-1.24 2.59 0.065 0.78 0.223 1.793 0.223 1.793s-0.314 0.17-0.314 0.854c0.11 1.718 0.684 0.977 0.803 1.729 0.284 1.814 0.933 1.492 0.933 2.481 0 1.65-0.212 2.21-2.336 3.124-2.131 0.917-2.794 2.387-2.783 4.516 0.003 0.637-0.011 0.871-0.011 0.871h16c0 0-0.011-0.234-0.011-0.871zM18.528 13.365c-1.135-0.457-1.605-1.002-1.605-2.066 0-0.641 0.418-0.432 0.602-1.603 0.077-0.484 0.447-0.008 0.518-1.115 0-0.441-0.202-0.551-0.202-0.551s0.103-0.656 0.143-1.159c0.050-0.627-0.364-2.247-2.268-2.247s-2.318 1.62-2.269 2.247c0.042 0.502 0.144 1.159 0.144 1.159s-0.202 0.109-0.202 0.551c0.071 1.107 0.441 0.631 0.518 1.115 0.184 1.172 0.602 0.963 0.602 1.603 0 1.064-0.438 1.562-1.809 2.152-0.069 0.029-0.12 0.068-0.183 0.102 1.64 0.712 4.226 1.941 4.838 4.447h2.645c0 0 0-1.906 0-2.318 0-1-0.273-1.834-1.472-2.317z" />
    </svg>
  )
}

export const Clock = ({color, size}) => {
  return (
    <svg
      width={size || '13px'}
      height={size || '13px'}
      fill={color || 'gray'}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <title>clock</title>
      <path d="M10 0.4c-5.303 0-9.601 4.298-9.601 9.6 0 5.303 4.298 9.601 9.601 9.601 5.301 0 9.6-4.298 9.6-9.601s-4.299-9.6-9.6-9.6zM9.999 17.6c-4.197 0-7.6-3.402-7.6-7.6 0-4.197 3.402-7.6 7.6-7.6 4.197 0 7.601 3.402 7.601 7.6 0 4.197-3.404 7.6-7.601 7.6zM11 9.33v-5.33h-2v6.245l-3.546 2.048 1 1.732 4.115-2.377c0.238-0.137 0.431-0.473 0.431-0.748v-0.168l4.24-4.166c-0.198-0.271-0.411-0.529-0.647-0.766l-3.593 3.53z" />
    </svg>
  )
}

export const Wrench = ({color, size}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size || '13px'}
      height={size || '13px'}
      fill={color || 'gray'}
      viewBox="0 0 20 20"
    >
      <title>Raport a damage</title>
      <path d="M6.47 9.8c-0.485 0.172-1.043 0.272-1.625 0.272-2.761 0-5-2.239-5-5 0-0.667 0.131-1.303 0.368-1.885l-0.012 0.033 3.95 3.95 2.82-2.83-3.94-3.93c0.542-0.219 1.171-0.347 1.829-0.347 2.761 0 5 2.239 5 5 0 0.734-0.158 1.43-0.442 2.058l0.013-0.031 10 10-2.83 2.83-10.13-10.12z" />
    </svg>
  )
}

export const Logos = ({size, color}) => {
  return (
    <svg
      width={size || '20'}
      height={size || '20'}
      fill={color || 'black'}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1356.92 402.37"
    >
      <title>icon</title>
      <path
        d="M1011.24,201.36h58.3l-117.21,201h469.21l-117.17-201h79.94V176.53H1290L1186.94,0l-103,176.53h-58.3L1128.55,0H659.42L894,402.37Zm175.7-152.48L1261.4,176.7H1112.47Zm-89.06,152.48h177.8l102.8,176.35H995.21Zm-12.3-176.74L893.85,353.44,702.13,24.62Z"
        transform="translate(-64.62)"
      />
      <path
        d="M101.85,201v24.62h94.31L299.23,402.37l103-176.74h58.48L357.62,402.37h469.3L592.31,0,475.1,201H416.62L533.84,0H64.62L181.79,201ZM592.44,48.88,784.17,377.71H400.59ZM299.36,353.44,224.89,225.63H373.82ZM107.5,24.62H491L388.28,201h-178Z"
        transform="translate(-64.62)"
      />
    </svg>
  )
}

export const Menu = ({color, size}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size || '20'}
      height={size || '20'}
      fill={color || 'black'}
      viewBox="0 0 20 20"
    >
      <title>cheveron-down</title>
      <path d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 4.242-4.243-4.242-1.414 1.414z" />
    </svg>
  )
}

export const Confirm = ({color, size}) => {
  return (
    <svg
      width={size || '20'}
      height={size || '20'}
      fill={color || 'white'}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 17.837 17.837"
      style={{enableBackground: 'new 0 0 17.837 17.837'}}
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27
           c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0
           L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"
        />
      </g>
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  )
}

export const Minus = ({color, size}) => {
  return (
    <svg
      width={size || '12'}
      height={size || '12'}
      fill={color || 'grey'}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <title>minus</title>
      <path d="M16 10c0 0.553-0.048 1-0.601 1h-10.798c-0.552 0-0.601-0.447-0.601-1s0.049-1 0.601-1h10.799c0.552 0 0.6 0.447 0.6 1z" />
    </svg>
  )
}

export const Plus = ({color, size}) => {
  return (
    <svg
      width={size || '12'}
      height={size || '12'}
      fill={color || 'grey'}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <title>plus</title>
      <path d="M16 10c0 0.553-0.048 1-0.601 1h-4.399v4.399c0 0.552-0.447 0.601-1 0.601s-1-0.049-1-0.601v-4.399h-4.399c-0.552 0-0.601-0.447-0.601-1s0.049-1 0.601-1h4.399v-4.399c0-0.553 0.447-0.601 1-0.601s1 0.048 1 0.601v4.399h4.399c0.553 0 0.601 0.447 0.601 1z" />
    </svg>
  )
}

export const RemoveIcon = ({color, size}) => {
  return (
    <svg
      width={size || '8'}
      height={size || '8'}
      fill={color || 'black'}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 95.939 95.939"
      style={{enableBackground: 'new 0 0 95.939 95.939'}}
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M62.819,47.97l32.533-32.534c0.781-0.781,0.781-2.047,0-2.828L83.333,0.586C82.958,0.211,82.448,0,81.919,0
     c-0.53,0-1.039,0.211-1.414,0.586L47.97,33.121L15.435,0.586c-0.75-0.75-2.078-0.75-2.828,0L0.587,12.608
     c-0.781,0.781-0.781,2.047,0,2.828L33.121,47.97L0.587,80.504c-0.781,0.781-0.781,2.047,0,2.828l12.02,12.021
     c0.375,0.375,0.884,0.586,1.414,0.586c0.53,0,1.039-0.211,1.414-0.586L47.97,62.818l32.535,32.535
     c0.375,0.375,0.884,0.586,1.414,0.586c0.529,0,1.039-0.211,1.414-0.586l12.02-12.021c0.781-0.781,0.781-2.048,0-2.828L62.819,47.97
     z"
        />
      </g>
    </svg>
  )
}

export const Note = ({color, size}) => {
  return (
    <svg
      width={size || '15'}
      height={size || '15'}
      fill={color || 'grey'}
      viewBox="0 -1 381.53417 381"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m370.589844 230.964844c-5.523438 0-10 4.476562-10 10v88.792968c-.019532 16.558594-13.4375 29.980469-30 30h-280.589844c-16.5625-.019531-29.980469-13.441406-30-30v-260.589843c.019531-16.5625 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.523438-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.589843c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.789062c0-5.523438-4.476563-10.003906-10-10.003906zm0 0" />
      <path d="m156.367188 178.34375 146.011718-146.015625 47.089844 47.089844-146.011719 146.015625zm0 0" />
      <path d="m132.542969 249.257812 52.039062-14.414062-37.625-37.625zm0 0" />
      <path d="m362.488281 7.578125c-9.769531-9.746094-25.585937-9.746094-35.355469 0l-10.605468 10.605469 47.089844 47.089844 10.605468-10.605469c9.75-9.769531 9.75-25.585938 0-35.355469zm0 0" />
    </svg>
  )
}

export const AddUser = ({color, size}) => {
  return (
    <svg
      width={size || '13px'}
      height={size || '13px'}
      fill={color || 'grey'}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <title>add-user</title>
      <path d="M15.989 19.129c0.011-2.129-2.186-3.389-4.317-4.307-2.123-0.914-2.801-1.684-2.801-3.334 0-0.989 0.648-0.667 0.932-2.481 0.12-0.752 0.692-0.012 0.802-1.729 0-0.684-0.313-0.854-0.313-0.854s0.159-1.013 0.221-1.793c0.064-0.817-0.398-2.56-2.301-3.095-0.332-0.341-0.557-0.882 0.467-1.424-2.24-0.104-2.761 1.068-3.954 1.93-1.015 0.756-1.289 1.953-1.24 2.59 0.065 0.78 0.223 1.793 0.223 1.793s-0.314 0.17-0.314 0.854c0.11 1.718 0.684 0.977 0.803 1.729 0.284 1.814 0.933 1.492 0.933 2.481 0 1.65-0.212 2.21-2.336 3.124-2.131 0.917-2.794 2.387-2.783 4.516 0.003 0.637-0.011 0.871-0.011 0.871h16c0 0-0.014-0.234-0.011-0.871zM17 10v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
    </svg>
  )
}

export const Products = ({color, size}) => {
  return (
    <svg
      width={size || '13px'}
      height={size || '13px'}
      fill={color || 'grey'}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <title>add-to-list</title>
      <path d="M19.4 9h-3.4v-3.4c0-0.6-0.4-0.6-1-0.6s-1 0-1 0.6v3.4h-3.4c-0.6 0-0.6 0.4-0.6 1s0 1 0.6 1h3.4v3.4c0 0.6 0.4 0.6 1 0.6s1 0 1-0.6v-3.4h3.4c0.6 0 0.6-0.4 0.6-1s0-1-0.6-1zM7.4 9h-6.8c-0.6 0-0.6 0.4-0.6 1s0 1 0.6 1h6.8c0.6 0 0.6-0.4 0.6-1s0-1-0.6-1zM7.4 14h-6.8c-0.6 0-0.6 0.4-0.6 1s0 1 0.6 1h6.8c0.6 0 0.6-0.4 0.6-1s0-1-0.6-1zM7.4 4h-6.8c-0.6 0-0.6 0.4-0.6 1s0 1 0.6 1h6.8c0.6 0 0.6-0.4 0.6-1s0-1-0.6-1z" />
    </svg>
  )
}

export const Upload = ({color, size}) => {
  return (
    <svg
      width={size || '13px'}
      height={size || '13px'}
      fill={color || 'grey'}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <title>upload</title>
      <path d="M8 12h4v-6h3l-5-5-5 5h3v6zM19.338 13.532c-0.21-0.224-1.611-1.723-2.011-2.114-0.265-0.259-0.644-0.418-1.042-0.418h-1.757l3.064 2.994h-3.544c-0.102 0-0.194 0.052-0.24 0.133l-0.816 1.873h-5.984l-0.816-1.873c-0.046-0.081-0.139-0.133-0.24-0.133h-3.544l3.063-2.994h-1.756c-0.397 0-0.776 0.159-1.042 0.418-0.4 0.392-1.801 1.891-2.011 2.114-0.489 0.521-0.758 0.936-0.63 1.449l0.561 3.074c0.128 0.514 0.691 0.936 1.252 0.936h16.312c0.561 0 1.124-0.422 1.252-0.936l0.561-3.074c0.126-0.513-0.142-0.928-0.632-1.449z" />
    </svg>
  )
}