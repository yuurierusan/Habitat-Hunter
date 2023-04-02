import Listing from './Listing'

const Listings = () => {
    return (
        <div className='py-3 sm:py-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {listings.map((listing) => (
                    <Listing
                        title={listing.title}
                        image={listing.image}
                        price={listing.price}
                    />
                ))}
            </div>
        </div>
    )
}
export default Listings
