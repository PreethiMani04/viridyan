import { useFrame } from "@react-three/fiber"
import { useRef, useEffect } from "react"

function PlayerMovement({ playerRef }) {

  const keys = useRef({})

  useEffect(() => {

    const down = (e) => keys.current[e.key.toLowerCase()] = true
    const up = (e) => keys.current[e.key.toLowerCase()] = false

    window.addEventListener("keydown", down)
    window.addEventListener("keyup", up)

    return () => {
      window.removeEventListener("keydown", down)
      window.removeEventListener("keyup", up)
    }

  }, [])

  useFrame(() => {

    if (!playerRef.current) return

    const speed = 0.15

    if (keys.current["w"]) playerRef.current.position.z -= speed
    if (keys.current["s"]) playerRef.current.position.z += speed
    if (keys.current["a"]) playerRef.current.position.x -= speed
    if (keys.current["d"]) playerRef.current.position.x += speed

  })

  return null
}

export default PlayerMovement