import { unionWith, eqBy, sortBy, prop, compose, map } from 'ramda';
import { initialize, getPhotoset, getPhotosetByTag } from '../utils/flickrApi';

const flickrApi = initialize(process.env.FLICKR_KEY);

export default async () => {
    const extras = `tags,date_upload,owner_name`;
    const [byPhotoset, byTag] = await Promise.all([
        getPhotoset(flickrApi, {
            photoset_id: process.env.FLICKR_ALBUM_ID,
            user_id: process.env.FLICKR_USER_ID,
            extras
        }),
        getPhotosetByTag(flickrApi, {
            tags: process.env.FLICKR_TAG,
            extras
        })
    ])

    const groupFn = unionWith(eqBy(prop('id')));
    const sortFn = sortBy(compose(parseInt, prop('dateupload')));
    const getImageUrl = ({ farm, server, id, secret }) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_b.jpg`;
    const mapFn = map((item: any) => ({
            ...item,
            url: getImageUrl(item)
        })
    )
    // bullshit
    return compose<any, any, any, any, any>(mapFn, sortFn, groupFn)(byPhotoset.photoset.photo, byTag.photos.photo);
}