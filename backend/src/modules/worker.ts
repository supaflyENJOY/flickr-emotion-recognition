import getPhotos from './getPhotos';
import getEmotions from './getEmotions'
import Photo from '../models/Photo';

async function createImageItems(items) {

    items.forEach(async (item) => {
        const formattedItem = {
            photoId: parseFloat(item.id),
            description: item.title,
            creationDate: new Date(parseFloat(item.dateupload) * 1000),
            url: item.url,
            emotions: item.facesData.map((face) => ({
                ...face.emotions,
                positionX: face.position.left,
                positionY: face.position.top,
                width: face.position.width,
                height: face.position.height,
            }))
        };
        try {
            await Photo.create(formattedItem); 
        } catch(e) {}
    })

}

async function parseStage() {
    const photos = await getPhotos();

    let runs = 0;

    // Hack to fight on FacePP rate limit 3 QpS

    const parseElement = async () => {
        if(runs > 20) return;
        const filteredPhotos = (await Promise.all(photos.map(async (photo: any) => {
            const hasPhoto = await Photo.findOne({ photoId: photo.id });
            return { ...photo, exists: hasPhoto !== null }
        })))
            .filter((photo: any) => !photo.exists)
            .filter((value, index) => index < 3);
        const newPhotos = await Promise.all(filteredPhotos.map(async (photo: any) => {
            const emotionsReply: any = await getEmotions(photo.url);
            if(!emotionsReply.faces) return {};
            const facesData = emotionsReply.faces.map(face => {
                if(!face.face_rectangle || !face.attributes || !face.attributes.emotion) return {};
                return {
                    position: face.face_rectangle,
                    emotions: face.attributes.emotion,
                };
            });
            return { ...photo, facesData: facesData.filter((item) => Object.keys(item).length > 0) };
        }));

        createImageItems(newPhotos.filter(x => Object.keys(x).length > 0));

        runs++;

        setTimeout(parseElement, 1100);
    }

    parseElement();

}

export default function startWorker() {
    parseStage();
    setInterval(parseStage, 60 * 1000);
}