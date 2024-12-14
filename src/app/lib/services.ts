import { IService } from "./interfaces/service.interface";

export const services: IService[] = [
    {
        service: 'blur',
        components: [{
            type: 'number',
            value: 'value',
            min: 1,
            max: 20,
        }]
    },
    {
        service: 'brightness',
        components: [{
            type: 'number',
            value: 'value',
            min: 0.1,
            max: 10,
        }]
    },
    {
        service: 'contrast',
        components: [{
            type: 'number',
            value: 'value',
            min: 1,
            max: 10,
        }]
    },
    {
        service: 'fade',
        components: [{
            type: 'number',
            value: 'value',
            min: 0.1,
            max: 1,
        }]
    },
    {
        service: 'greyscale',
    },
    {
        service: 'invert',
    },
    {
        service: 'opacity',
        components: [{
            type: 'number',
            value: 'value',
            min: 0.1,
            max: 1,
        }]
    },
    {
        service: 'resize',
        components: [{
            type: 'number',
            value: 'width',
            min: 100,
            max: 1080,
        },
        {
            type: 'number',
            value: 'height',
            min: 100,
            max: 1080,
        }
        ]
    },
    {
        service: 'rotate',
        components: [{
            type: 'select',
            value: 'value',
            options: [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360]
        },]
    },
    {
        service: 'scale',
        components: [{
            type: 'number',
            value: 'value',
            min: 0.1,
            max: 10,
        },]
    },
]