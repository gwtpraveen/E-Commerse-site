import { storage } from "./config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export function uploadProductImage(image, imagePath) {
    console.log("imagepath", imagePath)
    const storageRef = ref(storage, imagePath);
    uploadBytes(storageRef, image).then(snapShot => {
        console.log("uploaded")
        console.log(snapShot.ref);     
    })
}

export function getImageUrl(imagePath) {
    let imageRef = ref(storage, imagePath);
    getDownloadURL(imageRef).then(url => {
        return new Promise((resolve, reject) => {
            resolve(url);
        });
    });
}

export function uploadUrl(image, imagePath) {
    const storage = ref(storage, imagePath);
}