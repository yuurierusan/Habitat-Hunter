import { getStorage, ref } from 'firebase/storage'

const storage = getStorage()
const spaceRef = ref(storage, 'images/space.jpg')

// Parent allows us to move to the parent of a reference
const imagesRef = spaceRef.parent
// imagesRef now points to 'images'

// Root allows us to move all the way back to the top of our bucket
const rootRef = spaceRef.root
// rootRef now points to the root
