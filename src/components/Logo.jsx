export function LogoAlone(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 340 341"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_566_4231)">
        <g clipPath="url(#clip1_566_4231)">
          <path
            d="M79.7044 133.302C61.5473 128.23 44.491 119.381 30.7388 106.487C5.33275 82.6644 -15.13 54.9642 15.0155 17.3985C36.1461 -6.00201 76.4883 -3.67597 99.9394 17.3985L243.276 142.952C257.888 155.752 245.048 179.487 226.339 174.261L79.7044 133.302Z"
            fill="#095C78"
          />
          <path
            d="M324.199 100.338C348.174 78.7924 342.447 38.4138 318.472 16.8683C294.497 -4.67746 255.625 -4.67746 231.65 16.8683C203.177 36.4616 201.241 77.8093 227.758 99.9776L257.969 125.233C267.595 133.281 281.529 133.526 291.433 125.823L324.199 100.338Z"
            fill="#095C78"
          />
        </g>
        <g clipPath="url(#clip2_566_4231)">
          <path
            d="M259.865 207.685C278.022 212.757 295.079 221.606 308.831 234.501C334.237 258.323 354.7 286.023 324.554 323.589C303.424 346.989 263.081 344.663 239.63 323.589L96.2942 198.035C81.6817 185.235 94.5216 161.5 113.231 166.726L259.865 207.685Z"
            fill="#095C78"
          />
          <path
            d="M15.371 240.649C-8.6042 262.195 -2.87738 302.574 21.0978 324.119C45.073 345.665 83.9445 345.665 107.92 324.119C136.393 304.526 138.329 263.178 111.812 241.01L81.601 215.754C71.9751 207.707 58.0407 207.461 48.1372 215.164L15.371 240.649Z"
            fill="#095C78"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_566_4231">
          <rect
            width="339.57"
            height="339.57"
            fill="white"
            transform="translate(0 0.708984)"
          />
        </clipPath>
        <clipPath id="clip1_566_4231">
          <rect
            width="339.57"
            height="192.423"
            fill="white"
            transform="translate(0 0.708984)"
          />
        </clipPath>
        <clipPath id="clip2_566_4231">
          <rect
            width="339.57"
            height="192.423"
            fill="white"
            transform="translate(339.57 340.278) rotate(-180)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo(props) {
  return (
    <div {...props}>
      <div className="flex items-center">
        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-700 bg-clip-text font-brand text-5xl font-bold tracking-tight text-transparent">
          BLO
        </span>
        <LogoAlone className="h-12 w-12" />
      </div>
    </div>
  )
}
