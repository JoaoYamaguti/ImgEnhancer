import { Jimp } from "jimp";

import { IMagic } from "./interfaces/magic.interface";

export default async function Magic(process: IMagic['process'], setUrlFile: IMagic['setUrlFile'], setUrlNewFile: IMagic['setUrlNewFile']) {

    console.log(process)

    const reader = new FileReader();

    reader.onload = async (e) => {
        const data = e.target?.result;

        if (!data || !(data instanceof ArrayBuffer)) {
            return;
        }

        // Manipulate images uploaded directly from the website.
        const image = await Jimp.fromBuffer(data);

        console.log(await image.getBase64("image/png"))

        switch (process.service) {
            case 'blur':
                image.blur(process.value ?? 1)

                break;
            case 'brightness':
                image.brightness(process.value ?? 0)

                break;
            case 'contrast':
                image.contrast(process.value ?? 0)

                break;

            case 'fade':
                image.fade(process.value ?? 0)

                break;

            case 'greyscale':
                image.greyscale();

                break;

            case 'invert':
                image.invert()

                break;

            case 'opacity':
                image.opacity(process.value ?? 0)

                break;

            case 'resize':
                if (process.width && !process.height) image.resize({ w: process.width })

                if (!process?.width && process.height) image.resize({ h: process?.height })

                if (process.width && process.height) image.resize({ w: process.width, h: process.height })

                break;

            case 'rotate':
                image.rotate(process.value ?? 0)

                break;

            case 'scale':
                image.scale(0.5)

                break;

            default:
                break;
        }

        setUrlFile(URL.createObjectURL(new Blob([process.file])))
        setUrlNewFile(await image.getBase64("image/png"))

        console.log(await image.getBase64("image/png"))

        return
    };

    reader.readAsArrayBuffer(process.file);
}