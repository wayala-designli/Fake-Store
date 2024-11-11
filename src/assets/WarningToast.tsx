import React from 'react'
import Svg, { Path } from 'react-native-svg'

const WarningToast = ({ color = 'white' }: { color?: string }) => {
  return (
    <Svg width={25} height={24} fill="none">
      <Path
        fill={color}
        d="M1.5 21h22l-11-19-11 19Zm12-3h-2v-2h2v2Zm0-4h-2v-4h2v4Z"
      />
    </Svg>
  )
}

export default WarningToast
