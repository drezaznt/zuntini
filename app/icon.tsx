import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: '#faf8f3',
          border: '2.5px solid #506241',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          fontSize: 11,
          fontWeight: 300,
          color: '#506241',
          letterSpacing: '-0.3px',
        }}
      >
        AZ
      </div>
    ),
    { ...size },
  )
}
