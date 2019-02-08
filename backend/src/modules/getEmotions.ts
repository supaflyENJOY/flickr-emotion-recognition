import { initialize, detect } from '../utils/faceplusplusApi'

initialize(
    process.env.FACEPP_KEY,
    process.env.FACEPP_SECRET
)

export default async (photoUrl: string) => detect({
    image_url: photoUrl,
    return_landmark: 1,
    return_attributes: 'emotion'
})