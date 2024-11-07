import { Jimp } from "jimp";

import { IMagic } from "./interfaces/magic.interface";

export default async function Magic(file: IMagic['file'], setUrlFile: IMagic['setUrlFile'], setUrlNewFile: IMagic['setUrlNewFile']) {

    console.log(file)

    const reader = new FileReader();

    reader.onload = async (e) => {
        const data = e.target?.result;

        if (!data || !(data instanceof ArrayBuffer)) {
            return;
        }

        // Manipulate images uploaded directly from the website.
        const image = await Jimp.fromBuffer(data);

        image.invert();
        // image.pixelate(10);
        // image.normalize();

        setUrlFile(URL.createObjectURL(file))
        setUrlNewFile(await image.getBase64("image/png"))

        return
    };

    reader.readAsArrayBuffer(file);
}
