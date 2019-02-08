import * as Flickr from 'flickr-sdk';

export const initialize = (key: string): Flickr => {
    return new Flickr(key);
}

export const getPhotoset = async (flickr: Flickr, params: any): Promise<any> => {
    const response = await flickr.photosets.getPhotos(params);
    return JSON.parse(response.res.text);
}

export const getPhotosetByTag = async (flickr: Flickr, params: any): Promise<any> => {
    const response = await flickr.photos.search(params);
    return JSON.parse(response.res.text);
}