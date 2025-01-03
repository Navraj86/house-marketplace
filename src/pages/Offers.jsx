import { useEffect, useState } from "react"
import { collection, getDocs, query, where, orderBy, limit, startAfter } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"
import ListingItem from "../components/ListingItem"

const Offers = () => {
    const [listings, setListings] = useState(null)
    const [loading, setLoading] = useState(true)
    const [lastFetchedListings, setLastFetchedListings] = useState(null)

    useEffect(() => {
        const fetchListings = async () => {
            try {
                // Get Reference
                const listingsRef = collection(db, "listings")

                // Create a query
                const q = query(listingsRef, where('offer', '==', true), orderBy('timestamp', 'desc'), limit(10))
                
                // Execute query
                const querySnap = await getDocs(q)

                const lastVisible = querySnap.docs[querySnap.docs.length - 1]
                setLastFetchedListings(lastVisible)

                const listings = []
                querySnap.forEach((doc) => {
                    return listings.push({
                        id: doc.id,
                        data: doc.data()
                    })
                })

                setListings(listings)
                setLoading(false)
            // eslint-disable-next-line no-unused-vars
            } catch (error) {
                toast.error("Failed to fetch listings")
            }
        }
        fetchListings()
    }, [])

    // Pagination / Load More
    const OnFetchMoreListings = async () => {
        try {
            // Get Reference
            const listingsRef = collection(db, "listings")

            // Create a query
            const q = query(listingsRef, where('offer', '==', true), orderBy('timestamp', 'desc'), startAfter(lastFetchedListings), limit(10))
            
            // Execute query
            const querySnap = await getDocs(q)

            const lastVisible = querySnap.docs[querySnap.docs.length - 1]
            setLastFetchedListings(lastVisible)

            const listings = []
            querySnap.forEach((doc) => {
                return listings.push({
                    id: doc.id,
                    data: doc.data()
                })
            })

            setListings((prevState) => [...prevState, ...listings])
            setLoading(false)
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            toast.error("Failed to fetch listings")
        }
    }
    
  return <div className="category">
    <header>
        <p className="pageHeader">
            Offers
        </p>
    </header>

    {loading ? <Spinner /> : listings && listings.length > 0 ? (
        <>
            <main>
                <ul className="categoryListings">
                    {listings.map((listing) => (
                        <ListingItem listing={listing.data} id={listing.id} key={listing.id} />
                    ))}
                </ul>
            </main>

            <br />
            <br />
            {lastFetchedListings && (
                <p className="loadMore" onClick={OnFetchMoreListings}>Load More</p>
            )}
        </>
    ) : (
        <p>There are no current offers</p>
    )}
  </div>
}

export default Offers