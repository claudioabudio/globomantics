import { useMemo } from "react"

const useFeaturedHouse = (allHouses) => {
    const featuredHouse = useMemo(() => {
        if (allHouses.length) {
          let randomIndex = Math.floor(Math.random() * allHouses.length)
          return allHouses[randomIndex]
        }
      },
      [allHouses])
      return featuredHouse;
}

export default useFeaturedHouse;
