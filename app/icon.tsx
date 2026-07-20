import { ImageResponse } from 'next/og'

// Favicon: "BG" monogram on the site's highlight green.
export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#3dc8a7',
                    color: '#0f161f',
                    fontSize: 34,
                    fontWeight: 700,
                    letterSpacing: -1,
                    borderRadius: 14,
                }}
            >
                BG
            </div>
        ),
        { ...size }
    )
}
