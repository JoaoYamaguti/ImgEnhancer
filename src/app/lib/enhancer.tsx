import Upscaler from "upscaler";

export default async function Enhancer(urlFile) {
    const upscaler = new Upscaler();
    // upscaler.upscale('/public/botao-excluir.png').then(upscaledSrc => {
    //     // base64 representation of image src
    //     console.log(upscaledSrc);
    //   });

    const upscaledSrc = await upscaler.upscale(urlFile)

    return upscaledSrc
}