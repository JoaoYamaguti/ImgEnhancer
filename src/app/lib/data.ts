import { IService } from "../lib/interfaces/service.interface";

export const data: IService[] = [
    {
        service: 'blur',
        component: 'range',
        min:1,
        max:10,
    },
    {
        service: 'brightness',
        component: 'range',
        min: 0.1,
        max: 1
    },
    {
        service: 'contrast',
        component: 'range',
        min: -1,
        max: 1
    },
    {
        service: 'fade',
        component: 'range',
        min: 0.1,
        max: 1
    },
    {
        service: 'greyscale',
    },
    {
        service: 'invert',
    },
    {
        service: 'opacity',
        component: 'range',
        min: 0.1,
        max: 1
    },
    {
        service: 'resize',
        component: 'number'
    },
    {
        service: 'rotate',
        component: 'select',
        options: [90, 180, 270, 360]
    },
    {
        service: 'scale',
        component: 'range',
        min: 0.1,
        max: 2
    },
]