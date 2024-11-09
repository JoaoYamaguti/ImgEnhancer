import { IService } from "../lib/interfaces/service.interface";

export const data: IService[] = [
    {
        service: 'blur',
        component: 'range',
        min:1,
        max:20,
    },
    {
        service: 'brightness',
        component: 'range',
        min: 0.1,
        max: 10.1
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
        options: [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360]
    },
    {
        service: 'scale',
        component: 'range',
        min: 0.1,
        max: 2
    },
]