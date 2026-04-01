import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: '#faf8f3',
          border: '6px solid #506241',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          fontSize: 64,
          fontWeight: 300,
          color: '#506241',
          letterSpacing: '-2px',
        }}
      >
        AZ
      </div>
    ),
    { ...size },
  )
}
