import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"
import { db } from "../firebase.config"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.css'
import Spinner from "../components/Spinner"

const Slider = () => {
    const [listings, setListings] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchListing = async () => {
            const listingRef= collection(db, 'listings')
            const q = query(listingRef, orderBy('timestamp', 'desc'), limit(5))
            const querySnap = await getDocs(q)
    
            let listings = []
    
            querySnap.forEach((doc) => {
                return listings.push({
                    id: doc.id,
                    data: doc.data(),
                })
            })
    
            setListings(listings)
            setLoading(false)
        }
        fetchListing()
    }, [])

    if (loading) {
        return <Spinner />
    }

    if (!listings.length === 0) {
        return <></>
    }

  return listings && (
    <>
        <p className="exploreHeading">Recommended</p>

        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} slidesPerView={1} pagination={{ clickable: true }}>
            {listings.map(({ data, id }) => (
                <SwiperSlide key={id} onClick={() => navigate(`/category/${data.type}/${id}`)}>
                    <div style={{ background: `url(${data.imageUrls[0]}) center no-repeat`, backgroundSize: 'cover', height: '300px', }} className="swiperSlideDiv">
                        <p className="swiperSlideText">{data.name}</p>
                        <p className="swiperSlidePrice">
                            ${data.discountedPrice ?? data.regularPrice}
                            {' '} {data.type === 'rent' && '/ month'}
                        </p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
  )
}

export default Slider